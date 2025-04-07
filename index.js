require('dotenv').config();
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { handleCommand } = require('./handler/commandHandler');
const { handleIncomingMessage } = require('./handler/messageHandler');
const { logger } = require('./lib/logger');
const fs = require('fs');
const path = require('path');

const startBot = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('./session');
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    logger: logger('info'),
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'open') {
      console.log('\x1b[32m[ BOT ]\x1b[0m Bot berhasil terhubung ke WhatsApp!');
    } else if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode || '';
      console.log('\x1b[31m[ BOT ]\x1b[0m Koneksi terputus:', reason);
      if (reason !== 401) startBot(); // Reconnect otomatis
    }
  });

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const from = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;
    const isGroup = from.endsWith('@g.us');

    // Logging masuk
    console.log(`\x1b[36m[ MSG ]\x1b[0m ${sender} -> ${msg.message?.conversation || Object.keys(msg.message)[0]}`);

    // Handle Command & Message
    await handleCommand(sock, msg, from, sender, isGroup);
    await handleIncomingMessage(sock, msg, from, sender, isGroup);
  });
};

startBot();

