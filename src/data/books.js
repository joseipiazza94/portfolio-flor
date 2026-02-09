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

export const books = [
    {
        id: 1,
        title: "A very Hairy Worm and his Lost Rythm",

        cover: coverHairyWorm,

        gallery: [
            {src: coverHairyWorm, alt: "Portada del libro" },
            {src: page1HairyWorm, alt: "Pagina 1 - Presentacion"},
            {src: page2HairyWorm, alt: "Pagina 14 - El Grillo Millard"},
            {src: page3HairyWorm, alt: "Paginas 9 y 10 - Bella, la Mariposa"}
        ]
    },

    {
        id: 2,
        title: "A Chipito in Paris",

        cover: coverChipitoParis,

        gallery: [
            {src: coverChipitoParis, alt: "Portada del libro" },
            {src: page1ChipitoParis, alt: "Pagina 1 - Presentacion"},
            {src: page2ChipitoParis, alt: "Pagina 14 - El Grillo Millard"},
            {src: page3ChipitoParis, alt: "Paginas 9 y 10 - Bella, la Mariposa"}
        ]
    },

    {
        id: 3,
        title: "Ashton no es solo una Tortuga",

        cover: coverAshtonTortuga,

        gallery: [
            {src: coverAshtonTortuga, alt: "Portada del libro" },
            {src: page1AshtonTortuga, alt: "Pagina 2 - Casamiento"},
            {src: page2AshtonTortuga, alt: "Pagina 14 - Flamingo Gardens"},
            {src: page3AshtonTortuga, alt: "Paginas 9 y 10 - Pool Time"}
        ]
    }
]