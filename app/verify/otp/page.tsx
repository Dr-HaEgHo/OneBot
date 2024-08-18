"use client";
import { FilledButton } from "@/components/Button";
import React, { useState } from "react";
import PinInput from "react-pin-input";

const Page = () => {
  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);

  let pinInputRef: PinInput | null | void;

  return (
    <div className="w-[50%] h-full mx-auto flex flex-col items-start justify-center">
      <p className="text-textBody text-head6 lh-150 text-left">
        Check your Inbox
      </p>
      <p className="text-textSec text-linkSmall lh-150 text-left">
        Type the code we sent to <br />
        ebtehal.mo2003@gmail.com
      </p>
      <div className="w-full flex mt-6 mb-8">
        <div className="w-full">
          <PinInput
            length={6}
            initialValue=""
            secret
            secretDelay={100}
            onChange={(value, index) => {
              setValues(value.split(""));
            }}
            type="numeric"
            inputMode="number"
            style={{
              gap: 8,
            }}
            inputStyle={{
              borderColor: "#eaeaea",
              backgroundColor: "#fff",
              borderRadius: 4,
              minWidth: 8,
              width: 44,
              height: 56,
            }}
            inputFocusStyle={{ borderColor: "#2A66AE" }}
            onComplete={(value, index) => {
              setFormButtonDisabled(true);
            }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            // ref={(n) => (pinInputRef = n)}
          />
        </div>
      </div>

      <div className="w-full flex items-center gap-10">
        <a href="#" className="text-linkMain text-linkSmall lh-150 text-left">
          Change email address
        </a>
        <a href="#" className="text-linkMain text-linkSmall lh-150 text-left">
          Can't receive email
        </a>
      </div>

      <div className="absolute bottom-[52px] right-0 flex items-center gap-2 mt-6">
        <FilledButton
          cta={() => {}}
          text="Next"
          btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
          pClass="text-white"
        />
      </div>
    </div>
  );
};

export default Page;
