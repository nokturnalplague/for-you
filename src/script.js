const audio = document.getElementById('audio');
const btn   = document.getElementById('playPause');

const setUI = playing => {
  btn.setAttribute('aria-pressed', playing);
  btn.setAttribute('aria-label', playing ? 'Pausar' : 'Tocar');
};

btn.addEventListener('click', async () => {
  if (audio.paused) {
    try { await audio.play(); setUI(true); }
    catch (err) {
      alert('Não foi possível iniciar o áudio. Verifique o formato/servidor e tente novamente.');
    }
  } else {
    audio.pause(); setUI(false);
  }
});

audio.addEventListener('ended', () => setUI(false));