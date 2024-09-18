"use client";
import { BoundlessIconButton, FilledButton } from "@/components/Button";
import MuralComponent from "@/components/signup/MuralComponent";
import Navbar from "@/components/signup/Navbar";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  const { child, button, rightButton, setChild } = useContext(GlobalContext);

  useEffect(() => {
    setChild(
      <div className="w-full h-full">
        <Image
          src={require("../../assets/images/journey-mural.svg")}
          alt="meta business mural"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }, [])
  return (
    <div className="w-full justify-center">
      <div className="flex items-start">
        {/* Left */}
        <div className="h-full flex-[1] relative">
          <div className="w-full container">
            <Navbar />
          </div>

          <div className="container min-h-[82vh] h-full">{children}</div>

          {button && (
            <div className="w-fit absolute container mx-auto left-[4%] bottom-[1%]">
              <BoundlessIconButton
                cta={button?.cta}
                text={button?.text}
                image={button?.image}
                pClass="text-linkMain"
              />
            </div>
            )}


          {rightButton && (
            <div className="w-fit bg-yellow-400 absolute mx-auto right-[4%] bottom-[0%]">
              <FilledButton
                cta={rightButton?.cta}
                text={rightButton?.text as string}
                image={rightButton?.image}
                btnClass="bg-appOrange !w-fit px-6"
                pClass="text-white"
              />
            </div>
          )}
        </div>

        {/* Right */}
        <div className="h-screen sticky top-0 aspect-[0.5] flex flex-col">
          <MuralComponent>{child}</MuralComponent>
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
