import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ProductList } from '@/components/Products/productList'
import { Hero } from '@/components/Hero/hero'
import { CustomInput } from '@/components/forms/input'

const inter = Inter({ subsets: ['latin'] })

const fakeData = [
  {
    id: 1,
    price: 25.90,
    title: "Shoe for boys",
    imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg',
  },
  {
    id: 2,
    price: 25.90,
    title: "Shoe for boys",
    imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg',
  },
  {
    id: 3,
    price: 25.90,
    title: "Shoe for boys",
    imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg',
  },
  {
    id: 4,
    price: 25.90,
    title: "Shoe for boys",
    imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg',
  },
  {
    id: 5,
    price: 25.90,
    title: "Shoe for boys",
    url: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg',
  },
  {
    id: 5,
    price: 25.90,
    title: "Shoe for boys",
    url: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg',
  },
  {
    id: 5,
    price: 25.90,
    title: "Shoe for boys",
    url: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg',
  },
]

export default function Home() {
  return (
    <main
      className={`${inter.className} space-y-6`}
    >
      <Head>
        <title>Noahs Products</title>
        <meta
          name="description"
          content="Browse a list of active Products"
        />
      </Head>

      <Hero />
      <div className='p-8 space-y-8'>

        <header className='flex items-center space-x-8'>
          <h2 className='font-extrabold text-gray-900 text-2xl'>Our Available Products</h2>
          <div>
            <CustomInput
              placeholder="Search for products..."
              type="search"
            />
          </div>
        </header>
        <ProductList data={fakeData} />
      </div>
    </main>
  )
}
