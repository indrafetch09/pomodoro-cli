# 🍅 Pomodoro CLI

Aplikasi **Pomodoro Timer** sederhana, interaktif, dan ringan yang bisa berjalan langsung di terminal (Command Line Interface).

Dibuat untuk developer yang ingin tetap fokus tanpa perlu meninggalkan terminal.

Note:
Aplikasi ini saya buat dengan tujuan belajar Javasrcipt asynchronous function, dan kebetulan saya nemu referensinya di blog Medium, linknya ada di bagian Referensi.

Mohon kritik dan sarannya.

## ✨ Fitur

- **Interactive UI:** Menggunakan `@clack/prompts` untuk tampilan yang bersih dan modern.
- **Customizable:** Atur durasi kerja, istirahat, dan jumlah siklus (cycle) sesuai keinginan.
- **Real-time Countdown:** Timer berjalan mundur detik demi detik (tanpa spamming baris baru).
- **Cross-Platform:** Berjalan lancar di Windows, macOS, dan Linux (termasuk Arch Linux!).
- **Cancel Handling:** Aman dimatikan kapan saja dengan `Ctrl+C`.

## 🚀 Cara Pakai (Tanpa Install)

Cara termudah untuk mencoba aplikasi ini tanpa perlu menginstall apapun di komputer kamu (membutuhkan Node.js terinstall):

```bash
npx github:username-kamu/nama-repo-kamu
```

## Cara pakai di local (Local Install)

```bash
npm install -g github:username-kamu/nama-repo-kamu
```

Lalu ketik:

```bash
pomo
```

Referensi:

- https://medium.com/@kiwojima/create-your-own-pomodoro-timer-for-the-command-line-using-javascript-and-clack-36a2c9361190
