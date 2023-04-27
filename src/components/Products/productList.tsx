import React from 'react'
import { ProductCard } from './productcard';
import { motion } from "framer-motion"

interface IproductListProps {
  data: any
}

export function ProductList({data}: IproductListProps) {
  return (
    <motion.div layout className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
      {data?.map((item:any )=> (
        <ProductCard 
          id={item.id}
          imageUrl={item.image}
          price={item.price}
          title={item.title}
          key={item.id}
        />
      ))}
    </motion.div>
  );
}
