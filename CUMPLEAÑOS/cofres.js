function abrirCofre(cofreElement, imagenReal) {
  // Agregar clase de animación
  cofreElement.classList.add('animar-cofre');

  // Esperar al próximo "repaint" del navegador para asegurar que la animación se aplique
  requestAnimationFrame(() => {
    // Esperar a que termine la animación (500ms)
    setTimeout(() => {
      const img = document.createElement('img');
      img.src = imagenReal;
      img.className = 'img-fluid rounded';
      img.alt = 'imagen revelada';

      // Mantener el tamaño y estilo
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';

      cofreElement.parentNode.replaceChild(img, cofreElement);

      // Izquierda
      confetti({
        particleCount: 840,
        spread: 120,
        startVelocity: 65,
        origin: { x: 0, y: 0.8 },
        colors: ['#ff69b4', '#ffd700', '#87ceeb', '#ffffff']
      });

      // Derecha
      confetti({
        particleCount: 840,
        spread: 100,
        startVelocity: 65,
        origin: { x: 1, y: 0.8 },
        colors: ['#ff69b4', '#ffd700', '#87ceeb', '#ffffff']
      });
    }, 500);
  });
}
