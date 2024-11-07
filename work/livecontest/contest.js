document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      // Toggle active class for arrow rotation
      question.classList.toggle('active');

      // Toggle the answer display
      const answer = question.nextElementSibling;
      if (answer.style.display === 'block') {
          answer.style.display = 'none';
      } else {
          answer.style.display = 'block';
      }
  });
});
  
  // Simple Slider Auto-Scroll
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  
  setInterval(() => {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].style.display = 'block';
  }, 5000);

  // Create custom cursor trail
document.addEventListener('mousemove', function(e) {
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    cursorTrail.style.left = `${e.clientX}px`;
    cursorTrail.style.top = `${e.clientY}px`;
    document.body.appendChild(cursorTrail);
  
    setTimeout(() => cursorTrail.remove(), 500);
  });
  document.querySelectorAll('.contest-box').forEach(box => {
    box.addEventListener('mouseover', () => {
      box.style.transform = 'scale(1.1)';
    });
  
    box.addEventListener('mouseout', () => {
      box.style.transform = 'scale(1)';
    });
  });


  
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }


  function scrollToContests() {
    document.getElementById("contests").scrollIntoView({
        behavior: "smooth"
    });
  }