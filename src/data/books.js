// Libro 1: Hairy Worm and his Lost Rythm
import coverHairyWorm from "../assets/books/hairy-worm-book/hairy-worm-single-cover.jpg";
import fullCoverHairyWorm from "../assets/books/hairy-worm-book/hairy-worm-cover.jpg";
import page1HairyWorm from "../assets/books/hairy-worm-book/hairy-worm-page-01.jpg";
import page2HairyWorm from "../assets/books/hairy-worm-book/hairy-worm-page-14.jpg";
import page3HairyWorm from "../assets/books/hairy-worm-book/hairy-worm-pages-09-10.jpg";

// Libro 2: Las Aventuras de Caracacha
import caracachaCover from "../assets/books/caracacha-aventuras-book/caracacha-simple-cover.jpg";
import caracachaFullCover from "../assets/books/caracacha-aventuras-book/caracacha-full-cover.jpg";
import caracachaSingle1 from "../assets/books/caracacha-aventuras-book/caracacha-single-page-1.jpg";
import caracachaSingle2 from "../assets/books/caracacha-aventuras-book/caracacha-single-page-2.jpg";
import caracachaSingle3 from "../assets/books/caracacha-aventuras-book/caracacha-single-page-3.jpg";
import caracachaSingle4 from "../assets/books/caracacha-aventuras-book/caracacha-single-page-4.jpg";

// Libro 3: A Chipito in Paris
import coverChipitoParis from "../assets/books/chipito-paris-book/chipito-paris-cover.jpg";
import chipitoSingle1 from "../assets/books/chipito-paris-book/chipito-paris-page-01.jpg";
import chipitoSingle2 from "../assets/books/chipito-paris-book/chipito-paris-page-03.jpg";
import chipitoSingle3 from "../assets/books/chipito-paris-book/chipito-paris-page-05.jpg";

// Libro 4: Ashton no es solo una Tortuga
import coverAshtonTortuga from "../assets/books/ashton-tortuga-book/ashton-tortuga-cover.jpg";
import ashtonSingle1 from "../assets/books/ashton-tortuga-book/ashton-tortuga-page-02.jpg";
import ashtonSingle2 from "../assets/books/ashton-tortuga-book/ashton-tortuga-page-03.jpg";
import ashtonDouble1 from "../assets/books/ashton-tortuga-book/ashton-tortuga-page-04.jpg";

// Libro 5: The Fishy Adventures of Ali and Fred
import fishyCover from "../assets/books/fishy-adventures-book/fishy-adventures-single-cover.jpg";
import fishyDouble1 from "../assets/books/fishy-adventures-book/fishy-adventures-double-page-1.jpg";
import fishyDouble2 from "../assets/books/fishy-adventures-book/fishy-adventures-double-page-2.jpg";
import fishyDouble3 from "../assets/books/fishy-adventures-book/fishy-adventures-double-page-3.jpg";

// Libro 6: Flicker
import flickerCover from "../assets/books/flicker-book/flicker-single-cover.jpg";
import flickerFullCover from "../assets/books/flicker-book/flicker-full-cover.jpg";
import flickerDouble1 from "../assets/books/flicker-book/flicker-double-page-1.jpg";
import flickerDouble2 from "../assets/books/flicker-book/flicker-double-page-2.jpg";
import flickerDouble3 from "../assets/books/flicker-book/flicker-double-page-3.jpg";

// Libro 7: How Many Singers Do You See?
import singersCover from "../assets/books/how-many-singers-book/singers-single-cover.jpg";
import singersFullCover from "../assets/books/how-many-singers-book/singers-full-cover.jpg";
import singersDouble1 from "../assets/books/how-many-singers-book/singers-double-page-1.jpg";
import singersDouble2 from "../assets/books/how-many-singers-book/singers-double-page-2.jpg";
import singersDouble3 from "../assets/books/how-many-singers-book/singers-double-page-3.jpg";

// Libro 8: Nana & Me
import nanaCover from "../assets/books/nana-and-me-book/nana-single-cover.jpg";
import nanaDouble1 from "../assets/books/nana-and-me-book/nana-double-page-1.jpg";
import nanaDouble2 from "../assets/books/nana-and-me-book/nana-double-page-2.jpg";
import nanaDouble3 from "../assets/books/nana-and-me-book/nana-double-page-3.jpg";

// Libro 9: There's a Nest in your Hat
import nestCover from "../assets/books/nest-hat-book/nest-hat-single-cover.jpg";
import nestSingle1 from "../assets/books/nest-hat-book/nest-hat-single-page-1.jpg";
import nestSingle2 from "../assets/books/nest-hat-book/nest-hat-single-page-2.jpg";
import nestSingle3 from "../assets/books/nest-hat-book/nest-hat-single-page-3.jpg";
import nestSingle4 from "../assets/books/nest-hat-book/nest-hat-single-page-4.jpg";

// Libro 10: The Secret Superpower
import superpowerCover from "../assets/books/secret-superpower-book/secret-superpower-single-cover.jpg";
import superpowerFullCover from "../assets/books/secret-superpower-book/secret-superpower-full-cover.jpg";
import superpowerDouble1 from "../assets/books/secret-superpower-book/secret-superpower-double-page-1.jpg";
import superpowerDouble2 from "../assets/books/secret-superpower-book/secret-superpower-double-page-2.jpg";
import superpowerDouble3 from "../assets/books/secret-superpower-book/secret-superpower-double-page-3.jpg";

// Libro 11: Ten Balloons
import balloonsCover from "../assets/books/ten-balloons-book/ten-balloons-single-cover.jpg";
import balloonsFullCover from "../assets/books/ten-balloons-book/ten-balloons-full-cover.jpg";
import balloonsDouble1 from "../assets/books/ten-balloons-book/ten-balloons-double-page-1.jpg";
import balloonsEndpaper from "../assets/books/ten-balloons-book/ten-balloons-endpaper.jpg";

export const books = [
  {
    id: 1,
    title: "A Chipito in Paris",

    cover: coverChipitoParis,

    gallery: [
      {
        src: coverChipitoParis,
        alt: {
          es: "Portada del libro infantil A Chipito in Paris. Una niña de cabello castaño sostiene una bolsa con baguettes frente a las Galeries Lafayette y un cartel del Metro de París. Se ven unos calcetines de oso asomando por la barandilla de la estación.",
          en: "Cover of the children's book A Chipito in Paris. A brown-haired girl holds a bag of baguettes in front of Galeries Lafayette and a Paris Metro sign. Fuzzy bear socks are seen draped over the station railing.",
        },
      },
      {
        src: chipitoSingle1,
        alt: {
          es: "Yana bailando alegremente en una calle empedrada de París con la Torre Eiffel de fondo. Viste un suéter negro y sus distintivos calcetines de oso color café. A la derecha, un gran árbol con hojas otoñales en tonos naranja y amarillo.",
          en: "Yana dancing happily on a cobblestone street in Paris with the Eiffel Tower in the background. She wears a black sweater and her signature fuzzy brown bear socks. To the right, a large tree displays vibrant orange and yellow autumn leaves.",
        },
      },
      {
        src: chipitoSingle2,
        alt: {
          es: "Un hombre mayor con boina y lentes charla amablemente con Yana, quien está sentada tristemente sin sus calcetines frente a la Catedral de Notre Dame. La escena transmite un momento de enseñanza y apoyo emocional en un entorno histórico.",
          en: "An elderly man with a beret and glasses chats kindly with Yana, who sits sadly without her socks in front of the Notre Dame Cathedral. The scene conveys a moment of mentorship and emotional support in a historical setting.",
        },
      },
      {
        src: chipitoSingle3,
        alt: {
          es: "Yana posa con confianza frente a un palacio francés y una fuente. En el fondo, otros niños también visten calcetines de animales divertidos (panda, conejo, gato), celebrando la individualidad y la valentía de ser diferente en el corazón de París.",
          en: "Yana poses confidently in front of a French palace and a fountain. In the background, other children are also wearing fun animal socks (panda, rabbit, cat), celebrating individuality and the courage to be different in the heart of Paris.",
        },
      },
    ],
  },

  {
    id: 2,
    title: "The Secret Superpower",

    cover: superpowerCover,

    gallery: [
      {
        src: superpowerFullCover,
        alt: {
          es: "Portada del libro infantil Daddy's Love: The Secret Superpower. Un padre con una capa roja vuela por un cielo estrellado cargando a sus dos hijos, mientras libros y un gato naranja flotan a su alrededor en un entorno espacial mágico.",
          en: "Cover of the children's book Daddy's Love: The Secret Superpower. A father wearing a red cape flies through a starry sky carrying his two children, while books and an orange cat float around them in a magical space setting.",
        },
      },
      {
        src: superpowerDouble1,
        alt: {
          es: "Ilustración de doble página que muestra a un padre compartiendo una comida con sus dos hijos en una cocina luminosa. El padre luce su capa de superhéroe mientras sirven ensalada y pasta; un gato naranja observa desde la mesa en un ambiente cálido y hogareño.",
          en: "Double-page illustration showing a father sharing a meal with his two children in a bright kitchen. The father wears his superhero cape while they serve salad and pasta; an orange cat watches from the table in a warm, cozy home environment.",
        },
      },
      {
        src: superpowerDouble2,
        alt: {
          es: "Una escena tierna en la cocina donde el padre, aún con su capa roja, toma una taza de café y sonríe a su hija e hijo durante el almuerzo. La imagen captura un momento de felicidad cotidiana y conexión familiar.",
          en: "A tender kitchen scene where the father, still wearing his red cape, has a cup of coffee and smiles at his daughter and son during lunch. The image captures a moment of daily happiness and family connection.",
        },
      },
      {
        src: superpowerDouble3,
        alt: {
          es: "Escena de doble página con estilo de cómic. A la izquierda, viñetas muestran a niños y monstruos verdes amistosos bajo las estrellas. A la derecha, el padre con su capa y un maletín camina de la mano con su hijo bajo una luna creciente, simbolizando protección y amor.",
          en: "Double-page comic-style scene. On the left, panels show children and friendly green monsters under the stars. On the right, the father with his cape and a briefcase walks hand-in-hand with his son under a crescent moon, symbolizing protection and love.",
        },
      },
    ],
  },

  {
    id: 3,
    title: "Ashton no es solo una Tortuga",

    cover: coverAshtonTortuga,

    gallery: [
      {
        src: coverAshtonTortuga,
        alt: {
          es: "Portada del libro educativo Ashton no es solo una tortuga de Silvia Royo López. Se ve a la tortuga Ashton dándose un baño de espuma en una tina blanca mientras come una fresa. En primer plano, una canasta llena de frutas y verduras frescas sobre el césped.",
          en: "Cover of the educational book Ashton no es solo una tortuga (Ashton is not just a turtle) by Silvia Royo López. Ashton the turtle is shown taking a bubble bath in a white tub while eating a strawberry. In the foreground, a basket full of fresh fruits and vegetables sits on the grass.",
        },
      },
      {
        src: ashtonSingle1,
        alt: {
          es: "Ilustración de dos tortugas rosadas vestidas para su boda. El novio luce una galera marrón y la novia un velo blanco con flores. Están rodeados de corazones y destellos sobre un fondo rosado suave, transmitiendo una atmósfera romántica y tierna.",
          en: "Illustration of two pink turtles dressed for their wedding. The groom wears a brown top hat, and the bride wears a white veil with flowers. They are surrounded by hearts and sparkles against a soft pink background, conveying a romantic and tender atmosphere.",
        },
      },
      {
        src: ashtonSingle2,
        alt: {
          es: "Un flamenco rosado posa frente a un cartel de madera que dice Flamingo Gardens. El entorno está decorado con árboles y plantas en una paleta de colores rosados, blancos y púrpuras, manteniendo la coherencia estética del libro.",
          en: "A pink flamingo poses in front of a wooden sign that reads Flamingo Gardens. The surroundings are decorated with trees and plants in a color palette of pink, white, and purple, maintaining the book's aesthetic consistency.",
        },
      },
      {
        src: ashtonDouble1,
        alt: {
          es: "Una escena divertida en una piscina donde varios niños y un adulto juegan en el agua teñida de rosa. Se ve a la tortuga Ashton con un pequeño sombrero rosa caminando por el borde de la pileta, integrándose en las actividades familiares.",
          en: "A fun pool scene where several children and an adult play in pink-tinted water. Ashton the turtle is seen wearing a tiny pink hat while walking along the edge of the pool, joining in the family activities.",
        },
      },
    ],
  },

  {
    id: 4,
    title: "The Fishy Adventures of Ali and Fred",

    cover: fishyCover,

    gallery: [
      {
        src: fishyCover,
        alt: {
          es: "Portada del libro infantil The Fishy Adventures of Ali and Fred. Se ve a Ali andando en skate por un parque mientras sostiene una pecera de la que salta Fred, un pez dorado con grandes mejillas azules llenas de agua.",
          en: "Cover of the children's book The Fishy Adventures of Ali and Fred. Ali is shown skateboarding through a park while holding a fishbowl as Fred, a goldfish with large blue cheeks full of water, leaps out.",
        },
      },
      {
        src: fishyDouble1,
        alt: {
          es: "Escena de doble página donde Ali intenta detener el crecimiento de Fred. A la izquierda, lo pone al sol; a la derecha, Fred escupe fuego tras comer alimento picante, mientras Ali intenta usar un extintor en una habitación llena de pequeñas llamas.",
          en: "Double-page spread where Ali tries to stop Fred from growing. On the left, he puts him in the sun; on the right, Fred breathes fire after eating spicy food, while Ali tries to use a fire extinguisher in a room filled with small flames.",
        },
      },
      {
        src: fishyDouble2,
        alt: {
          es: "Ali estudia libros sobre peces para ayudar a su amigo. A la izquierda, ambos leen concentrados; a la derecha, Ali intenta luchar amistosamente con una espada de madera contra Fred, quien salpica agua desde su pecera.",
          en: "Ali studies books about fish to help his friend. On the left, both are focused on reading; on the right, Ali tries a friendly sword fight with a wooden sword against Fred, who splashes water from his bowl.",
        },
      },
      {
        src: fishyDouble3,
        alt: {
          es: "Ali llega a su habitación y encuentra la pecera rota en el suelo. Fred ha crecido tanto que ya no cabe en ella y está sentado sobre un charco de agua, ante la mirada de asombro de Ali.",
          en: "Ali arrives at his bedroom to find the fishbowl shattered on the floor. Fred has grown so big that he no longer fits and is sitting in a puddle of water, while Ali looks on in shock.",
        },
      },
    ],
  },

  {
    id: 5,
    title: "Flicker",

    cover: flickerCover,

    gallery: [
      {
        src: flickerFullCover,
        alt: {
          es: "Portada completa del libro infantil Flicker. Se ve a Flicker, una pequeña luciérnaga amarilla con ojos grandes y brillantes, sonriendo con los brazos cruzados. El fondo es un cielo nocturno púrpura lleno de puntos de luz mágicos y un árbol con hojas rosadas que emite un resplandor dorado.",
          en: "Full cover of the children's book Flicker. Featuring Flicker, a small yellow firefly with big, bright eyes, smiling with crossed arms. The background is a purple night sky filled with magical light orbs and a tree with pink leaves emitting a golden glow.",
        },
      },
      {
        src: flickerDouble1,
        alt: {
          es: "Escena de doble página que muestra una fábrica dirigida por luciérnagas. Varias luciérnagas con cascos de seguridad naranjas trabajan en una cinta transportadora llenando frascos con su brillo mágico. El entorno es de un color violeta profundo con estanterías llenas de frascos luminosos.",
          en: "Double-page spread showing a factory run by fireflies. Several fireflies wearing orange safety helmets work on a conveyor belt, filling jars with their magical glow. The setting is deep purple with shelves full of glowing jars.",
        },
      },
      {
        src: flickerDouble2,
        alt: {
          es: "Una escena festiva nocturna en el pueblo de Glowshire. Familias y niños celebran en una feria con puestos de comida y globos de luz amarillos flotando en el cielo. Se ven árboles rosados y casas de estilo europeo bajo un cielo estrellado.",
          en: "A festive night scene in the town of Glowshire. Families and children celebrate at a fair with food stalls and yellow lanterns floating in the sky. Pink trees and European-style houses are seen under a starry sky..",
        },
      },
      {
        src: flickerDouble3,
        alt: {
          es: "Ilustración de doble página que muestra a un grupo de luciérnagas reunidas alrededor de una mesa de madera. Discuten planes sobre hojas de papel mientras toman café. A la izquierda, se ve el pueblo a lo lejos desde el interior de un árbol iluminado por una luz dorada.",
          en: "Double-page illustration showing a group of fireflies gathered around a wooden table. They discuss plans over sheets of paper while drinking coffee. To the left, the town is seen in the distance from inside a tree hollow illuminated by a golden light.",
        },
      },
    ],
  },

  {
    id: 6,
    title: "A very Hairy Worm and his Lost Rythm",

    cover: coverHairyWorm,

    gallery: [
      {
        src: fullCoverHairyWorm,
        alt: {
          es: "Portada del libro infantil A Very Hairy Worm & his Lost Rhythm. Se ve a Harry, un gusano rosado con pelo rizado y Sally, una caracola con un moño violeta, rodeados de vegetación y flores naranjas bajo un cielo celeste claro.",
          en: "Cover of the children's book A Very Hairy Worm & his Lost Rhythm. Featuring Harry, a curly-haired pink worm, and Sally, a snail with a purple bow, surrounded by lush greenery and orange flowers under a bright blue sky.",
        },
      },
      {
        src: page1HairyWorm,
        alt: {
          es: "Ilustración de Harry el gusano y Sally la caracola bailando alegremente sobre una colina verde. Hay notas musicales flotando en el aire y estrellas doradas, con el texto de introducción a la historia en la parte superior.",
          en: "Illustration of Harry the worm and Sally the snail dancing joyfully on a green hill. Musical notes and golden stars float in the air, with the story's introductory text at the top of the page.",
        },
      },
      {
        src: page2HairyWorm,
        alt: {
          es: "Escena nocturna bajo un cielo estrellado. Un grillo verde llamado Millard está sentado sobre un hongo rojo con motas blancas (amanita muscaria). Millard saluda a Harry, quien le habla desde abajo, rodeados de flores y pequeños hongos en el césped.",
          en: "Night scene under a starry sky. A green cricket named Millard sits atop a red mushroom with white spots (amanita muscaria). Millard greets Harry from below, surrounded by flowers and tiny mushrooms on the grass.",
        },
      },
      {
        src: page3HairyWorm,
        alt: {
          es: "Escena de doble página en un bosque verde. Harry y Sally se encuentran con Bella, una mariposa de colores vibrantes (violeta, amarillo y azul) que revolotea entre arbustos y flores. El texto describe el encuentro y el sonido de las alas de la mariposa",
          en: "Double-page spread of a green forest. Harry and Sally meet Bella, a vibrant butterfly with purple, yellow, and blue wings, fluttering among bushes and flowers. The text describes their encounter and the sound of the butterfly's wings.",
        },
      },
    ],
  },

  {
    id: 7,
    title: "Las Aventuras de Caracacha",

    cover: caracachaCover,

    gallery: [
      {
        src: caracachaFullCover,
        alt: {
          es: "Portada completa del libro Las Aventuras de Caracacha. Una pequeña bruja con sombrero violeta y una escoba camina junto a un pequeño monstruo verde por un bosque mágico con casas hongo y un cielo azul con nubes blancas",
          en: "Full cover of the book Las Aventuras de Caracacha. A little witch with a purple hat and a broom walks alongside a small green monster through a magical forest with mushroom houses and a blue sky with white clouds.",
        },
      },
      {
        src: caracachaSingle1,
        alt: {
          es: "Caracacha frente a un árbol gigante con rostro y joyas colgando de sus ramas. La brujita sostiene una varita con una estrella brillante y un collar con un corazón. El fondo es un cielo nocturno violeta con pequeñas flores blancas.",
          en: "Caracacha in front of a giant tree with a face and jewelry hanging from its branches. The little witch holds a wand with a shining star and a heart necklace. The background is a purple night sky with small white flowers.",
        },
      },
      {
        src: caracachaSingle2,
        alt: {
          es: "Caracacha sentada sobre una flor gigante en una colina verde. De fondo se ven casas con techos rojos en forma de hongo y un cielo celeste despejado. La brujita sostiene una pequeña flor rosa y sonríe.",
          en: "Caracacha sitting on a giant flower on a green hill. In the background, there are houses with red mushroom-shaped roofs and a clear blue sky. The little witch holds a small pink flower and smiles",
        },
      },
      {
        src: caracachaSingle3,
        alt: {
          es: "Ilustración del astrónomo Peraclus Ezio, un águila con barba blanca y túnica azul estrellada, mirando por un telescopio frente a un pizarrón con fórmulas y fases lunares. Hay una computadora y estanterías con libros de colores.",
          en: "Illustration of the astronomer Peraclus Ezio, an eagle with a white beard and a starry blue robe, looking through a telescope in front of a blackboard with formulas and lunar phases. There is a computer and shelves with colorful books.",
        },
      },
      {
        src: caracachaSingle4,
        alt: {
          es: "Caracacha merendando en una mesa con mantel a cuadros junto a un loro verde y un pájaro negro. La brujita tiene la boca manchada de dulce de mora violeta. En la mesa hay teteras, tazas de café, galletas y mermelada.",
          en: "Caracacha having a snack at a checkered tablecloth with a green parrot and a black bird. The little witch has her mouth stained with purple blackberry jam. On the table, there are teapots, coffee cups, cookies, and jam.",
        },
      },
    ],
  },

  {
    id: 8,
    title: "How Many Singers Do You See?",

    cover: singersCover,

    gallery: [
      {
        src: singersFullCover,
        alt: {
          es: "Portada completa del libro infantil How Many Singers Do You See? de Nes Feiger. En un fondo azul con estrellas y notas musicales, se ve a tres niños cantando con micrófonos. El diseño integra números grandes y coloridos para enseñar a contar.",
          en: "Full cover of the children's book How Many Singers Do You See? by Nes Feiger. Against a blue background with stars and musical notes, three children are shown singing with microphones. The design integrates large, colorful numbers to teach counting skills.",
        },
      },
      {
        src: singersDouble1,
        alt: {
          es: "Ilustración de doble página que muestra a una banda musical diversa. Incluye a un abuelo con guitarra eléctrica, una abuela en la batería, un bebé en el teclado y varios cantantes. El texto invita a contar los 7 integrantes del grupo mientras rockean juntos.",
          en: "Double-page illustration showing a diverse musical band. It includes a grandfather on electric guitar, a grandmother on drums, a baby on keyboards, and several singers. The text invites readers to count the 7 band members as they rock out together.",
        },
      },
      {
        src: singersDouble2,
        alt: {
          es: "Tres niñas cantando en los escalones de una casa, rodeadas de flores y arbustos. El texto explica el concepto de trío, destacando la armonía de tres voces que cantan juntas en diferentes tonos.",
          en: "Three young girls singing on the front steps of a house, surrounded by flowers and bushes. The text explains the concept of a trio, highlighting the harmony of three voices singing together in different pitches.",
        },
      },
      {
        src: singersDouble3,
        alt: {
          es: "Cinco niños cantando alrededor de un puesto de licuados (Smoothies) en un parque. La ilustración usa la metáfora de los sabores de las frutas mezclándose para explicar cómo un quinteto crea una melodía dulce y mejorada al trabajar en equipo.",
          en: "Five children singing around a smoothie stand in a park. The illustration uses the metaphor of fruit flavors blending together to explain how a quintet creates a sweet, enhanced melody by working as a team.",
        },
      },
    ],
  },

  {
    id: 9,
    title: "Nana & Me",

    cover: nanaCover,

    gallery: [
      {
        src: nanaCover,
        alt: {
          es: "Portada del libro infantil Nana & Me escrito por Emily Dungan. Se ve a una abuela de cabello canoso y lentes abrazando cariñosamente a su nieta en un sillón verde. En una mesa lateral hay galletas, vasos de té helado y ovillos de lana.",
          en: "Cover of the children's book Nana & Me by Emily Dungan. Featuring a grandmother with gray hair and glasses sharing an affectionate hug with her granddaughter on a green armchair. A side table holds cookies, iced tea glasses, and balls of yarn.",
        },
      },
      {
        src: nanaDouble1,
        alt: {
          es: "Ilustración de doble página que muestra dos escenas tiernas. A la izquierda, la abuela y la nieta se abrazan sobre un fondo de corazones. A la derecha, ambas hacen muecas divertidas y gestos de paz frente a un espejo, mostrando su complicidad.",
          en: "Double-page illustration showing two heartwarming scenes. On the left, the grandmother and granddaughter hug against a heart-patterned background. On the right, they make funny faces and peace signs in front of a mirror, showing their playful bond.",
        },
      },
      {
        src: nanaDouble2,
        alt: {
          es: "Escena de doble página que celebra la transmisión de saberes. A la izquierda, la abuela enseña a la niña a tejer. A la derecha, se las ve cocinando juntas un pastel y galletas, con harina en la nariz de la niña y un ambiente lleno de alegría.",
          en: "Double-page scene celebrating the passing down of skills. On the left, the grandmother teaches the girl how to knit. On the right, they are shown baking a pie and cookies together, with flour on the girl's nose and a joyful atmosphere.",
        },
      },
      {
        src: nanaDouble3,
        alt: {
          es: "Una ilustración serena de doble página donde la abuela y la nieta están recostadas en el pasto mirando el cielo. Ambas señalan nubes con formas de animales (un pato, un conejo, un corazón), compartiendo un momento de calma e imaginación.",
          en: "A serene double-page illustration where the grandmother and granddaughter lie on the grass looking at the sky. They both point at clouds shaped like animals (a duck, a rabbit, a heart), sharing a moment of peace and imagination.",
        },
      },
    ],
  },

  {
    id: 10,
    title: "There's a Nest in your Hat",

    cover: nestCover,

    gallery: [
      {
        src: nestCover,
        alt: {
          es: "Portada del libro infantil There's a Nest on Your Hat. Una maestra con anteojos y vestido de retazos coloridos sostiene un sombrero marrón que tiene un nido de pájaro encima. Al fondo, un pizarrón y un póster educativo con diferentes tipos de aves.",
          en: "Cover of the children's book There's a Nest on Your Hat. A teacher with glasses and a colorful patchwork dress holds a brown hat topped with a bird's nest. In the background, there is a blackboard and an educational poster featuring various types of birds.",
        },
      },
      {
        src: nestSingle1,
        alt: {
          es: "Escena en un salón de clases donde tres niños muestran orgullosos sus sombreros-nido. En el pizarrón, la maestra ha escrito una lista de materiales: ramitas, pasto, plumas, hojas y calcetines. Cada niño tiene un diseño único lleno de texturas y colores.",
          en: "A classroom scene where three children proudly show off their nest-hats. On the blackboard, the teacher has written a list of materials: strings, grass, feathers, leaves, and socks. Each child has a unique design full of textures and colors.",
        },
      },
      {
        src: nestSingle2,
        alt: {
          es: "Ilustración detallada de dos pájaros carpinteros hembra sentadas en sus nidos sobre sombreros. Una de ellas sostiene un rubí rojo en su pico y la otra luce un collar de perlas, mostrando con orgullo sus tesoros entre las hojas y plumas.",
          en: "Detailed illustration of two female woodpeckers sitting in their nests atop hats. One holds a red ruby in her beak, while the other wears a pearl necklace, proudly displaying their treasures among the leaves and feathers.",
        },
      },
      {
        src: nestSingle3,
        alt: {
          es: "Un pájaro tordo (cowbird) de plumaje azul oscuro intenta colocar un huevo manchado dentro de un nido ajeno que está sobre un casco rojo. El texto explica cómo estos pájaros ponen sus huevos en nidos de otras especies para que los críen.",
          en: "A dark blue cowbird attempts to place a spotted egg into another bird's nest built on top of a red helmet. The text explains how these birds lay their eggs in the nests of other species for them to raise.",
        },
      },
      {
        src: nestSingle4,
        alt: {
          es: "Primer plano de un nido construido sobre un sombrero de paja con cinta rosa. El nido está hecho de ramitas, hojas verdes, plumas de colores y hasta un pequeño calcetín. Un pajarito amarillo con alas rosas se posa alegremente en la cima.",
          en: "Close-up of a nest built on a straw hat with a pink ribbon. The nest is made of twigs, green leaves, colorful feathers, and even a small sock. A little yellow bird with pink wings perches happily on top.",
        },
      },
    ],
  },

  {
    id: 11,
    title: "Ten Balloons",

    cover: balloonsCover,

    gallery: [
      {
        src: balloonsFullCover,
        alt: {
          es: "Portada completa del libro infantil Ten Balloons de Tiffani Joy Patterson. Se ve una escena festiva con banderines de colores, estrellas y manos sosteniendo globos con rostros amigables (azul, rosa y violeta). El diseño invita a una aventura mágica de conteo.",
          en: "Full cover of the children's book Ten Balloons by Tiffani Joy Patterson. It features a festive scene with colorful bunting, stars, and hands holding balloons with friendly faces (blue, pink, and purple). The design invites readers on a magical counting adventure.",
        },
      },
      {
        src: balloonsDouble1,
        alt: {
          es: "Ilustración de doble página que muestra globos de colores (rojo, amarillo, azul y violeta) flotando a través de una puerta abierta. Los globos tienen expresiones de alegría y asombro, mientras el texto rima sobre su llegada a la fiesta.",
          en: "Double-page illustration showing colorful balloons (red, yellow, blue, and purple) floating through an open door. The balloons have expressions of joy and wonder, as the rhyming text describes their arrival at the party",
        },
      },
      {
        src: balloonsEndpaper,
        alt: {
          es: "Diseño de guardas del libro con un patrón repetitivo de cupcakes coloridos (rosa, amarillo, verde, violeta y naranja) intercalados con estrellas amarillas sobre un fondo celeste suave. Un detalle visual tierno y ordenado.",
          en: "Endpaper design featuring a repeating pattern of colorful cupcakes (pink, yellow, green, purple, and orange) interspersed with yellow stars against a soft light blue background. A sweet and orderly visual detail.",
        },
      },
    ],
  },
];
