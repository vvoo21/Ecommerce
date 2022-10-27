import './style.css';

const menuIcon = document.querySelector('.icon-menu');
const modalnavbar = document.querySelector('.modal-navbar-bg');
const closeIcon = document.querySelector('.modal-navbar-close');

const cart = document.querySelector('.cart-container');
const modalCart = document.querySelector('.cart-modal');

const modalGallery = document.querySelector('.modal-gallery-bg');
const closeIconModalGallery = document.querySelector('.modal-gallery-close');
const imgModalGallery = document.querySelector('.modal-gallery-image');
const galleryModalPrevious = document.querySelector('.modal-gallery-previous');
const galleryModalNext = document.querySelector('.modal-gallery-next');
const ModalThumnail = document.querySelectorAll('.modal-thumnail');

const galleryImg = document.querySelector('.gallery-image');
const galleryPrevious = document.querySelector('.gallery-previous');
const galleryNext = document.querySelector('.gallery-next');
const imgThumnail = document.querySelectorAll('.thumnail');

let imgIndex = 1;

const nextImg = (imgContainer) => {

  if(imgIndex === 4){
    imgIndex = 1;
  } else {
    imgIndex += 1;
  }

  imgContainer.setAttribute('src', `./images/image-product-${imgIndex}.jpg`);
}

const previousImg = (imgContainer) => {

  if(imgIndex === 1){
    imgIndex = 4;
  } else {
    imgIndex -= 1;
  }

  imgContainer.setAttribute('src', `./images/image-product-${imgIndex}.jpg`);
}

const displayModalNavbar = () => {
  modalnavbar.style.display = 'flex';
};

const closeModalNavbar = () => {
  modalnavbar.style.display = 'none';
};

const openCart = () => {
  modalCart.style.display = 'flex';
};

const displayModalGallery = () => {
  modalGallery.style.display = 'flex';

  if(window.screen.width < 768){
    modalGallery.style.display = 'none';
  }
};

const closeModalGallery = () => {
  modalGallery.style.display = 'none';
};

menuIcon.addEventListener('click', displayModalNavbar);
closeIcon.addEventListener('click', closeModalNavbar);
cart.addEventListener('click', openCart);

imgThumnail.forEach((img) => {
  img.addEventListener('click', (e) => {
    galleryImg.setAttribute('src', `./images/image-product-${e.target.id}.jpg`);
  })
});

galleryImg.addEventListener('click', displayModalGallery);

closeIconModalGallery.addEventListener('click', closeModalGallery);

galleryNext.addEventListener('click', () =>{
  nextImg(galleryImg);
});

galleryPrevious.addEventListener('click', () =>{
  previousImg(galleryImg);
});

galleryModalNext.addEventListener('click', () =>{
  nextImg(imgModalGallery);
});

galleryModalPrevious.addEventListener('click', () =>{
  previousImg(imgModalGallery);
});

ModalThumnail.forEach((element) => {
  element.addEventListener('click', e => {
    const idImg = e.target.id - 4;
    imgModalGallery.setAttribute('src', `./images/image-product-${idImg}.jpg`);
  })
});

