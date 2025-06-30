// assets/js/main.js

// 1. Auto‐update footer year
const footer = document.querySelector('footer');
if (footer) {
  const yearSpan = document.createElement('span');
  const year = new Date().getFullYear();
  // insert at end of footer text
  footer.innerHTML = footer.innerHTML.replace(/© \d{4}/, `© ${year}`);
}

// 2. Smooth scroll for in‐page navigation
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form submit handler (Issue #14)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'Thank you! I\'ll get back to you soon.';
    status.classList.remove('hidden');
    contactForm.reset();
  });
}
