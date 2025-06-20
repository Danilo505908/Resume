const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const portfolioContainer = document.querySelector('.portfolio-wrapper');

leftArrow.addEventListener('click', () => {
const scrollAmount = window.innerWidth >= 1440 ? -400 : window.innerWidth >= 768 ? -340 : -300;
portfolioContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
const scrollAmount = window.innerWidth >= 1440 ? 400 : window.innerWidth >= 768 ? 340 : 300;
portfolioContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});