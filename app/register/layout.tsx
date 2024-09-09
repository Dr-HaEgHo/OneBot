"use client";
import ImageComponent from "@/components/ImageSlider";
import { GlobalContext } from "@/context/context";
import { button, ImageData } from "@/types";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Children, useContext, useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const search = useSearchParams();
  const path = usePathname();
  const page = new URLSearchParams(search).get("page");
  const { data, setData, button, setButton, error, setError, companyType } = useContext(GlobalContext);

  const router = useRouter();


  const updateData = () => {


    switch (path) {
      case "/register":
        setData({
          art: require("../../assets/icons/unicornSwim.svg"),
          title: "Tell us a little </br> about yourself",
          description: "Help us personalize your OneBot experience.",
        });
        break;
      case "/":
        setData({
          art: require("../../assets/icons/verifyArt.svg"),
          title: "Verify your </br> email address",
          description: "Email verification is required for new accounts.",
        });
        break;
      default:
        setData(null);
    }
  };


  useEffect(() => {
    setButton({
      cta: () => {},
      text: "Log Out",
    });
  }, []);

  useEffect(() => {
    updateData();
  }, []);

  return (
    <main className="w-full h-fit lg:h-screen flex items-center ">
      <div className={`w-[44%] h-full hidden bg-appPearLight lg:block overflow-hidden relative pl-36 pr-[70px]`}>
        {data !== null && (
          <ImageComponent data={data as ImageData} button={button as button} />
        )}
      </div>

      <div className={`w-full lg:w-[56%] h-full mx-auto ${companyType === 'Other' ? 'bg-athensGray' : 'bg-white'} max-lg:scroll max-lg:mb-20`}>
        {/* Cards */}
        <div className="w-[64%] h-full mx-auto flex flex-col gap-8 items-start justify-start relative">
          {children} 
        </div>
      </div>
    </main>
  );
};

export default Layout;
