function processPayment() {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardHolder = document.getElementById('cardHolder').value;
  
    if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
      alert('Please fill all the fields.');
      return false;
    }
  
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      alert('Enter a valid 16-digit card number.');
      return false;
    }
  
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      alert('Enter expiry date in MM/YY format.');
      return false;
    }
  
    if (cvv.length !== 3 || isNaN(cvv)) {
      alert('Enter a valid 3-digit CVV.');
      return false;
    }
    document.getElementById('paymentMessage').style.display = 'block';
    alert('Payment successful! Thank you.');
    // You can redirect or clear the form here
    setTimeout(function() {
        window.location.href = 'dashboard.html'; // Redirect to a confirmation page (you can create this page)
    }, 3000);
    return false; // prevent actual form submission
  }
  