function mostrarMensajeYMusica() {
  const mensaje = `
    ✨ Que Dios te bendiga grandemente en este nuevo año de vida.
    🕊️ “El Señor te bendiga y te guarde; el Señor haga resplandecer su rostro sobre ti...” - Números 6:24-25 

  `;
  document.getElementById('mensaje').innerHTML = mensaje;
}

function iniciarMusica() {
  const audio = document.getElementById("bgmusic");

  audio.volume = 0.59; // volumen opcional
  audio.currentTime = 6;
  audio.play();
}

