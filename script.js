document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Saran Dikirim:", { name, email, message });

    // Reset Form
    document.getElementById("feedbackForm").reset();
});
