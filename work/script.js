
    function participate() {
        alert("Thank you for your interest! Please register for the contest.");
    }

    // Toggle FAQ answers
    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block"; // Show the answer
            } else {
                answer.style.display = "none"; // Hide the answer
            }
        });
    });

