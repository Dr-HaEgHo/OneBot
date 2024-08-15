"use client";
import ImageComponent from "@/components/ImageSlider";
import { GlobalContext } from "@/context/context";
import { button, ImageData } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Children, useContext, useEffect } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const search = useSearchParams();
  const path = usePathname();
  const page = new URLSearchParams(search).get("page");
  const { data, setData, button, setButton } = useContext(GlobalContext);

  const router = useRouter();

  console.log("this is the path now: ", path);

  const updateData = () => {
    if (page === '4') {
      setData({
        art: require("../../assets/icons/connTelegram.svg"),
        title:
          "Go Pro to keep </br> new number </br> connected to  </br> Whatsapp",
        description:
          "Without PRO subscription this WhatsApp number will be disconnected in 1 month.",
      });

      setButton({
        cta: () => {},
        text: "Back to region selection",
      });
    }

    switch (path) {
      case "/connect-page/facebook":
        setData({
          art: require("../../assets/icons/messenger.svg"),
          title: "Connect </br> Facebook Page",
          description:
            "Follow the instruction to create your first Messenger automation.",
        });
        break;
      case "/connect-page/instagram":
        setData({
          art: require("../../assets/icons/connectInsta.svg"),
          title: "Connect </br> Instagram",
          description: "Follow the instructions to connect Instagram account.",
        });
        break;
      case "/connect-page/whatsapp":
        setData({
          art: require("../../assets/icons/connWhatsapp.svg"),
          title: "Welcome to </br> WhatsApp Channel",
          description:
            "Connect WhatsApp channel via Facebook and start automating your business.",
        });
        break;
      case "/connect-page/telegram":
        setData({
          art: require("../../assets/icons/connTelegram.svg"),
          title: "Let's connect </br> Telegram bot to </br> OneBot",
          description: "You can create a new bot or connect existing one.",
        });
        break;
      default:
        setData(null);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <main className="w-full h-fit lg:h-screen flex items-center ">
      <div className="w-[44%] h-full hidden bg-athensGray lg:block overflow-hidden relative pl-36 pr-[70px]">
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
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
