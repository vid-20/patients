// script.js
document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");
    
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle("active");
        });
    });
});
// Smooth scroll for FAQ button
/*document.querySelector('.faq-button').addEventListener('click', function (event) {
    document.querySelector('#faq').scrollIntoView({
        behavior: 'smooth'
    });
});*/

document.getElementById("faq-button").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default jump behavior

    let faqSection = document.getElementById("faq");
    let faqPosition = faqSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: faqPosition,
        behavior: "smooth" // Smooth scrolling effect
    });
});
// Toggle FAQ answers
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
