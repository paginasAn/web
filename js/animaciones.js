function abrirCarta() {
    const sobre = document.querySelector('.sobre');
    sobre.classList.add('abierto');
  
    // Espera que se abra y redirige
    setTimeout(() => {
      window.location.href = "carta.html";
    }, 1000); // Tiempo de animación
  }
// Función de abrir carta (del index.html)
function abrirCarta() {
    const sobre = document.querySelector('.sobre');
    sobre.classList.add('abierto');
  
    // Espera que se abra y redirige
    setTimeout(() => {
      window.location.href = "carta.html";
    }, 1000); // Tiempo de animación
  }
  
  // Nuevas funciones para navegación
  function volverInicio() {
    window.location.href = "index.html"; // Vuelve al índice
  }
  
  function irAGaleria() {
    window.location.href = "galeria.html"; // Redirige a la galería
  }
  
  function irAJuego() {
    window.location.href = "juego.html"; // Redirige al juego
  }
    