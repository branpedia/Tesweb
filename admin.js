document.addEventListener('DOMContentLoaded', function () {
    fetch('admin.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#feedbackTable tbody');
            tbody.innerHTML = '';

            data.forEach(feedback => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${feedback.nama}</td>
                    <td>${feedback.email}</td>
                    <td>${feedback.pesan}</td>
                    <td>${feedback.rating}</td>
                    <td><button onclick="deleteFeedback(${feedback.id})">Hapus</button></td>
                `;

                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});

function deleteFeedback(id) {
    fetch(`delete.php?id=${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                location.reload();
            }
        })
        .catch(error => console.error('Error:', error));
}
