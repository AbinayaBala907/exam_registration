


// Function to process payment
function processPayment() {
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (!paymentMethod) {
        alert("Please select a payment method.");
        return false;
    }

    // Redirect immediately to credit card page if selected
    if (paymentMethod === "Credit Card") {
        window.location.href = 'creditcard.html';
        return false; // Stop further execution
    }

    // For other payment methods, show success and redirect
    document.getElementById('paymentMessage').style.display = 'block';

    setTimeout(function () {
        window.location.href = 'dashboard.html';
    }, 1000);

    return false;
}
