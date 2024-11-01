export const artworks = [
  {
    id: "1",
    title: "Untitled (Skull)",
    year: "1981",
    description: "Obra icónica de Basquiat que muestra un cráneo con colores vibrantes.",
    interpretation: "Representa la dualidad de la vida y la muerte.",
    price: "$10,000,000",
    category: "1981",
    image: "/skull.jpg",
    stock: 10,
  },
  {
    id: "2",
    title: "Boy and Dog in a Johnnypump",
    year: "1982",
    description: "Un niño y su perro, pintados con el característico estilo de Basquiat.",
    interpretation: "Explora la relación entre la inocencia y la violencia urbana.",
    price: "$12,000,000",
    category: "1982",
    image: "/boy_and_dog.jpg",
    stock: 5,
  },
  {
    id: "3",
    title: "Flexible",
    year: "1984",
    description: "Figura humana estilizada con brazos largos y flexibles.",
    interpretation: "La flexibilidad del ser humano frente a las adversidades.",
    price: "$7,000,000",
    category: "1984",
    image: "/flexible.jpg", 
    stock: 8,
  },
  {
    id: "4",
    title: "Untitled (Head)",
    year: "1981",
    description: "Un retrato expresivo que muestra el estilo distintivo de Basquiat.",
    interpretation: "Captura la energía y complejidad de la figura humana.",
    price: "$9,000,000",
    category: "1981",
    image: "/head.jpg",
    stock: 3,
  },
  {
    id: "5",
    title: "Trumpet",
    year: "1982",
    description: "Pintura que combina texto y símbolos con colores brillantes.",
    interpretation: "Explora la relación entre la música y el arte.",
    price: "$8,000,000",
    category: "1982",
    image: "/trumpet.jpg", 
    stock: 5,
  },
  {
    id: "6",
    title: "Grillo",
    year: "1984",
    description: "Obra vibrante con elementos abstractos y colores contrastantes.",
    interpretation: "Refleja la energía de la escena artística de Nueva York.",
    price: "$6,000,000",
    category: "1984",
    image: "/grillo.jpg", 
    stock: 20,
  },
];


const getArtworks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(artworks);

  }, 3000);
});

export default getArtworks