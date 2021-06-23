const typeWriter = document.getElementById('typewriter-text');
const text = `Hello, moi c'est Nancy Druesnes !` ;

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

