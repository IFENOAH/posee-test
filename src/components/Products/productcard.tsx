import Image from 'next/image';
import trainers from '../../..//public/trainers.jpeg'

interface ICardProps {
    imageUrl: string;
    title: string;
    price: number
}

export function ProductCard({imageUrl, title, price }: ICardProps) {
  return(
    <div className="border rounded shadow-sm">
      <Image
        alt='product-item'
        src={trainers}
        // layout='fill'
        style = {{
          width: "100%",
          height: "350px",
          objectFit: 'cover'
        }}
      />
      <section className='space-y-4 p-4'>
        <p className='text-md'>{title}</p>
        <span className='text-xs'>{price.toFixed(2)}</span>
      </section>
    </div>
  );
}
