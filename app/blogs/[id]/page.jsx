'use client'
import Footer from '@/app/components/footer';
import { assets, blog_data } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'

const Page = ({params}) => {
  const {id} = use(params)
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for(let i=0; i<blog_data.length; i++){
      if(Number(id) === blog_data[i].id){
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  }

  useEffect(() => {
    fetchBlogData();
  }, [])

  return ( data ? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Link href="/">
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/> </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt=''/></button>
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image src={data.author_img} width={60} height={60} alt='' className='mx-auto mt-6 border border-white rounded-full'/>
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image src={data.image} width={1920} height={1080} alt='' className='border-4 border-white'/>
      <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
      <p className='my-3'>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
      <p className='my-3'>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self-Reflection and Goal Setting</h3>
      <p className='my-3'>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
      <p className='my-3'>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self-Reflection and Goal Setting</h3>
      <p className='my-3'>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
      <p className='my-3'>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
      <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
      <p className='my-3'>Managing your lifestyle is a journey that requires commitment and self-awareness. By following this step-by-step guide, you can take control of your life and make meaningful changes that lead to a more balanced and fulfilling lifestyle. Remember that it's okay to seek support and guidance from professionals or mentors along the way. Your well-being and happiness are worth the effort.</p>
      <div className='my-24'>
        <p className='text-black font-semibold my-4'>Share this article on social media</p>
        <div className='flex'>
          <Image src={assets.facebook_icon} width={28} alt='' className='mr-1'/>
          <Image src={assets.twitter_icon} width={28} alt=''className='mx-1'/>
          <Image src={assets.linkedin_icon} width={28} alt=''className='mx-1'/>
        </div>
      </div>
    </div>
    <Footer />
    </> : <></>
  )
}

export default Page
