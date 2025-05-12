const exams = [
    { name: "Mathematics 1", date: "2025-05-20", center: "Center A" },
    { name: "Physics 1", date: "2025-05-22", center: "Center B" },
    { name: "Computer Science", date: "2025-05-24", center: "Center C" },
    { name: "Chemistry 1", date: "2025-05-26", center: "Center D" },
    { name: "Biology 1", date: "2025-05-28", center: "Center E" },
    { name: "English Literature", date: "2025-06-01", center: "Center F" },
    { name: "History", date: "2025-06-03", center: "Center G" },
    { name: "Geography", date: "2025-06-05", center: "Center H" },
    { name: "Economics", date: "2025-06-07", center: "Center I" },
    { name: "Environmental Science", date: "2025-06-10", center: "Center J" }
    
];

window.onload = function() {
    const examListDiv = document.getElementById('examList');

    exams.forEach(exam => {
        const examCard = document.createElement('div');
        examCard.className = 'exam-card';
        examCard.innerHTML = `
            <h2>${exam.name}</h2>
            <p>Date: ${exam.date}</p>
            <p>Center: ${exam.center}</p>
        `;

        examCard.onclick = function() {
            // Save selected exam details
            localStorage.setItem('selectedExam', JSON.stringify(exam));
            window.location.href = "register.html"; // Redirect to registration form
        };

        examListDiv.appendChild(examCard);
    });
}
