import './style.css';

const menuIcon = document.querySelector('.icon-menu');
const modalnavbar = document.querySelector('.modal-navbar-bg');
const closeIcon = document.querySelector('.modal-navbar-close');
const cart = document.querySelector('.cart-container');
const modalCart = document.querySelector('.cart-modal');
const imgThumnail = document.querySelectorAll('.thumnail');
const modalGallery = document.querySelector('.modal-gallery-bg');


const displayModalNavbar = () => {
  modalnavbar.style.display = 'flex';
}

const closeModalNavbar = () => {
  modalnavbar.style.display = 'none';
}

const openCart = () => {
  modalCart.style.display = 'flex';
}

const displayModalGallery = () => {
  modalGallery.style.display = 'flex';
}

menuIcon.addEventListener('click', displayModalNavbar)
closeIcon.addEventListener('click', closeModalNavbar)
cart.addEventListener('click', openCart)

imgThumnail.forEach(img => {
  img.addEventListener('click', displayModalGallery);
});


