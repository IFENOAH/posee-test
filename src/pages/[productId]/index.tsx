import { Button } from "@/components/forms/button";
import axios from "axios";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import * as Icon from 'react-feather'

function ProductDetails({data}:InferGetServerSidePropsType<typeof getServerSideProps>){

    const router = useRouter()
    const loaderProp =(src:any) => {
        const { src:image } = src
        return image;
    }

  return (
    <Fragment>
        <Head>
            <title>Product Details</title>
            <meta name="description" content="Product details page" />
        </Head>

      <main className="p-8 space-y-8">
        <div onClick = {() => router.back()} className="flex itmems-center space-x-4 cursor-pointer">
            <Icon.ChevronLeft />
            <span>Back to products</span>
        </div>

        <section>
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                <div className="w-full md:w-1/2 space-y-6">
                    <Image 
                        src={data?.image}
                        alt="product-detail" 
                        width={450}
                        height={450}
                        loader={loaderProp}
                        className="border p-4 rounded-md"
                    />
                    {/* <h2 className="text-2xl ">Description</h2> */}
                </div>
                <section className="w-full md:w-1/2 space-y-6">
                    <article className="space-y-6">
                        <div>
                            <span className="underline pr-3 font-extrabold text-md">Item: </span>
                            <p className="text-sm font-normal">{data?.title}</p>
                        </div>

                        <div>
                            <span className="underline pr-3 font-extrabold text-md">Desc: </span>
                            <p className="text-sm font-normal">{data?.description}</p>
                        </div>

                        <div>
                            <span className="underline pr-3 font-extrabold text-md">Category: </span>
                            <p className="text-sm font-normal">{data?.category}</p>
                        </div>

                        <div>
                            <span className="underline pr-3 font-extrabold text-md">Price: </span>
                            <p className="text-sm font-normal">${data?.price?.toFixed(2)}</p>
                        </div>
                    </article>

                    <Button>
                        Add to Cart
                    </Button>
                </section>
            </div>
        </section>
      </main>
    </Fragment>
  )
}

export async function getServerSideProps(context:any){
    const { productId } = context.query;
    const {data:data} = await axios.get(`https://fakestoreapi.com/products/${productId}`, {});

    return {
        props: {
            data
        }
    }

}

export default ProductDetails