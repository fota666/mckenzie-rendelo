<?php
// Callback request handler for the MediaCenter host (PHP mail()).
// Receives the form from CallbackForm.astro and emails it to the clinic. No database, nothing stored.
// Only runs on a PHP host: the Astro dev server and GitHub Pages serve this file as plain text.

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$TO = 'mck.relle@t-online.hu';
$FROM = 'noreply@gyogytornarendelo.hu';

function fail(int $code, string $msg): void {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail(405, 'Csak POST kérés.');

// Honeypot: real visitors never fill this hidden field.
if (!empty($_POST['website'] ?? '')) { echo json_encode(['ok' => true]); exit; }

function field(string $key, int $max): string {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = preg_replace('/[\r\n]+/', ' ', $v); // no header injection, single line
    return mb_substr($v, 0, $max);
}

$name    = field('nev', 100);
$phone   = field('telefon', 40);
$clinic  = field('rendelo', 40);
$when    = field('mikor', 40);
$note    = mb_substr(trim((string)($_POST['panasz'] ?? '')), 0, 600);
$consent = ($_POST['hozzajarulas'] ?? '') === 'igen';

if ($name === '' || $phone === '') fail(422, 'A név és a telefonszám kötelező.');
if (!preg_match('/^[0-9+()\/\s-]{6,40}$/', $phone)) fail(422, 'A telefonszám formátuma nem megfelelő.');
if (!$consent) fail(422, 'Az adatkezelési hozzájárulás szükséges.');

// Light rate limit: one request per IP per 60 seconds.
$lock = sys_get_temp_dir() . '/visszahivas_' . md5($_SERVER['REMOTE_ADDR'] ?? '') . '.lock';
if (is_file($lock) && time() - filemtime($lock) < 60) fail(429, 'Kérjük, várjon egy percet az újabb küldés előtt.');
@touch($lock);

$body = "Visszahívás-kérés a weboldalról\n\n"
      . "Név: $name\n"
      . "Telefon: $phone\n"
      . "Rendelő: " . ($clinic ?: 'mindegy') . "\n"
      . "Mikor hívjuk: " . ($when ?: 'mindegy') . "\n"
      . "Panasz röviden: " . ($note !== '' ? "\n$note" : '-') . "\n\n"
      . "Beküldve: " . date('Y-m-d H:i') . "\n";

$subject = '=?UTF-8?B?' . base64_encode("Visszahívás-kérés: $name") . '?=';
$headers = "From: McKenzie weboldal <$FROM>\r\n"
         . "MIME-Version: 1.0\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n"
         . "Content-Transfer-Encoding: 8bit\r\n";

if (!mail($TO, $subject, $body, $headers, "-f$FROM")) fail(500, 'A küldés nem sikerült.');

echo json_encode(['ok' => true]);
