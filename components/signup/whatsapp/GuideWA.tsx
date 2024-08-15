import { FilledButton } from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const GuideWA = () => {

  const router = useRouter()
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full appShadow shadApp max-w-[515px] rounded-md overflow-hidden">
        <div className="w-full aspect-[2.01] bg-orange-400">
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            controls
            autoPlay={true}
            onEnded={() => {}}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-textBody text-links lh-150 text-left">
            Watch Tutorial: How to Connect WhatsApp
          </p>
        </div>
      </div>

      <div className="mt-4 w-full max-w-[475px]">
        <p className="text-textBody text-links lh-150 text-left ">
          The Facebook wizard will be opened{" "}
          <span className="font-bold"> in the new tab/window.</span>
        </p>
        <p className="text-textBody text-links lh-150 text-left mt-2">
          Follow its instructions to connect new WhatsApp number to OneBot.
        </p>
        <p className="text-textBody text-links lh-150 text-left mt-2">
          You’ll be asked to provide a phone number for your WhatsApp
          integration. We strongly recommend you to use
          <span className="font-bold"> a new phone number.</span>
        </p>
      </div>
      <div className="flex items-center gap-4 justify-between w-full max-w-[515px] mt-20 ">
        <FilledButton
          cta={() => {router.push('?page=2')}}
          text="Connect New Number"
          btnClass="bg-appOrange hover:bg-appOrangeHover px-6"
          pClass="text-white"
        />
        <FilledButton
          cta={() => {router.push('?page=3')}}
          text="Use My Own Number"
          btnClass="bg-secBtn hover:bg-white px-6 border border-secBorder"
          pClass="text-textBody"
        />
      </div>
    </div>
  );
};

export default GuideWA;
