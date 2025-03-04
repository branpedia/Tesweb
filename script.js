document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').textContent = 'Saran berhasil dikirim!';
            document.getElementById('feedbackForm').reset();
        } else {
            document.getElementById('message').textContent = 'Terjadi kesalahan. Silakan coba lagi.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'Terjadi kesalahan. Silakan coba lagi.';
    });
});
