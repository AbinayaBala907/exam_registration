window.onload = function() {
    const selectedExam = JSON.parse(localStorage.getItem('selectedExam'));

    if (selectedExam) {
        document.getElementById('examName').value = selectedExam.name;
        document.getElementById('examDate').value = selectedExam.date;
    }
}

function submitRegistration() {
    alert("You have successfully registered for the exam!");
    window.location.href = "dashboard.html"; // Redirect back to dashboard after registration
    return false;
}
