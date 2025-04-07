const fs = require('fs-extra');

// Fungsi untuk menyimpan data ke file JSON
function saveDataToJson(filePath, data) {
    fs.writeJsonSync(filePath, data);
}

// Fungsi untuk memuat data dari file JSON
function loadDataFromJson(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readJsonSync(filePath);
    }
    return {};
}

// Fungsi untuk memeriksa apakah suatu kata adalah kata yang valid untuk game
function isValidWord(word) {
    // Logika untuk memvalidasi kata (misalnya, memeriksa panjang atau apakah ada di kamus)
    return word.length >= 3;
}

module.exports = { saveDataToJson, loadDataFromJson, isValidWord };

