import React from 'react'
import { ProductCard } from './productcard';

interface IproductListProps {
  data: any
}

export function ProductList({data}: IproductListProps) {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
      {data?.map((item:any )=> (
        <ProductCard 
          imageUrl={item.url}
          price={item.price}
          title={item.title}
          key={item.id}
        />
      ))}
    </ul>
  );
}
