
const divGallery = document.querySelectorAll('img[data-src]');
window.addEventListener('scroll', pageScroll)

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

function pageScroll() {
  if (divGallery.length > 0) {
    console.log( 'scroll')
  }
}




