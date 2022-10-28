import './style.css';

import {
  menuIcon, closeIcon, cart, imgThumnail, galleryImg,
  closeIconModalGallery,
  galleryNext, galleryPrevious,
  galleryModalNext, galleryModalPrevious,
  ModalThumnail, imgModalGallery,
} from './modules/variables.js';

import {
  displayModalNavbar, closeModalNavbar, openCart,
  displayModalGallery, closeModalGallery,
  nextImg, previousImg,
} from './modules/functions.js';

menuIcon.addEventListener('click', displayModalNavbar);
closeIcon.addEventListener('click', closeModalNavbar);
cart.addEventListener('click', openCart);

imgThumnail.forEach((img) => {
  img.addEventListener('click', (e) => {
    galleryImg.setAttribute('src', `./images/image-product-${e.target.id}.jpg`);
  });
});

galleryImg.addEventListener('click', displayModalGallery);

closeIconModalGallery.addEventListener('click', closeModalGallery);

galleryNext.addEventListener('click', () => {
  nextImg(galleryImg);
});

galleryPrevious.addEventListener('click', () => {
  previousImg(galleryImg);
});

galleryModalNext.addEventListener('click', () => {
  nextImg(imgModalGallery);
});

galleryModalPrevious.addEventListener('click', () => {
  previousImg(imgModalGallery);
});

ModalThumnail.forEach((element) => {
  element.addEventListener('click', (e) => {
    const idImg = e.target.id - 4;
    imgModalGallery.setAttribute('src', `./images/image-product-${idImg}.jpg`);
  });
});
