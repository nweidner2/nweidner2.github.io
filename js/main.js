const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

function closeNav() {
  if (!navToggle || !nav) return;
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeNav();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) closeNav();
  });
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
