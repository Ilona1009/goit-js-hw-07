import { imgGallery } from './img-gallery.js';

const divImg = document.querySelector('.gallery');

const addSelector = imgGallery.reduce((img, acc)=> acc  + img, String )

divImg.innerHTML = addSelector;
