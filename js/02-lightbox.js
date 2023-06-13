import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryAdd = galleryItems
    .map(
        ({ preview, original, description }) =>
            `<li class="gallery_item">
                <a class="gallery_link" href="${original}">
                    <img class="gallery_image" src="${preview}" alt="${description}"/>
                </a>
            </li>`
)
.join("")
galleryEl.innerHTML = galleryAdd;

const lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});

