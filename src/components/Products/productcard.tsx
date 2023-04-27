/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';
import trainers from '../../..//public/trainers.jpeg'
import { motion } from "framer-motion"

interface ICardProps {
    id: string | number
    imageUrl: string;
    title: string;
    price: number;
}

export function ProductCard({id, imageUrl, title, price }: ICardProps) {

  const router = useRouter()
  
  const loaderProp =(src:any) => {
    const { src:image } = src
    return image;
  }

  const showDetails = () => {
    router.push(`/${id}`)
  }
  return(
    <motion.div layout onClick={showDetails} className="border rounded-lg shadow-sm bg-gray-100 cursor-pointer">
      <Image
        alt='product-item'
        src={imageUrl}
        width={100}
        height={350}
        loader={loaderProp}
        // layout='fill'
        style = {{
          width: "100%",
          height: "250px",
          objectFit: 'contain',
          backgroundColor: "#FFF"
        }}
      />
      <section className='space-y-4 px-6 py-4 border-t'>
        <p className='text-gray-900 text-sm'>{title}</p>
        <span className='text-gray-900 font-black text-sm'>${price.toFixed(2)}</span>
      </section>
    </motion.div>
  );
}
