import { FilledButton } from "@/components/Button";
import { InputFade } from "@/components/Input";
import Image from "next/image";
import React from "react";

const ExistingBot = ({setConnect}: {setConnect: Function}) => {
  return (
    <div className="w-[60%] mx-auto flex flex-col items-start">
      <p className="text-textBody text-links lh-150 text-left ">
        Connect existing Telegram bot
      </p>
      <div className="w-full rounded-lg p-4 flex items-start gap-2 mt-6 mb-10 bg-noteWarning">
        <Image
          src={require("../../../assets/icons/Warning.svg")}
          alt="warning"
          className="w-6 h-6"
        />
        <p className="text-white text-links lh-150 text-left pr-6 tracking-[0.2px]">
          We highly recommend you not to use the same token for different
          services, otherwise the bot will work incorrectly.
        </p>
      </div>

      <p className="text-textBody text-links lh-150 text-left ">
        This instruction helps you to create a new Telegram bot.
      </p>

      <div className="w-full flex flex-col gap-4 mt-6">
        <div className="w-full flex items-center gap-4">
          <Image
            src={require("../../../assets/icons/one.svg")}
            alt="point one"
          />
          <p className="text-textBody text-links lh-150 text-left">
            Open {" "}
            <a href="#" className="text-linkMain">
              @BotFather 
            </a>{" "}
            in Telegram and click <span className="font-bold"> /start </span>
          </p>
        </div>

        <div className="w-full flex items-center gap-4">
          <Image
            src={require("../../../assets/icons/two.svg")}
            alt="point two"
          />
          <p className="text-textBody text-links lh-150 text-left">
            Send
            <span className="font-bold"> /newbot </span>and follow the
            instructions
          </p>
        </div>

        <div className="w-full flex items-center gap-4">
          <Image
            src={require("../../../assets/icons/two.svg")}
            alt="point two"
          />
          <p className="text-textBody text-links lh-150 text-left">
            Once the bot is created, you will receive a message with the token.
            Copy token and paste it here
          </p>
        </div>
      </div>

      <div className="w-full flex mt-8">
        <InputFade
          type="email"
          label="Telegram bot token"
          placeholder="Enter token"
          lClass="!text-manyComet"
          value=""
        />
      </div>

      <div className="w-full flex items-center gap-2 mt-6">
        <FilledButton
          cta={() => {setConnect(true)}}
          text="Connectt"
          btnClass="bg-appOrange hover:bg-appOrangeHover px-6"
          pClass="text-white"
        />
      </div>
    </div>
  );
};

export default ExistingBot;
