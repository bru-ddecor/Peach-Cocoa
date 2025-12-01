const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});



// MENU MOBILE
const botaoMenu = document.querySelector('.menu-toggle');
const linksMenu = document.querySelector('.menu-links');

botaoMenu.addEventListener('click', () => {
    linksMenu.classList.toggle('menu-aberto');
});