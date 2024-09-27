document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const terms = document.getElementById("terms").checked;

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Additional validation (like email format, etc.) can be added here

    // If all validation passes
    alert("Registration successful!");

    // Optional: Here you can submit the form data to the server using AJAX
    // e.g., using fetch or XMLHttpRequest
});
