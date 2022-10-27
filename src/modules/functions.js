import { modalnavbar, modalCart, modalGallery } from './variables.js';

let imgIndex = 1;

export const nextImg = (imgContainer) => {
  if (imgIndex === 4) {
    imgIndex = 1;
  } else {
    imgIndex += 1;
  }

  imgContainer.setAttribute('src', `./images/image-product-${imgIndex}.jpg`);
};

export const previousImg = (imgContainer) => {
  if (imgIndex === 1) {
    imgIndex = 4;
  } else {
    imgIndex -= 1;
  }

  imgContainer.setAttribute('src', `./images/image-product-${imgIndex}.jpg`);
};

export const displayModalNavbar = () => {
  modalnavbar.style.display = 'flex';
};

export const closeModalNavbar = () => {
  modalnavbar.style.display = 'none';
};

export const openCart = () => {
  modalCart.classList.toggle('show');
};

export const displayModalGallery = () => {
  modalGallery.style.display = 'flex';

  if (window.screen.width < 768) {
    modalGallery.style.display = 'none';
  }
};

export const closeModalGallery = () => {
  modalGallery.style.display = 'none';
};