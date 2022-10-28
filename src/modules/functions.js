import { 
  modalnavbar,
  modalCart,
  modalGallery,
  cartModalContainer,
} from './variables.js';

import {lastValue, deleteProduct} from '../index.js';

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

  if(lastValue === 0){
    createProduct();
  }
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

export const createProduct = () => {
    cartModalContainer.innerHTML = `
    <table class="cart-modal-details">
        <thead class="thead">
          <tr>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="table-body">
          <tr>
            <td><img class="cart-img" src="./images/image-product-1-thumbnail.jpg" alt="thumnail" width="60" height="60"></td>
            <td class="cart-description">Autumn Limited Edition...</td>
            <td class="cart-modal-price"></td>
            <td class="cart-modal-qty"></td>
            <td class="cart-modal-total"></td>
            <td><img class="cart-modal-delete" src="./images/icon-delete.svg" alt="delete"></td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="details-button cart-modal-button">Checkout</button>`

      deleteProduct();

     let priceModal = document.querySelector('.cart-modal-price');
     let qtyModal = document.querySelector('.cart-modal-qty');
     let totalModal = document.querySelector('.cart-modal-total');

      priceModal.innerHTML = `$${125}.00`
      qtyModal.innerHTML = lastValue;
      totalModal.innerHTML = `$${lastValue*125}.00`;
}
