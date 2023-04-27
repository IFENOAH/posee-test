import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ProductList } from '@/components/Products/productList'
import { Hero } from '@/components/Hero/hero'
import { CustomInput } from '@/components/forms/input'
import { useCategoriesQuery, useGetCategoriesQuery, useProductsQuery } from './api/productsApi'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import axios from 'axios'
import { motion } from "framer-motion"
import { InferGetServerSidePropsType } from 'next'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ products, categories }:InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [category, setCategory] = useState('All Items')
  const { data:filteredData, isFetching } = useCategoriesQuery({category: category})

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
        <header className='flex flex-col md:flex-row items-start justify-center md:items-center md:justify-between space-y-6 md:space-y-0'>
          <h2 className='underline underline-offset-[10px] font-extrabold text-gray-900 text-2xl'>Our Available Products&nbsp; </h2>
          <div className=''>
            <div className='flex items-center space-x-4'>
              <label className='text-xs'>
                Sort by categories: 
              </label>
              <select onChange={e => setCategory(e.currentTarget.value)} value={category} className='text-sm border p-3 rounded-lg cursor-pointer'>
                <option>All Items</option>
                {categories?.map((item:string) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </header>
        <motion.div className='overflow-y-auto min-h-[650px]'>
          {isFetching ? 
            <p className='w-full  flex items-center justify-center '>Loading...</p>
            : <ProductList data={ category === 'All Items' ? products : filteredData } />
          }
        </motion.div>
      </div>
    </main>
  )
}

export async function getServerSideProps() {

  const [ { data:products }, { data:categories } ] = await Promise.all([
    axios.get(`https://fakestoreapi.com/products`, {}),
    axios.get(`https://fakestoreapi.com/products/categories`, {})
  ])

  return {
    props: { products, categories }
  };
}
