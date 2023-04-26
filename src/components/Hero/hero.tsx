import Banner from '../../../public/banner.jpeg'
import { Button } from '../forms/button'

export const Hero = () => {
  return (
    <section className='object-fill backdrop-brightness-75 w-full h-[550px] bg-gray-500 flex justify-between items-center md:px-[70px] xl:px-[144px]'
        style={{
            backgroundImage: `url("https://wallpaper.dog/large/10899370.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: "multiply",
            objectFit: "contain",
        }}>

        <article className='flex items-center justify-center flex-col py-4 w-full space-y-4 '>
            <span className='text-4xl lg:text-5xl font-extrabold text-white'>
                Shop Our New Collections
            </span>
            <p className='text-center text-white text-lg font-normal w-full'>
                Coming to you April 28th 20223
            </p>
            <Button>
                Shop Now
            </Button>
        </article>
    </section>
  )
}