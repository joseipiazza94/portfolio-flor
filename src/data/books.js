// Libro 1: Hairy Worm and his Lost Rythm
import coverHairyWorm from '../assets/books/hairy-worm-book/hairy-worm-cover.png';
import page1HairyWorm from '../assets/books/hairy-worm-book/hairy-worm-page-01.png';
import page2HairyWorm from '../assets/books/hairy-worm-book/hairy-worm-page-14.png';
import page3HairyWorm from '../assets/books/hairy-worm-book/hairy-worm-pages-09-10.png';

// Libro 2: A Chipito in Paris
import coverChipitoParis from '../assets/books/chipito-paris-book/chipito-paris-cover.png';
import page1ChipitoParis from '../assets/books/chipito-paris-book/chipito-paris-page-01.png';
import page2ChipitoParis from '../assets/books/chipito-paris-book/chipito-paris-page-03.png';
import page3ChipitoParis from '../assets/books/chipito-paris-book/chipito-paris-page-05.png';

// Libro 3: Ashton no es solo una Tortuga
import coverAshtonTortuga from '../assets/books/ashton-tortuga-book/ashton-tortuga-cover.jpg';
import page1AshtonTortuga from '../assets/books/ashton-tortuga-book/ashton-tortuga-page-02.jpg';
import page2AshtonTortuga from '../assets/books/ashton-tortuga-book/ashton-tortuga-page-03.jpg';
import page3AshtonTortuga from '../assets/books/ashton-tortuga-book/ashton-tortuga-page-04.jpg';

// Libro 4: Las Aventuras de Caracacha
import caracachaCover from '../assets/books/caracacha-aventuras-book/caracacha-single-cover.jpg';
import caracachaDoubleCover from '../assets/books/caracacha-aventuras-book/caracacha-cover.jpg';
import caracachaChars1 from '../assets/books/caracacha-aventuras-book/caracacha-char-1.jpg';
import caracachaChars2 from '../assets/books/caracacha-aventuras-book/caracacha-char-2.jpg';
import caracachaLogo from '../assets/books/caracacha-aventuras-book/caracacha-double-logo.jpg';
import caracachaDoublePage from '../assets/books/caracacha-aventuras-book/caracacha-double-illustration.jpg';
import caracachaSketch from '../assets/books/caracacha-aventuras-book/caracacha-sketch.jpg';
import caracachaDetails from '../assets/books/caracacha-aventuras-book/caracacha-endpaper-details.jpg';
import caracachaMockup from '../assets/books/caracacha-aventuras-book/caracacha-book-cover-ty.jpg';


export const books = [
    {
        id: 1,
        title: "A very Hairy Worm and his Lost Rythm",

        cover: coverHairyWorm,

        gallery: [
            {src: coverHairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
            {src: page1HairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
            {src: page2HairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
            {src: page3HairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
        ]
    },

    {
        id: 2,
        title: "A Chipito in Paris",

        cover: coverChipitoParis,

        gallery: [
            {src: coverHairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
            {src: page1HairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
            {src: page2HairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
            {src: page3HairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
        ]
    },

    {
        id: 3,
        title: "Ashton no es solo una Tortuga",

        cover: coverAshtonTortuga,

        gallery: [
            {src: coverHairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
            {src: page1HairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
            {src: page2HairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
            {src: page3HairyWorm, alt: { es: "Portada del libro", en: "Book cover"}},
        ]
    },

    {
        id: 4,
        title: "Las Aventuras de Caracacha",

        cover: caracachaCover,

        gallery: [
            {src: caracachaDoubleCover, alt: { es: "Portada del libro", en: "Book cover"}},
            {src: caracachaChars1, alt: { es: "Personajes Principales", en: "Main Characters"}},
            {src: caracachaChars2, alt: { es: "Personajes Secundarios", en: "Secondary Characters"}},
            {src: caracachaLogo, alt: { es: "Mockup - Pagina Doble", en: "Double Page Mockup"}},
            {src: caracachaDoublePage, alt: { es: "Ilustraciones", en: "Illustrations"}},
            {src: caracachaSketch, alt: { es: "Sketches", en: "Sketches"}},
            {src: caracachaDetails, alt: { es: "Detalles y Guardas", en: "Endpapers and Details"}},
            {src: caracachaMockup, alt: { es: "Mockup", en: "Mockup"}},
        ]
    }
]