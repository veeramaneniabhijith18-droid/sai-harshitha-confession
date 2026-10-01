const arrow = document.getElementById('arrow');
const arena = document.getElementById('arena');
const target = document.getElementById('heartTarget');
const reveal = document.getElementById('reveal');
const confettiLayer = document.getElementById('confettiLayer');
const yesButton = document.getElementById('yesButton');
const maybeButton = document.getElementById('maybeButton');
const finalNote = document.getElementById('finalNote');
let hasHit = false;

function celebrate() {
  const colors = ['#ff5a78', '#ffc2d1', '#ff9eb1', '#e5c5ff', '#fff2d9'];
  for (let i = 0; i < 65; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti';
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.background = colors[Math.floor(Math.random() * colors.length)];
    bit.style.animationDelay = `${Math.random() * .55}s`;
    bit.style.transform = `rotate(${Math.random() * 90}deg)`;
    confettiLayer.appendChild(bit);
    setTimeout(() => bit.remove(), 3500);
  }
}

function hitHeart() {
  if (hasHit) return;
  hasHit = true;
  arrow.classList.add('shooting');
  setTimeout(() => {
    arena.classList.add('hit');
    document.getElementById('instruction').style.opacity = '0';
    document.getElementById('aimLine').style.opacity = '0';
    document.getElementById('hitMessage').classList.add('visible');
  }, 430);
  setTimeout(() => {
    reveal.classList.add('show');
    reveal.setAttribute('aria-hidden', 'false');
    celebrate();
    reveal.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 1000);
}

arrow.addEventListener('click', hitHeart);
target.addEventListener('click', hitHeart);
yesButton.addEventListener('click', () => {
  finalNote.textContent = 'You just made my whole world brighter! 💞';
  celebrate();
});
maybeButton.addEventListener('click', () => {
  finalNote.textContent = 'Take all the time you need. My feelings are not going anywhere. 🌷';
  maybeButton.textContent = 'Thank you for being honest';
});
