const chalk = require('chalk');
const moment = require('moment');

// Fungsi untuk mencetak log dengan waktu
function log(message) {
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(chalk.blue(`[${time}] ${message}`));
}

// Fungsi untuk mencetak log dengan level 'info'
function info(message) {
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(chalk.green(`[INFO] [${time}] ${message}`));
}

// Fungsi untuk mencetak log dengan level 'warn'
function warn(message) {
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(chalk.yellow(`[WARN] [${time}] ${message}`));
}

// Fungsi untuk mencetak log dengan level 'error'
function error(message) {
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(chalk.red(`[ERROR] [${time}] ${message}`));
}

module.exports = { log, info, warn, error };

