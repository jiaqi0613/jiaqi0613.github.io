// Navbar scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Typewriter effect
(function () {
  const phrases = ['I design experiences.', 'I craft stories.', 'I bridge expertises.'];
  const el = document.querySelector('.typewriter__text');
  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 50;
  const pauseEnd = 1800;
  const pauseStart = 400;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, pauseEnd);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, pauseStart);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }

  setTimeout(tick, pauseStart);
})();

// Stagger project cards on load
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(card);
  });

  const sections = document.querySelectorAll('.project-section, .about-text, .about-details');
  sections.forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
