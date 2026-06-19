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
},
{
    id: 5,
    name: "ASUS ROG Zephyrus G14",
    slug: "asus-rog-zephyrus-g14",
    price: 18500,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop",
    description: "Le PC portable de gaming ultime par excellence. Équipé d'un écran OLED somptueux, d'un processeur AMD Ryzen de dernière génération et d'une carte graphique NVIDIA RTX pour jouer sans limites.",
    categorie: "Laptop"
  },
  {
    id: 6,
    name: "Dell XPS 13",
    slug: "dell-xps-13",
    price: 13900,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600&auto=format&fit=crop",
    description: "La référence des ultra-portables sous Windows. Un écran InfinityEdge aux bordures invisibles, des finitions premium en aluminium et une compacité idéale pour les professionnels en déplacement.",
    categorie: "Laptop"
  },

  // --- AUDIO ---
  {
    id: 7,
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    price: 3200,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    description: "Le casque sans fil référence sur le marché. Sa réduction de bruit active (ANC) est de classe mondiale, le confort est exceptionnel et il offre une autonomie de 30 heures.",
    categorie: "Audio"
  },
  {
    id: 8,
    name: "AirPods Pro 2",
    slug: "airpods-pro-2",
    price: 2500,
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=600&auto=format&fit=crop",
    description: "Les écouteurs sans fil d'Apple avec réduction de bruit active deux fois plus performante, audio spatial personnalisé et un boîtier de charge MagSafe équipé d'un haut-parleur.",
    categorie: "Audio"
  },

  // --- GAMING ---
  {
    id: 10,
    name: "PlayStation 5 Slim",
    slug: "playstation-5-slim",
    price: 5500,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600&auto=format&fit=crop",
    description: "Vivez des chargements ultra-rapides grâce à un SSD de 1 To, une immersion plus profonde grâce au retour haptique de la manette DualSense et un catalogue de jeux exclusifs incroyables.",
    categorie: "Gaming"
  },
  {
    id: 11,
    name: "Nintendo Switch OLED",
    slug: "nintendo-switch-oled",
    price: 3500,
    image: "https://images.unsplash.com/photo-1578345218746-50a229b3d0f8?q=80&w=600&auto=format&fit=crop",
    description: "Profitez de vos jeux préférés sur un écran OLED de 7 pouces aux couleurs éclatantes, que ce soit en mode nomade ou sur votre téléviseur avec vos proches.",
    categorie: "Gaming"
  },

  // --- ACCESSOIRES ---
  {
    id: 12,
    name: "Apple Watch Series 10",
    slug: "apple-watch-series-10",
    price: 4800,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop",
    description: "Le design le plus fin jamais conçu pour une Apple Watch, doté du plus grand écran. Suivez votre santé au jour le jour avec l'ECG, la détection des chutes et le suivi du sommeil.",
    categorie: "Accessoires"
  },
  {
    id: 13,
    name: "Logitech MX Master 3S",
    slug: "logitech-mx-master-3s",
    price: 1100,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop",
    description: "La souris ergonomique de référence pour les développeurs et designers. Clics ultra-silencieux, molette MagSpeed ultra-rapide et capteur de 8000 PPP qui fonctionne sur toutes les surfaces.",
    categorie: "Accessoires"
  }

]

