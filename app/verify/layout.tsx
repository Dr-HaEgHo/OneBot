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
  const { data, setData, button, setButton, error, setError } = useContext(GlobalContext);

  const router = useRouter();


  const updateData = () => {

    switch (path) {
      case "/verify":
        setData({
          art: require("../../assets/icons/verifyArt.svg"),
          title: "Verify your </br> email address",
          description: "Email verification is required for new accounts.",
        });
        break;
      case "/verify/otp":
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
      <div className="w-[44%] h-full hidden bg-appPearLight lg:block overflow-hidden relative pl-36 pr-[70px]">
        {data !== null && (
          <ImageComponent data={data as ImageData} button={button as button} />
        )}
      </div>

      <div className="w-full lg:w-[56%] h-full mx-auto bg-white max-lg:scroll max-lg:mb-20 ">
        {/* Cards */}
        <div className="w-[64%] mx-auto h-full flex flex-col gap-8 items-start justify-center relative">
          {path === "/connect-page/facebook" && (
            <div className="w-full absolute left-1/2 transform -translate-x-1/2 bottom-[10%] ">
              <ul className="w-full flex items-center justify-between">
                <li>
                  <a
                    href=""
                    className="text-linkMain hover:text-linkHover text-links"
                  >
                    I can’t see the Page I want
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-linkMain hover:text-linkHover text-links"
                  >
                    Create new Page
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-linkMain hover:text-linkHover text-links"
                  >
                    Refresh Page list
                  </a>
                </li>
              </ul>
            </div>
          )}
          <div className="w-[387px] bg-appOrange absolute top-[52px] right-0 flex items-start gap-4 p-4 rounded-md">
            <p className="text-links text-white ">
              This email is already in use. Try another email or log in.
            </p>
            <button onClick={() => {}}>
              <Image
                src={require("../../assets/icons/close.svg")}
                alt="close button"
                className="h-6 w-6"
              />
            </button>
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
