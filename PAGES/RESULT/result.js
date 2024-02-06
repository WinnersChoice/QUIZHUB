document.addEventListener("DOMContentLoaded", function () {

    // Add Main Home button
    const mainHomeButton = document.createElement("button");
    mainHomeButton.textContent = "Main Home";
    mainHomeButton.classList.add("main-home-button"); // You can style this class in your CSS
    mainHomeButton.addEventListener("click", navigateToMainHome);

    // Append the button to the body or any desired container
    document.body.appendChild(mainHomeButton);

    // Your existing code...

    const quizResults = JSON.parse(localStorage.getItem("quizResults")) || {};

    const totalScoreElement = document.getElementById("total-score");
    totalScoreElement.textContent = `Total Score: ${quizResults.score || 0}`;

    const totalMarksElement = document.getElementById("total-marks");
    totalMarksElement.textContent = `Total Marks: ${quizResults.totalMarks || 0}`;

    const questionsListElement = document.getElementById("questions-list");
    const questions = quizResults.questions || [];

    const selectedSubject = quizResults.selectedSubject || "Unknown Subject";

    questions.forEach((question, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Question ${index + 1}: ${question.question}<br></strong>`;

        // const userAnswerElement = document.createElement("em");
        // userAnswerElement.textContent = `Your Answer: ${question.userAnswer}`;
        // if (question.userAnswer === question.correctAnswer) {
        //     userAnswerElement.style.color = "green";
        // } else {
        //     userAnswerElement.style.color = "red";
        // }
        // listItem.appendChild(userAnswerElement);

        const correctAnswerElement = document.createElement("em");
        correctAnswerElement.innerHTML = `<strong>Correct Answer: ${question.correctAnswer}</strong><br><br>`;
        // correctAnswerElement.classList.add("correct-answer"); // Add CSS class for styling
        listItem.appendChild(correctAnswerElement);

        questionsListElement.appendChild(listItem);
    });

    
// Add a function to handle the click event of the Main Home button
function navigateToMainHome() {
    window.location.href = "../../index.html"; // Update the URL based on your project structure
}
    const certificationButton = document.getElementById("certification-button");
    certificationButton.addEventListener("click", handleCertification);

    function handleCertification() {
        const userName = prompt("Enter your name:");
        const certificationMessage = `Congratulations, ${userName}! You are now certified!
You have earned ${quizResults.score || 0} marks out of ${quizResults.totalMarks || 0} in ${selectedSubject}.
Certification Details:
- Valid Platforms: Where our Terms & Conditions are accepted.
- Further Details: Refer to our Terms & Conditions.
Important Instructions:
1. Please take a screenshot of this certification.
2. For certificate issuance, send the screenshot to us.
3. Contact us via email for any queries.
4. The certification process may take up to 48 hours.
Thank you! Best wishes from our team.`;

alert(certificationMessage);

        if (userName) {
            
        } else {
            alert("Name not entered. Certification cancelled.");
        }
    }
});
