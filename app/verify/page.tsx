"use client";
import { FilledButton } from "@/components/Button";
import { InputFade } from "@/components/Input";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  
    

  return (
    <div className="w-[40%] h-full mx-auto flex flex-col items-start justify-center">

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

      <div className="absolute bottom-[52px] right-0 flex items-center gap-2 mt-6">
        <FilledButton
          cta={() => {}}
          text="Next"
          btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
          pClass="text-white"
        />
      </div>
      
      
    </div>
  );
};

export default Page;
