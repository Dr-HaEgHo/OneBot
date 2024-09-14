'use client'
import Facebook from "@/components/signup/Facebook";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const Page = () => {

  const router = useRouter();
  const { setButton, setChild, setNavSignup } = useContext(GlobalContext);


    useEffect(() => {
        // setChild(<div className="w-full h-full">
        //     <Image 
        //         src={require('../../../assets/images/meta-business.svg')}
        //         alt="meta business mural"
        //         className="w-full h-full object-cover"
        //     />
        // </div>)
        setNavSignup({
            language: "English",
            text: 'SIGN IN',
            route: "/login",
            classes: "border-appOrange"
        })
        setButton({
            cta: () => {router.back()},
            text: "Back",
        })
      }, [])

  return (
    <div className="w-full h-full signup-container flex items-center justify-center">
      <div className="w-[59%] mx-auto mt-44">
        <Facebook/>
      </div>
    </div>
  );
};

export default Page;
