/* =========================
   SKILL FILTER + COUNT
========================= */
const filterButtons = document.querySelectorAll('.filter');
const skills = document.querySelectorAll('.skill');
const countEl = document.getElementById('skillCount');

function applyFilter(category) {
  let visible = 0;
  skills.forEach(skill => {
    const show = category === 'all' || skill.dataset.cat.split(' ').includes(category);
    skill.classList.toggle('hide', !show);
    if (show) visible++;
  });
  countEl.textContent = `Showing ${visible} total skills`;
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});
applyFilter('all');

/* =========================
   ACTIVE NAV (IntersectionObserver)
========================= */
const navItems = document.querySelectorAll('.nav-item[data-target]');
const sections = document.querySelectorAll('main section');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    // "resume" has no nav item of its own, so it highlights nothing.
    navItems.forEach(item =>
      item.classList.toggle('active', item.dataset.target === entry.target.id));
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => navObserver.observe(section));

/* =========================
   MENU SHEET
========================= */
const menuBtn = document.getElementById('menuBtn');
const sheet = document.getElementById('sheet');

function setMenu(open) {
  sheet.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', e => { e.stopPropagation(); setMenu(sheet.hidden); });
sheet.addEventListener('click', () => setMenu(false));
document.addEventListener('click', e => { if (!sheet.contains(e.target)) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

/* =========================
   SECTION FADE-IN
========================= */
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section:not(.hero)').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});