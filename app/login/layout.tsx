"use client";
import { BoundlessIconButton } from "@/components/Button";
import MuralComponent from "@/components/signup/MuralComponent";
import Navbar from "@/components/signup/Navbar";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const { child, button } = useContext(GlobalContext);

  return (
    <div className="w-full justify-center">
      <div className="flex items-start">
        {/* Left */}
        <div className="h-full flex-[1] relative">
          <div className="w-full container">
            <Navbar />
          </div>

          <div className="container min-h-[90vh] h-full">{children}</div>

          {button && (
            <div className="w-full absolute container mx-auto left-[4%] bottom-[8%]">
              <BoundlessIconButton
                cta={button?.cta}
                text={button?.text}
                image={button?.image}
                pClass="text-linkMain"
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

export default LoginLayout;
