import { FilledButton } from "@/components/Button";
import React, { Dispatch, FC, SetStateAction } from "react";

interface props {
  setOpen: Dispatch<SetStateAction<boolean>>
  
}
const LinkInfo:FC<props> = ({setOpen}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-head5 text-textBody mb-6 font-bold w-full max-w-[515px]">
        Essential information on linking your number
      </h3>

      <div className="w-full max-w-[475px]">
        <p className="text-textBody text-links lh-150 text-left ">
          Personal phone numbers cannot be used for personal WhatsApp after
          connection.
        </p>
        <p className="text-textBody text-links lh-150 text-left mt-3">
          Messaging customers is limited to 24 hours from their last contact,
          and out-of-window communication requires approved templates.
        </p>
        <p className="text-textBody text-links lh-150 text-left mt-2">
          Features such as contact lists, broadcast lists, voice messages, audio
          calls and group messaging are not available in the WhatsApp App
          post-connection.
        </p>
        <p className="text-textBody text-links lh-150 text-left mt-2">
          The WhatsApp Business App will stop working with this number after
          connection.
        </p>
        <p className="text-textSec text-links text-left mt-4">
          Your chat history will not be transferred. Refer to guides for backup
          on {" "}
          <a href="#" className="text-appBlue">
            iPhone
          </a>
          {" "} and {" "}
          <a href="#" className="text-appBlue">
          Android .
          </a>
        </p>
        
      </div>
      <div className="flex items-center gap-4 justify-between w-full max-w-[515px] mt-6 ">
        <FilledButton
          cta={() => {
            alert('Helllo')
            setOpen(true)
          }}
          text="Connect New Number"
          btnClass="bg-secBtn px-6 border border-secBorder"
          pClass="text-textBody"
        />
        <FilledButton
          cta={() => {setOpen(false)}}
          text="Proceed With Own Number"
          btnClass="bg-appOrange px-6"
          pClass="text-white"
        />
      </div>
    </div>
  );
};

export default LinkInfo;
