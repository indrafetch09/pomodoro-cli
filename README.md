# 🍅 Pomodoro CLI

Pomodoro CLI adalah aplikasi timer sederhana, interaktif, dan ringan yang bisa berjalan langsung di terminal (Command Line Interface).

Dibuat untuk developer yang ingin tetap fokus tanpa perlu buka app pomodoro di website.

Note:
Aplikasi ini saya buat dengan tujuan belajar Javasrcipt asynchronous function, dan kebetulan saya nemu referensinya di blog Medium, linknya ada di bagian paling bawah.

Mohon kritik dan sarannya.

## ✨ Fitur

- **Interactive UI:** Menggunakan `@clack/prompts` untuk tampilan yang bersih dan modern.
- **Customizable:** Atur durasi kerja, istirahat, dan jumlah siklus (cycle) sesuai keinginan.
- **Real-time Countdown:** Timer berjalan mundur detik demi detik.
- **Cross-Platform:** Berjalan lancar di Windows, macOS, dan Linux.
- **Cancel Handling:** Aman dimatikan kapan saja dengan `Ctrl+C`.

## 🚀 Cara Pakai (Tanpa Install)

Cara termudah untuk mencoba aplikasi ini tanpa perlu menginstall apapun di komputer kamu (membutuhkan Node.js terinstall):

Kalo kamu belum install node js, silahkan ke link berikut:

- Install node js:
  https://nodejs.org/en/download

```bash
npx github:indrafetch09/pomodoro-cli
```

## Cara pakai di local (Local Install)

```bash
npm install -g github:indrafetch09/pomodoro-cli
```

Lalu ketik:

```bash
pomo
```

Referensi:

- https://medium.com/@kiwojima/create-your-own-pomodoro-timer-for-the-command-line-using-javascript-and-clack-36a2c9361190
