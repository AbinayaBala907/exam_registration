// signup.js

// Function to validate the sign-up form
function validateSignup() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false; // Prevent form submission
    }

    // Optionally, you can add more validations for email format, password strength, etc.
    alert("Sign-Up Successful!");
    return true; // Form can be submitted
}
