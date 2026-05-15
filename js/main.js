/* ── Mobile nav toggle ──────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

/* close when a link is tapped */
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

/* ── Active nav link ────────────────────────────────────── */
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});
