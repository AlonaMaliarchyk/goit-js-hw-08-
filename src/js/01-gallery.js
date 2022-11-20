// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';


const gallery = document.querySelector(".gallery");

function createGalleryMarckup (galleryItems){
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`}).join('');
    
};
gallery.insertAdjacentHTML("afterbegin", createGalleryMarckup (galleryItems));

const options = {
   captionsData:	'alt',   
   captionDelay:	250 
}


let lightbox = new SimpleLightbox('.gallery a', options);
console.log(galleryItems);
