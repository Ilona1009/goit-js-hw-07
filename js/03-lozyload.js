import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

const addSelector = galleryItems.map(({ preview, original, description }) => {
  return `
  <a class="gallery__item" href="${original}">
  <img class="lazyload gallery__image " data-src="${preview}" alt="${description}" />
</a>`;
})
.join('');
divGallery.innerHTML = addSelector;

divGallery.addEventListener('click', openModalImage)

function openModalImage (event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  divGallery.addEventListener('keydown', closeModalEsc);

  function closeModalEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
      divGallery.removeEventListener('keydown', closeModalEsc)
      
    }
  }
}

    var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData : 'alt' });






