"use client";
import { BoundlessIconButton, FilledButton } from "@/components/Button";
import { DropDown, DropDownFade, InputFade } from "@/components/Input";
import Modal from "@/components/Modal";
import Congrats from "@/components/signup/Congrats";
import ExistingBot from "@/components/signup/telegram/ExistingBot";
import NewBot from "@/components/signup/telegram/NewBot";
import CountryCode from "@/components/signup/whatsapp/CountryCode";
import GoPro from "@/components/signup/whatsapp/GoPro";
import GuideWA from "@/components/signup/whatsapp/GuideWA";
import LinkInfo from "@/components/signup/whatsapp/LinkInfo";
import TitleHeader from "@/components/TitleHeader";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const { button, setButton, setChild } = useContext(GlobalContext);
  const [hasConnected, setHasConnected] = useState(false);

  const search = useSearchParams();
  const queryPage = new URLSearchParams(search).get("page");

  const action = () => {
    setHasConnected(false);
    router.push("/login");
  };

  const updateButton = () => {
    setChild(
      <div className="w-full h-full">
        <Image
          src={require("../../../assets/images/telegram-mural.svg")}
          alt="meta business mural"
          className="w-full h-full object-cover"
        />
      </div>
    );
    setButton({
      cta: () => {
        router.back();
      },
      text: "back",
    });
  };

  useEffect(() => {
    updateButton();
  }, []);


  return (
    <div>
      {hasConnected && (
        <Congrats
          action={action}
          image={require("../../../assets/icons/telegram.svg")}
          text="Congratulations, <br /> Your Telegram account is connected!"
        />
      )}

      <div className="signup-container h-[70vh] flex items-center flex-col justify-center">
        <TitleHeader
            title={ queryPage === "1" ? 'Let’s connect Telegram bot <br /> to ChatBoomer' : 'Choose your favorite <br /> bot and make it shine!' }
            subtitle={ queryPage === "1" ? 'You can either create a new bot or connect an existing one.' : 'Simply follow the step-by-step instructions to connect an existing Telegram bot.' }
          />
        <div className="w-[48%] min-w-[414px] mx-auto">
          {queryPage === "1" && (
            <div className="flex flex-col items-center">
              <p className="text-textBody text-links font-bold lh-150 text-center">
                How would you like to get started? 
              </p>
              <p className="text-textBody text-links lh-150 text-center">
                We’ll provide easy, step-by-step instructions for each option.
              </p>

              <div className="w-full flex items-center  mt-8">
                <FilledButton
                  cta={() => {
                    router.push("?page=2");
                  }}
                  text="Create New Bot"
                  image={require("../../../assets/icons/Plus.svg")}
                  btnClass="bg-appOrange hover:bg-appOrangeHover px-6"
                  pClass="text-white"
                />
                <BoundlessIconButton
                  cta={() => {
                    router.push("?page=3");
                  }}
                  text="Connect existing bot"
                  image={require("../../../assets/icons/Bot.svg")}
                  btnClass="px-4 w-full"
                  pClass="text-linkMain py-2 whitespace-nowrap"
                />
              </div>
            </div>
          )}

          {queryPage === "2" && <NewBot setConnect={setHasConnected} />}

          {queryPage === "3" && <ExistingBot setConnect={setHasConnected} />}
        </div>
      </div>
    </div>
  );
};

export default Page;
