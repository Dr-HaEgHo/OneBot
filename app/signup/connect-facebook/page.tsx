"use client";
import { FilledButton } from "@/components/Button";
import Congrats from "@/components/signup/Congrats";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  const [hasAccounts, setHasAccount] = useState(false);
  const [hasConnected, setHasConnected] = useState(false);
  const { button, setButton, setChild } = useContext(GlobalContext);

  const action = () => {
    setHasConnected(false);
    router.push("/login");
  };

  const router = useRouter();

  const updateButton = () => {
    setChild(
      <div className="w-full h-full">
        <Image
          src={require("../../../assets/images/fb-messenger.svg")}
          alt="meta business mural"
          className="w-full h-full object-cover"
        />
      </div>
    );
    setButton({
      cta: () => {
        router.push("/signup");
      },
      text: "Choose another channel",
    });
  };

  useEffect(() => {
    updateButton();
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center">
      {hasConnected ? (
        <Congrats
          action={action}
          text="Congratulations, <br /> Your Facebook account is connected!"
          image={require("../../../assets/icons/facebook.svg")}
        />
      ) : (
        <div className="signup-container">
            <div className="w-full mx-auto flex flex-col gap-2 mb-9">
              <h1 className="text-textBody font-bold text-[44px] text-center lh-130">
                Connect Facebook Page
              </h1>
              <p className="text-textSec text-[15px] text-center tracking-[0.2px]">
                Follow the instruction to create your first Messenger automation.
              </p>
            </div>
            {hasAccounts ? (
              <div className="w-full">
                <p className="text-textBody w-full mx-auto font-normal text-links lh-150 text-left mb-4">
                  We found 1 Facebook Page managed by you.
                </p>

                <div className="w-full py-6 flex items-center gap-4 mt-4 border-b border-defaultInputBorder">
                  <div className="h-[52px] w-[52px] rounded-full flex items-center justify-center overflow-hidden bg-linkMain">
                    <p className="font-extrabold text-linkHover text-head1">
                      E
                    </p>
                  </div>
                  <p className="text-textBody text-links flex-[1]">Ebtehal</p>
                  <FilledButton
                    cta={() => {
                      setHasConnected(true);
                    }}
                    text="Connected"
                    btnClass="bg-secBg !w-fit px-6"
                    pClass="!text-disabled"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center">
                <p className="text-textBody w-full mx-auto text-links lh-150 text-center mb-6">
                  We haven't found Facebook Pages managed by you.
                </p>
                <FilledButton
                  cta={() => {
                    setHasAccount(true);
                  }}
                  text="Create New Page"
                  btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
                  pClass="text-white"
                />
              </div>
            )}

            <div className="w-[59%] mx-auto mt-[104px]">
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
          </div>
      )}
    </div>
  );
};

export default Page;
