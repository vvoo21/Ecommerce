import './style.css';

import {
  menuIcon,
  closeIcon,
  cart,
  imgThumnail,
  galleryImg,
  closeIconModalGallery,
  galleryNext,
  galleryPrevious,
  galleryModalNext,
  galleryModalPrevious,
  ModalThumnail,
  imgModalGallery,
  minusBtn,
  plusBtn,
  userInput,
  addBtn,
  notification, 
  cartModalContainer
} from './modules/variables.js';

import {
  displayModalNavbar,
  closeModalNavbar,
  openCart,
  displayModalGallery,
  closeModalGallery,
  nextImg,
  previousImg,
  createProduct
} from './modules/functions.js';
import { parseInt } from 'lodash';

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

let quantity = 0; 

plusBtn.addEventListener('click', () => {
  quantity++;
  userInput.value = quantity;
  console.log(quantity);
});

minusBtn.addEventListener('click', () => {
  quantity--;
  if(quantity <= 0){
    quantity = 0;
  }
  userInput.value = quantity;
  console.log(quantity);
});

export let lastValue =parseInt(notification.innerHTML);

addBtn.addEventListener('click', () => {

  lastValue = lastValue + quantity;

  notification.innerHTML = lastValue;
  notification.style.display = 'block';

  createProduct();
})


export const deleteProduct = () => {
  const cartDelete = document.querySelector('.cart-modal-delete');
  cartDelete.addEventListener('click', () => {
      cartModalContainer.innerHTML = `<p class="cart-empty">Your cart is empty.</p>`
      lastValue = 0;
      notification.innerHTML = lastValue;
    });
}


