import 'animate.css';

export const moveRight = () => {
  const containerImage = document.querySelector('.containterImage');
  const details = document.querySelector('.details');
  const decorationImage = document.querySelector('.decorationImage');

  containerImage.classList.remove('animate__slideInRight');
  details.classList.remove('animate__slideInRight');
  decorationImage.classList.remove('animate__slideInRight');

  // Siempre agregar la clase animate__slideInRight
  containerImage.classList.add('animate__slideInRight');
  details.classList.add('animate__slideInRight');
  decorationImage.classList.add('animate__slideInRight');

  // Si la clase animate__slideInLeft está presente, quitarla
  containerImage.classList.remove('animate__slideInLeft');
  details.classList.remove('animate__slideInLeft');
  decorationImage.classList.remove('animate__slideInLeft');
};

export const moveLeft = (card) => {
  const containerImage = document.querySelector('.containterImage');
  const details = document.querySelector('.details');
  const decorationImage = document.querySelector('.decorationImage');

  containerImage.classList.remove('animate__slideInLeft');
  details.classList.remove('animate__slideInLeft');
  decorationImage.classList.remove('animate__slideInLeft');

  // Siempre agregar la clase animate__slideInLeft
  containerImage.classList.add('animate__slideInLeft');
  details.classList.add('animate__slideInLeft');
  decorationImage.classList.add('animate__slideInLeft');

  // Si la clase animate__slideInRight está presente, quitarla
  containerImage.classList.remove('animate__slideInRight');
  details.classList.remove('animate__slideInRight');
  decorationImage.classList.remove('animate__slideInRight');
};
