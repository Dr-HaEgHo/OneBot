"use client";
import { FilledButton } from "@/components/Button";
import Congrats from "@/components/signup/Congrats";
import TitleHeader from "@/components/TitleHeader";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [hasAccounts, setHasAccount] = useState(true);
  const [hasPages, setHasPages] = useState(false);
  const { button, setButton, setChild } = useContext(GlobalContext);
  const [hasConnected, setHasConnected] = useState(false);

  const search = useSearchParams();
  const queryPage = new URLSearchParams(search).get("page");

  const action = () => {
    setHasConnected(false);
    router.push("/login");
  };

  const updateButton = () => {
    hasAccounts && !hasPages
      ? setButton({
          cta: () => {
            router.push("/signup");
          },
          text: "Choose another channel",
        })
      : setButton({
          cta: () => {
            router.back();
          },
          text: "back",
        });
  };

  useEffect(() => {
    setChild(
      <div className="w-full h-full">
        <Image
          src={require("../../../assets/images/insta-mural.svg")}
          alt="meta business mural"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }, []);

  useEffect(() => {
    updateButton();
  }, [hasAccounts, hasPages]);

  return (
    <div className="min-h-[80vh] flex items-center">
      {hasConnected && (
        <Congrats
          action={action}
          text="Congratulations, <br /> Your Instagram account is connected!"
          image={require("../../../assets/icons/instagram.svg")}
        />
      )}

      <div className="signup-container ">
        <TitleHeader
            title="Connect Instagram Account"
            subtitle="Follow the instructions to connect your Instagram account."
          />

        <div className="w-full">
          {queryPage === "1" && (
            <div className="w-full flex flex-col items-center text-center">
              <h3 className="text-head5 text-textBody font-bold text-center">
                Just a few steps remain to connect your Instagram
              </h3>
              <p className="text-textBody text-center text-links w-[52%] lh-150 mt-2 mb-6">
                Click the button below to open an Instagram log-in window, where{" "}
                <br /> you can configure the necessary permissions. After that,
                you'll be <br /> ready to connect to ChatBoomer.
              </p>
              <FilledButton
                cta={() => {
                  router.push("?page=2");
                }}
                text="Go to Instagram"
                btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
                pClass="text-white"
              />
            </div>
          )}
          {queryPage === "2" && (
            <>
              {hasAccounts ? (
                <>
                  {hasPages ? (
                    <div className="w-full">
                      <p className="text-textBody w-full mx-auto text-links lh-150 text-left mb-6">
                        We found 1 Facebook Page managed by you.
                      </p>

                      <div className="w-full py-6 flex items-center gap-4 mt-4 border-b border-defaultInputBorder">
                        <div className="h-[52px] w-[52px] rounded-full flex items-center justify-center overflow-hidden bg-linkMain">
                          <p className="font-extrabold text-linkHover text-head1">
                            E
                          </p>
                        </div>
                        <p className="text-textBody text-links flex-[1]">
                          Ebtehal
                        </p>
                        <FilledButton
                          cta={() => {}}
                          text="Connected"
                          btnClass="bg-secBg !w-fit px-6"
                          pClass="!text-disabled"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col items-center">
                      <p className="text-textBody w-full mx-auto text-links lh-150 text-center mb-6">
                        We couldn't find any Facebook Pages that you manage.
                      </p>
                      <FilledButton
                        cta={() => {
                          setHasAccount(true);
                        }}
                        text="Create New Page"
                        btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
                        pClass="text-white"
                      />

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
                </>
              ) : (
                <div className="w-full flex flex-col items-center">
                  <h3 className="text-head5 w-[60%] text-center text-textBody font-bold ">
                    No Facebook Pages are currently connected to this account.
                  </h3>
                  <p className="text-textBody text-center text-links w-[54%] lh-150 mt-2 mb-6">
                    It seems there are no Facebook Pages linked to your <br />{" "}
                    current account. Please connect a different Facebook <br />{" "}
                    account to manage your Instagram connections.
                  </p>
                  <FilledButton
                    cta={() => {
                      setHasConnected(true);
                    }}
                    text="Connect another Facebook account"
                    btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
                    pClass="text-white"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
