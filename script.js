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
