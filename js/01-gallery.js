// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const divGallery = document.querySelector('.gallery');


// const creatуGallery = galleryItems.map(({preview, original, description}) => {
//         return `
//         <div class="gallery__item">
//           <a class="gallery__link" href="${original}">
//             <img
//               class="gallery__image"
//               src="${preview}"
//               data-source="${original}"
//               alt="${description}"
//             />
//           </a>
//         </div>
//         `;
//     });



// const stringGallery = creatуGallery.join('');
// divGallery.innerHTML = stringGallery;

// divGallery.addEventListener('click', onClickDivGallery);

// function onClickDivGallery(event){
// event.preventDefault();
// if (!event.target.classList.contains('gallery__image')){
//   return;
// }

// const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600"/>
// `);

// instance.show(); 

// divGallery.addEventListener('keydown', onEscPressModalClose);
    
//     function onEscPressModalClose(event) {
//         if (event.code === "Escape") {
//         instance.close();
//         divGallery.removeEventListener('keydown', onEscPressModalClose);
//         }
//     };
// };

// =============================================================

import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

const addSelector = galleryItems.map(({ preview, original, description }) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
})
const r = addSelector.join('');
divGallery.innerHTML = r;

divGallery.addEventListener('click', openModalImage)

function openModalImage (event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    // console.log('!!!')
    return;
  }

//   if (!event.target.classList.contains('gallery__image')){
//   return;
// }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
}



