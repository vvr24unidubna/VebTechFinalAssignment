const creatorsList = document.getElementById('creators-list');
document.querySelectorAll('.creators__arrow').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dir = Number(btn.dataset.dir);
    creatorsList.scrollBy({ left: dir * 480, behavior: 'smooth' });
  });
});
const modal = document.getElementById('modal');

document.querySelectorAll('[data-modal-open]').forEach((btn) => {
  btn.addEventListener('click', () => modal.classList.add('modal--open'));
});

modal.querySelectorAll('[data-modal-close]').forEach((el) => {
  el.addEventListener('click', () => modal.classList.remove('modal--open'));
});

document.getElementById('modal-form').addEventListener('submit', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.remove('modal--open');
});
const burger = document.querySelector('.header__burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('menu--open');
  burger.setAttribute('aria-expanded', isOpen);
});
const creatorsSlider = document.getElementById('creators-list');
const sliderArrows = document.querySelectorAll('.creators__arrow');

if (creatorsSlider && sliderArrows.length) {
  sliderArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const dir = parseInt(arrow.dataset.dir);
      const cardWidth = creatorsSlider.querySelector('.creators__card').offsetWidth + 30;
      creatorsSlider.scrollBy({
        left: dir * cardWidth,
        behavior: 'smooth'
      });
    });
  });
}