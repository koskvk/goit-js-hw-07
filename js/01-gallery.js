import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');
const ImageGalleryMarkup = createImageGalleryMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML('beforeend', ImageGalleryMarkup);

gallaryContainer.addEventListener('click', onGallaryImageClick);

function createImageGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
};

function onGallaryImageClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    evt.preventDefault();

    onOpenModal(evt.target.dataset.source);
};

let instance;

function onOpenModal(source) {
    instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`,
    {
        onShow: instance => {
            window.addEventListener('keydown', onEscKeyPress);
        },
        onClose: instance => {
            window.removeEventListener('keydown', onEscKeyPress);
        },
    },);
    
    instance.show();
};

function onEscKeyPress(evt) {
    if (evt.code === 'Escape') {
        instance.close();
    }
};