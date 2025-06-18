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
