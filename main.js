'use strict';
const keys = document.querySelectorAll('.key');

// para tocar con el tactil del movil
function tocar (e) {

  const targetElement = e.currentTarget;
  const audio = document.querySelector(`audio[data-key= "${targetElement.getAttribute('data-key')}"]`);
  const key = document.querySelector(`.key[data-key= "${targetElement.getAttribute('data-key')}"]`);


  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

//para tocar con las teclas del pc
function playSound(e) {
  const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

//para eliminar transicion y que vuelvan al sitio despues del sonido
function removeTransition(e) {

  if (e.propertyName !== 'transform') return; // dont do anything if is not a tranform
  this.classList.remove('playing');
}

//listener para clicks de movil
keys.forEach (key => key.addEventListener('click', tocar)),

keys.forEach(key => key.addEventListener('transitionend', removeTransition)),

window.addEventListener('keydown', playSound);


