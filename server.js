const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage, 
    limits: { fileSize: 20 * 1024 * 1024 }, // Maksimal 20MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/")) {
            cb(null, true);
        } else {
            cb(new Error("Hanya gambar dan video yang diperbolehkan!"));
        }
    }
});

// API Upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "File tidak valid" });
    }
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ url: fileUrl });
});

// Menyajikan file yang diunggah
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
