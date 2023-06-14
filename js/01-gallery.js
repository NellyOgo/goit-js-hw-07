
import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const galleryAdd = galleryItems
  .map(({ preview, original, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join('');


galleryEl.innerHTML = galleryAdd;

const galleryLinks = document.querySelectorAll('.gallery__link');

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600"/>`);
  instance.show();

  window.addEventListener('keydown', onGalleryEsc);
  function onGalleryEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onGalleryEsc);
    }
  }
}

galleryLinks.forEach(link => link.addEventListener('click', onGalleryClick));
