// ==========================================
// IMÁGENES DE RESPALDO
// Si una imagen externa no carga, se usa la
// versión local indicada en data-fallback.
// ==========================================

function useFallback(image) {
  const fallback = image.dataset.fallback;

  // Evita un ciclo infinito si el respaldo también fallara
  if (fallback && image.getAttribute('src') !== fallback) {
    image.src = fallback;
  }
}

document.querySelectorAll('img[data-fallback]').forEach((image) => {
  image.addEventListener('error', () => useFallback(image));

  // La imagen pudo fallar antes de que este script se ejecutara
  if (image.complete && image.naturalWidth === 0) {
    useFallback(image);
  }
});

// ==========================================
// GALERÍA INTERACTIVA
// ==========================================

const galleryImage = document.getElementById('gallery-image');
const imageCounter = document.getElementById('image-counter');
const prevButton = document.getElementById('prev-image');
const nextButton = document.getElementById('next-image');

// Rutas locales: /publico/img/muestras/ solo existía en la plataforma
const images = [
  { src: 'img/article-html.svg', alt: 'HTML: dos corchetes angulares sobre fondo verde' },
  { src: 'img/article-flexbox.svg', alt: 'CSS con flexbox: tres cajas acomodadas en una fila' },
  { src: 'img/article-accessibility.svg', alt: 'Accesibilidad: un botón con el contorno de foco marcado' }
];
let current = 0;

// Navegación circular: después de la última vuelve a la primera
function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  }
  if (index >= images.length) {
    index = 0;
  }
  current = index;
  galleryImage.src = images[current].src;
  galleryImage.alt = images[current].alt;
  imageCounter.textContent = `${current + 1} de ${images.length}`;
}

// Solo se conecta si la galería existe, para evitar errores en la consola
if (galleryImage && imageCounter && prevButton && nextButton) {
  showImage(0);

  // Corrección: en el original el botón Anterior no tenía evento
  prevButton.addEventListener('click', () => {
    showImage(current - 1);
  });

  nextButton.addEventListener('click', () => {
    showImage(current + 1);
  });
}

// ==========================================
// BOTÓN "MÁS SOBRE MÍ"
// ==========================================

const aboutSection = document.querySelector('#about');
const toggleButton = document.querySelector('#toggle-details');

const facts = ['Hablo español e inglés', 'Me interesa el diseño de interfaces', 'Disponible desde enero'];

if (aboutSection && toggleButton) {
  toggleButton.addEventListener('click', () => {
    const list = aboutSection.querySelector('.details');
    if (list) {
      list.remove();
      toggleButton.textContent = 'Más sobre mí';
      toggleButton.setAttribute('aria-expanded', 'false');
      return;
    }
    const newList = document.createElement('ul');
    newList.className = 'details';
    for (const fact of facts) {
      const item = document.createElement('li');
      item.textContent = fact;
      newList.append(item);
    }

    // Se inserta después del grupo de botones para no separarlos
    const actions = toggleButton.closest('.about-actions') || toggleButton;
    actions.after(newList);

    toggleButton.textContent = 'Menos sobre mí';
    toggleButton.setAttribute('aria-expanded', 'true');
  });
}
