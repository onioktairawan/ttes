const moment = require('moment');

// Menyimpan waktu mulai bot
let startTime = moment();

// Fungsi untuk mendapatkan uptime bot dalam format yang mudah dibaca
function getUptime() {
    const now = moment();
    const duration = moment.duration(now.diff(startTime));
    return duration.humanize();
}

// Fungsi untuk mereset waktu uptime
function resetUptime() {
    startTime = moment();
}

module.exports = { getUptime, resetUptime };

