// ── PAGE NAVIGATION ──
function openPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);

  // Animate skill bars when resume opens
  if (id === 'resume') animateSkillBars();
}

function goBack() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('home').classList.add('active');
}

// ── SKILL BAR ANIMATION ──
function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = bar.dataset.width + '%';
    }, 100);
  });
}

// ── CONTACT FORM ──
function sendMessage(e) {
  e.preventDefault();

  const btn = e.target.querySelector('.send-btn');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  setTimeout(() => {
    e.target.reset();

    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send';
    btn.disabled = false;

    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);

  }, 1200);
}

// ── HERO ENTRANCE ANIMATION ──
window.addEventListener('load', () => {
  const home = document.getElementById('home');
  const children = home.children;

  [...children].forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;

    setTimeout(() => {
      el.style.opacity = '';
      el.style.transform = '';
    }, 50);
  });
});