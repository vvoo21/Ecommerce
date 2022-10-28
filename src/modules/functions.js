import {
  modalnavbar,
  modalCart,
  modalGallery,
  cartModalContainer,
  addBtn,
  notification,
  plusBtn,
  userInput,
  minusBtn,
} from './variables.js';

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

export const displayModalGallery = () => {
  modalGallery.style.display = 'flex';

  if (window.screen.width < 768) {
    modalGallery.style.display = 'none';
  }
};

export const closeModalGallery = () => {
  modalGallery.style.display = 'none';
};

let quantity = 0;

plusBtn.addEventListener('click', () => {
  quantity += 1;
  userInput.value = quantity;
});

minusBtn.addEventListener('click', () => {
  quantity -= 1;
  if (quantity <= 0) {
    quantity = 0;
  }
  userInput.value = quantity;
});

let lastValue = parseInt(notification.innerHTML, 10);

export const deleteProduct = () => {
  const cartDelete = document.querySelector('.cart-modal-delete');
  cartDelete.addEventListener('click', () => {
    cartModalContainer.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    lastValue = 0;
    notification.innerHTML = lastValue;
  });
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
      <button type="button" class="details-button cart-modal-button">Checkout</button>`;

  deleteProduct();

  const priceModal = document.querySelector('.cart-modal-price');
  const qtyModal = document.querySelector('.cart-modal-qty');
  const totalModal = document.querySelector('.cart-modal-total');

  priceModal.innerHTML = `$${125}.00`;
  qtyModal.innerHTML = `${lastValue}`;
  totalModal.innerHTML = `$${lastValue * 125}.00`;
};

addBtn.addEventListener('click', () => {
  lastValue += quantity;

  notification.innerHTML = lastValue;
  notification.style.display = 'block';

  createProduct();
});

export const openCart = () => {
  modalCart.classList.toggle('show');

  if (lastValue === 0) {
    createProduct();
  }
};
