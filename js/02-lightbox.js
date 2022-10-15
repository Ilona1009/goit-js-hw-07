import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector('.gallery');


const creatуGallery = galleryItems.map(({preview, original, description}) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
});

const stringGallery = creatуGallery.join('');
divGallery.innerHTML = stringGallery;

divGallery.addEventListener('click', onClickDivGallery);

function onClickDivGallery(event){
event.preventDefault();

var lightbox = new SimpleLightbox('.gallery a', { captionDelay:250, captionsData: "alt" });

}
