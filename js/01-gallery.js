
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


