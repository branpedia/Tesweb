const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;
const FILE_PATH = "feedback.json";

app.use(express.static('public'));
app.use(express.json());

// API Simpan Saran
app.post('/submit-feedback', (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Masukan tidak boleh kosong!" });

    let feedbackList = [];
    if (fs.existsSync(FILE_PATH)) {
        feedbackList = JSON.parse(fs.readFileSync(FILE_PATH));
    }

    feedbackList.push({ text, date: new Date().toISOString() });
    fs.writeFileSync(FILE_PATH, JSON.stringify(feedbackList, null, 2));

    res.json({ message: "Terima kasih atas saran & kritik Anda!" });
});

// API Tampilkan Saran
app.get('/feedback', (req, res) => {
    if (!fs.existsSync(FILE_PATH)) return res.json([]);
    res.json(JSON.parse(fs.readFileSync(FILE_PATH)));
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
