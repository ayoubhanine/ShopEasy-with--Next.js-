import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product";

interface ProductCardProps {
    product:Product
}

export default function ProductCard({product}:ProductCardProps){
    return(
        <div>
            <Image src={product.image}
                alt={product.name}
                width={250}
                height={250}/>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
               <Link href={`products/${product.slug}`}> Voir details</Link>
        </div>
    )
}