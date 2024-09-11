'use client'
import { OutlinedButton } from '@/components/Button';
import ImageComponent from '@/components/ImageSlider';
import Facebook from '@/components/signup/Facebook';
import Instagram from '@/components/signup/Instagram';
import Telegram from '@/components/signup/Telegram';
import Whatsapp from '@/components/signup/Whatsapp';
import { GlobalContext } from '@/context/context';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

const data = {
    art: require('../../../assets/icons/unicorn.svg'), 
    title: 'Sign Up to </br> OneBot',
    description: "Sign Up to create an account."
}

const Page = () => {
    const search = useSearchParams();
    const channel = new URLSearchParams(search).get('channel')
    const { setChild, setButton, setNavSignup } = useContext(GlobalContext)

    const router = useRouter()
    const button = {
        cta: () => {router.back()},
        text: 'Back',
        image: require('../../../assets/icons/arrowLeft.svg')
    }

    useEffect(() => {
      setButton({
        cta: () => {
          router.back();
        },
        text: "Back",
      });
      setChild(
        <div className="w-full h-full">
          <Image
            src={require("../../../assets/images/telegram-mural.svg")}
            alt="meta business mural"
            className="w-full h-full object-cover"
          />
        </div>
      );
      setNavSignup({
        language: "English",
        text: "SIGN IN",
        route: '/login',
        classes: "border-appOrange"
      })
    }, [])
  return (
    <main className="w-full flex items-center ">

      <div className="signup-container h-[80vh] flex flex-col justify-center items-center">
      <div className="w-full mx-auto flex flex-col gap-2 my-9">
        <h1 className="text-textBody font-bold text-[44px] text-center lh-130 tracking-[0%]">
          Sign Up to ChatBoomer
        </h1>
        <p className="text-textSec text-[15px] text-center tracking-[0.2px]">
          Sign Up to create an account
        </p>
      </div>

        {/* Cards */}
        <div className="mx-auto w-[59%] flex flex-col gap-8 items-center justify-center">
          <Telegram/>
        </div>
      </div>
    </main>
  )
}

export default Page