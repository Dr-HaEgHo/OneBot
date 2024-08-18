'use client'
import { OutlinedButton } from '@/components/Button';
import ImageComponent from '@/components/ImageSlider';
import Facebook from '@/components/signup/Facebook';
import Instagram from '@/components/signup/Instagram';
import Whatsapp from '@/components/signup/Whatsapp';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const data = {
    art: require('../../assets/icons/unicorn.svg'), 
    title: 'Sign Up to </br> OneBot',
    description: "Sign Up to create an account."
}


const Page = () => {
    const search = useSearchParams();
    const channel = new URLSearchParams(search).get('channel')
    
    const router = useRouter()
    const button = {
        cta: () => {router.back()},
        text: 'Back',
        image: require('../../assets/icons/arrowLeft.svg')
    }
    
  return (
    <main className="w-full h-fit lg:h-screen flex items-center ">
      <div className="w-[44%] h-full hidden bg-appPearLight lg:block overflow-hidden relative pl-36 pr-[70px]">
        <ImageComponent data={data} button={button}/>
      </div>

      <div className="w-full lg:w-[56%] h-full mx-auto bg-white max-lg:scroll max-lg:mb-20 ">
        <div className="absolute top-0 right-0 flex p-8 items-center gap-8">
          <div className="flex items-center gap-2">
            <Image
              src={require("../../assets/icons/language.svg")}
              alt="language"
              className="h-6 w-6"
              width={1024}
              height={1024}
            />
            <p className="text-textBody text-links">English</p>
          </div>
          <OutlinedButton
            cta={() => router.push('/signup')}
            text="SIGN IN"
            btnClass="border-appOrange"
            pClass=""
          />
        </div>

        {/* Cards */}
        <div className="w-[64%] mx-auto h-full flex flex-col gap-8 items-center justify-center">
          { channel === 'instagram' && <Instagram/>}
          { channel === 'facebook' && <Facebook/>}
          { channel === 'whatsapp' && <Whatsapp/>}
        </div>
      </div>
    </main>
  )
}

export default Page