"use client";
import { FilledButton } from "@/components/Button";
import TitleHeader from "@/components/TitleHeader";
import { GlobalContext } from "@/context/context";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import PinInput from "react-pin-input";

const Page = () => {
  const router = useRouter();

  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);

  let pinInputRef: PinInput | null | void;

  const { setButton, setRightButton } = useContext(GlobalContext);

  useEffect(() => {
    setButton({
      text: "Log out",
      cta: () => {
        router.push("login");
      },
    });
    setRightButton({
      text: "Next",
      cta: () => {
        router.push("/register/verify-email/otp");
      },
    });
  }, []);

  return (
    <div className="w-full h-[70vh] mx-auto flex flex-col items-center justify-center">
      <div className="signup-container">
        <TitleHeader
            title="Verify your email address"
            subtitle="Email verification is required for new accounts."
          />
        <div className="w-[41%] mx-auto">
          <p className="text-textBody text-head6 lh-150 text-center">
            Check your Inbox
          </p>
          <p className="text-textSec text-linkSmall lh-150 text-center">
            Type the code we sent to ebtehal.mo2003@gmail.com
          </p>
          <div className="w-full flex items-center justify-center mt-6 mb-8">
            <div className="">
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

          <div className="w-full flex items-center justify-center gap-10">
            <a
              href="#"
              className="text-linkMain text-linkSmall lh-150 text-left"
            >
              Change email address
            </a>
            <a
              href="#"
              className="text-linkMain text-linkSmall lh-150 text-left"
            >
              Can't receive email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
