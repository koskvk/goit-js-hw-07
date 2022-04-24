import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');
const ImageGalleryMarkup = createImageGalleryMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML('beforeend', ImageGalleryMarkup);

function createImageGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
    })
    .join('');
};

const gallerySimpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});