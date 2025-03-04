async function sendFeedback() {
    const text = document.getElementById("feedbackText").value.trim();
    if (!text) {
        alert("Silakan isi saran atau kritik!");
        return;
    }

    const response = await fetch("/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    const result = await response.json();
    document.getElementById("status").innerText = result.message;
    document.getElementById("feedbackText").value = "";
}
