async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files.length) {
        alert("Pilih file terlebih dahulu!");
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    document.getElementById('status').innerText = "Uploading...";

    try {
        const response = await fetch("/upload", {
            method: "POST",
            body: formData
        });
        const result = await response.json();
        if (result.url) {
            document.getElementById('status').innerHTML = `Upload berhasil! <br> <a href="${result.url}" target="_blank">${result.url}</a>`;
        } else {
            document.getElementById('status').innerText = "Upload gagal!";
        }
    } catch (error) {
        document.getElementById('status').innerText = "Terjadi kesalahan!";
    }
}
