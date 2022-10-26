import './style.css';

const menuIcon = document.querySelector('.icon-menu');
const modalnavbar = document.querySelector('.modal-navbar-bg');
const closeIcon = document.querySelector('.modal-navbar-close');

const displayModalNavbar = () => {
  modalnavbar.style.display = 'flex';
}

const closeModalNavbar = () => {
  modalnavbar.style.display = 'none';
}

menuIcon.addEventListener('click', displayModalNavbar)
closeIcon.addEventListener('click', closeModalNavbar)

