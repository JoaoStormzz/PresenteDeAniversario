const intro = document.getElementById('intro');
const heartsLayer = document.getElementById('hearts');

function createHeart() {
  const el = document.createElement('span');
  const emojis = ['💖','❤️','💘','💗','💓','💞','💕'];
  el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  el.className = 'heart';
  const left = Math.random() * 100;
  el.style.left = `${left}vw`;
  const scale = (Math.random() * 0.8) + 0.6;
  el.style.setProperty('--scale', scale.toFixed(2));
  const dur = (Math.random() * 4) + 4;
  el.style.setProperty('--dur', `${dur.toFixed(2)}s`);
  const drift = (Math.random() * 240) - 120;
  el.style.setProperty('--drift', `${drift.toFixed(0)}px`);
  heartsLayer.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

let heartsInterval = null;
function startHearts() {
  if (heartsInterval) return;
  heartsInterval = setInterval(() => {
    const count = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) createHeart();
  }, 250);
}

intro.addEventListener('click', () => {
  intro.classList.add('hide');
  startHearts();
});

intro.tabIndex = 0;
intro.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    intro.click();
  }
});
