const { handleAutoResponse, startGame } = require('../utils');

// Menangani pesan masuk
function handleMessage(client, message) {
    const { body, from, isGroupMsg } = message;

    // Respon otomatis berdasarkan kata kunci
    handleAutoResponse(client, message);

    // Memulai game "susun kata" jika ada perintah
    if (body.startsWith(`${prefix}susun-kata`)) {
        startGame(client, from);
    }

    // Menangani pesan welcome (Jika grup sudah diatur welcome message-nya)
    const welcomeMessages = loadWelcomeMessages();
    if (isGroupMsg && welcomeMessages[from]) {
        client.sendMessage(from, welcomeMessages[from]);
    }
}

module.exports = { handleMessage };

