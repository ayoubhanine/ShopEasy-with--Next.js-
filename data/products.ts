import { Product } from "@/types/Product";
import Image from "next/image";

export const products:Product[]=[
{
    id: 1,
    name: "iPhone 16 Pro",
    slug: "iphone-16",
    price: 12000,
    image: "/iphone 16.jpg", 
    description: "Découvrez l'iPhone 16 Pro, doté d'un boîtier en titane ultra-résistant, du tout nouveau bouton Commande de l'appareil photo et de la puce A18 Pro de pointe. Conçu pour Apple Intelligence, il offre des performances graphiques exceptionnelles et une autonomie longue durée pour repousser toutes les limites au quotidien.",
    categorie: "Smartphone"
  },
  {
    id: 2,
    name: "MacBook Air M3",
    slug: "macbook-air",
    price: 15000,
    image: "/MacBook Air.jpg",
    description: "Le MacBook Air avec puce M3 est le compagnon idéal pour le travail et le divertissement. Grâce à son design ultra-fin sans ventilateur, il combine un silence absolu avec une puissance phénoménale. Profitez d'un écran Liquid Retina somptueux et d'une autonomie record allant jusqu'à 18 heures.",
    categorie: "Laptop"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    slug: "sony-headphones",
    price: 3000,
    image: "/Sony Headphones.webp",
    description: "Le casque Sony WH-1000XM5 redéfinit l'écoute sans fil avec sa réduction de bruit active de classe mondiale. Équipé de deux processeurs et de huit micros, il isole parfaitement des bruits extérieurs. Profitez d'un confort exceptionnel, d'une qualité d'appel cristalline et d'une autonomie de 30 heures.",
    categorie: "Audio"
  },
{
     id: 4,
    name: "Apple Watch Series 10",
    slug: "apple-watch",
    price: 5000,
    image: "/Applewatch.jpg",
    description: "Suivez votre santé et restez connecté avec style.",
    categorie: "Montre"
}

]

