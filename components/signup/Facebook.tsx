"use client";
import React, { useContext, useEffect } from "react";
import { FilledButton } from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import { GlobalContext } from "@/context/context";
import Image from "next/image";

const Facebook = () => {
  const router = useRouter();

  const search = useSearchParams()
  const channel = new URLSearchParams(search).get('channel')

  const setRoute = (): string => {
    let route: string = '/';
    switch(channel){
        case "instagram" : route = '/signup/connect-instagram?page=1' ;
        break;
        case "whatsapp" : route = '/signup/connect-whatsapp?page=1' ;
        break;
        case "facebook" : route = '/signup/connect-facebook' ;
        break;
        default : route = '/signup/connect-facebook'
     }

    return route
  } 

  return (
    <div>
      <div className="w-full mx-auto flex flex-col gap-2 my-9">
        <h1 className="text-textBody font-bold text-[44px] text-center lh-130 tracking-[0%]">
          Sign Up to ChatBoomer
        </h1>
        <p className="text-textSec text-[15px] text-center tracking-[0.2px]">
          Sign Up to create an account
        </p>
      </div>
      <p className="text-textBody w-full mx-auto text-links lh-150 text-center mb-8">
      <span className="font-bold">ChatBoomer</span> needs specific permissions to create automations <br />
      for Messenger, Instagram, and WhatsApp. Click the button to allow access.
      </p>
      <FilledButton
        cta={() => {
          router.push(setRoute());
        }}
        text="Continue with Facebook"
        image={require("../../assets/icons/facebookWhite.svg")}
        btnClass="bg-appBlue hover:bg-appBlueHover"
        pClass="text-white"
      />
      <div>
        <p className="text-textSec text-linkSmall text-center mt-8">
          By signing up, you agree to ChatBoomer's
          <br />
          <span>
            <a href="#" className="text-appBlue">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-appBlue">
              Privacy Policy
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Facebook;
