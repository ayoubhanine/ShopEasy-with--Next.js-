import { Product } from "@/types/Product";
import Image from "next/image";

export const products:Product[]=[
    {
    id:1,
    name:"iphone 16",
    slug:" iphone-16",
    price: 1200,
    image:"/iphone 16.jpg",
    description:"Le dernier smartphone Apple",
    categorie:"Smartphone"
},
{
    id: 2,
    name: "MacBook Air",
    slug: "macbook-air",
    price: 1500,
    image: "/MacBook Air.jpg",
    description: "Ordinateur portable léger et performant.",
    categorie: "Laptop",
},
{
     id: 3,
    name: "Sony Headphones",
    slug: "sony-headphones",
    price: 300,
    image: "/Sony Headphones.webp",
    description: "Casque audio haute qualité.",
    categorie: "Audio",
}

]

