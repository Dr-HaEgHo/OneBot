"use client";
import { FilledButton } from "@/components/Button";
import { InputFade } from "@/components/Input";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {

  const router = useRouter()

  const {setButton, setRightButton} = useContext(GlobalContext);


  useEffect(() => {
    setButton({
      text: 'Log out',
      cta: () => {router.push('login')}
    })
    setRightButton({
      text: 'Next',
      cta: () => {router.push('/register/verify-email/otp')}
    })

  } , [])
  return (
    <div className="h-[80vh] mx-auto flex flex-col items-center justify-center">
      <div className="signup-container">
      <div className="w-full mx-auto flex flex-col gap-2 my-9">
          <h1 className="text-textBody font-bold text-[44px] text-center lh-130 tracking-[0%]">
            Verify your email address
          </h1>
          <p className="text-textSec text-[15px] text-center tracking-[0.2px]">
            Email verification is required for new accounts.
          </p>
        </div>
        <div className="w-[30%] mx-auto">
          <p className="text-textBody text-head6 lh-150 text-left">
            What is your email address?
          </p>
          <div className="w-full flex mt-4">
            <InputFade
              type="email"
              placeholder="Enter token"
              lClass="!text-manyComet"
              value=""
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
