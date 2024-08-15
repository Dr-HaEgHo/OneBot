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
import { GlobalContext } from "@/context/context";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [hasAccounts, setHasAccount] = useState(false);
  const { button, setButton } = useContext(GlobalContext);
  const [hasConnected, setHasConnected] = useState(false);

  const search = useSearchParams();
  const queryPage = new URLSearchParams(search).get("page");

  const action = () => {
    setHasConnected(false);
    router.push('/login')
  };

  const updateButton = () => {
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

  useEffect(() => {}, [queryPage, hasAccounts]);

  return (
    <>
      {hasConnected && (
        <Congrats
          action={action}
          image={require("../../../assets/icons/telegram.svg")}
          text="Congratulations, <br /> Your Telegram account is connected!"
        />
      )}

      {queryPage === "1" && (
        <div className="w-[70%] mx-auto flex flex-col items-start">
          <p className="text-textBody text-links lh-150 text-left ">
            How do you want to start?
          </p>
          <p className="text-textBody text-links lh-150 text-left mt-4">
            In each scenario, we will guide you through easy step-by-step
            instructions.
          </p>

          <div className="w-full flex items-center gap-2 mt-6">
          <FilledButton
            cta={() => {router.push('?page=2')}}
            text="Create New Bot"
            image={require('../../../assets/icons/Plus.svg')}
            btnClass="bg-appOrange hover:bg-appOrangeHover px-6"
            pClass="text-white"
          />
          <BoundlessIconButton 
            cta={() => {router.push('?page=3')}}
            text="Connect existing bot"
            image={require('../../../assets/icons/Bot.svg')}
            btnClass="px-6 w-full"
            pClass="text-linkMain"
          />
          </div>
        </div>
      )}

      {queryPage === "2" && <NewBot  setConnect={setHasAccount}/>}

      {queryPage === "3" && <ExistingBot setConnect={setHasAccount}/>}

    </>
  );
};

export default Page;
