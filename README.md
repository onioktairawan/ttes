# 🤖 WhatsApp Userbot - Multifungsi

Bot WhatsApp berbasis `baileys` dengan berbagai fitur lengkap: auto-respon, game (Susun Kata & Family 100), welcome custom, tag all, pin message, dan lainnya. Semua data disimpan dalam file JSON (tanpa database SQL).

---

## 📂 Struktur Folder

whatsapp-userbot/ ├── .env # Variabel lingkungan (nomor owner, dll) ├── .gitignore # File yang diabaikan oleh Git ├── README.md # Dokumentasi proyek ├── index.js # Entry point bot ├── package.json # Dependensi NPM │ ├── session/ # Folder penyimpanan sesi WA │ └── creds.json │ ├── handler/ # Handler perintah dan pesan │ ├── commandHandler.js │ └── messageHandler.js │ ├── lib/ # Library utilitas │ ├── logger.js │ ├── uptime.js │ └── utils.js │ ├── storage/ # Data penyimpanan jangka panjang │ ├── prefix.json │ ├── welcome.json │ ├── response.json │ ├── toggles.json │ ├── scores.json │ ├── susun_kata.json │ └── family100.json

---

## 🛠️ Cara Menjalankan

1. Clone repository:
    ```bash
    git clone https://github.com/username/whatsapp-userbot.git
    cd whatsapp-userbot
    ```

2. Install dependensi:
    ```bash
    npm install
    ```

3. Buat file `.env`:
    ```env
    OWNER=6281234567890
    ```

4. Jalankan bot:
    ```bash
    node index.js
    ```

---

## ⚙️ Fitur Utama

