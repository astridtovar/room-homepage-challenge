document.addEventListener('DOMContentLoaded', () => {
  // Menu hamburguesa
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const closeIcon = document.querySelector('.close-icon');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('show');
    overlay.classList.toggle('show');
  });

  closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('show');
    overlay.classList.remove('show');
  });

  overlay.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('show');
    overlay.classList.remove('show');
  });

  // Carrusel
  let currentIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  const carouselContainer = document.querySelector('.carousel-container');

  const showSlide = (index) => {
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });
});
