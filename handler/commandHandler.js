const fs = require('fs-extra');
const { prefix } = require('../config');
const { loadWelcomeMessages, saveWelcomeMessage, loadScores, saveScores } = require('../utils');

// Menangani perintah command yang masuk
function handleCommand(client, message) {
    const { body, from, isGroupMsg } = message;

    // Perintah set welcome
    if (body.startsWith(`${prefix}setwelcome`)) {
        const welcomeMessage = body.slice(prefix.length + 10).trim();
        if (!isGroupMsg) {
            client.sendMessage(from, 'Perintah hanya bisa digunakan di grup.');
            return;
        }
        saveWelcomeMessage(welcomeMessage, from);
        client.sendMessage(from, `Pesan sambutan grup berhasil diubah menjadi: "${welcomeMessage}"`);
    }

    // Perintah gping
    if (body === `${prefix}gping`) {
        const uptime = client.info.uptime; // Dapatkan uptime bot
        client.sendMessage(from, `Status Bot:\nPing: ${Math.floor(Math.random() * 100)}ms\nUptime: ${uptime}`);
    }

    // Perintah reset skor untuk admin
    if (body === `${prefix}resetscore`) {
        const scores = loadScores();
        if (from === "adminNumber") {  // Gantilah dengan ID admin yang sesuai
            saveScores({});
            client.sendMessage(from, 'Skor telah direset.');
        } else {
            client.sendMessage(from, 'Hanya admin yang bisa mereset skor.');
        }
    }
}

module.exports = { handleCommand };

