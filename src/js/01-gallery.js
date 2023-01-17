// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');

function createListItemsMurkUp() {

    return galleryItems.map(item =>
        `<a  class = "gallery__item" href = ${item.original}><img class = "gallery__image" src = ${item.preview} alt = ${item.description}</a> `).join('');
}

const listItems = createListItemsMurkUp();

galleryRef.innerHTML = listItems;

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'});