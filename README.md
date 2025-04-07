# 🤖 WhatsApp Userbot Multifungsi

Userbot WhatsApp dengan fitur lengkap: stiker otomatis, auto-respon, game, manajemen grup, dan masih banyak lagi. Dibuat menggunakan [Baileys](https://github.com/WhiskeySockets/Baileys) tanpa SQL, hanya menggunakan penyimpanan file JSON.

---

## 🚀 Fitur Utama

| Fitur               | Deskripsi |
|---------------------|-----------|
| `.menu`             | Menampilkan daftar semua perintah |
| `.stiker`           | Membuat stiker dari teks atau gambar (dengan reply) |
| `.ping`             | Cek status bot: ping, lokasi IP, dan uptime |
| `.setwelcome`       | Atur pesan welcome custom (dapat pakai placeholder `@user`, `#group`) |
| `.addrespon`        | Tambahkan auto-respon ke pesan tertentu |
| `.listrespon`       | Lihat daftar trigger auto-respon |
| `.togglrespon`      | Aktif/nonaktifkan auto-respon di grup |
| `.tagall`           | Mention semua anggota grup (bisa via reply atau tanpa) |
| `.pin`              | Pin pesan dalam grup |
| `.setprefix`        | Ganti prefix bot di grup (default: `.`) |
| Game: Susun Kata    | Ketik `.susun` untuk mulai, skor disimpan otomatis |
| Game: Family 100    | Ketik `.family100` untuk mulai, buat soal sendiri juga bisa! |
| `.addkata`          | Tambahkan soal Susun Kata (khusus owner) |
| `.addsoal`          | Tambahkan soal Family 100 (semua user bisa, dengan konfirmasi) |
| `.resetscore`       | Reset skor game (khusus admin) |

---

## 📁 Struktur Folder

whatsapp-userbot/ ├── .env ├── .gitignore ├── README.md ├── index.js ├── package.json │ ├── session/ │ └── creds.json │ ├── handler/ │ ├── commandHandler.js │ └── messageHandler.js │ ├── lib/ │ ├── logger.js │ ├── uptime.js │ └── utils.js │ ├── storage/ │ ├── prefix.json │ ├── welcome.json │ ├── response.json │ ├── toggles.json │ ├── scores.json │ ├── susun_kata.json │ └── family100.json


---

## ⚙️ Instalasi & Menjalankan

```bash
# 1. Clone repo
git clone https://github.com/username/whatsapp-userbot.git
cd whatsapp-userbot

# 2. Install dependency
npm install

# 3. Buat file .env
cp .env.example .env
# lalu isi nomor owner dan lainnya di .env

# 4. Jalankan bot
node index.js
📝 Credits
Baileys
