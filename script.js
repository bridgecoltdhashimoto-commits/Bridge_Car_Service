const header = document.querySelector('[data-header]');
const navLinks = document.querySelectorAll('.site-nav a, .footer-link, .ghost-button');

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
};

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (!targetId?.startsWith('#')) {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
