"use client";
import { FilledButton } from "@/components/Button";
import Congrats from "@/components/signup/Congrats";
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
    setHasConnected(false)
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

  useEffect(() => {

  }, [queryPage, hasAccounts]);

  return (
    <>
      {
        hasConnected && (<Congrats
            action={action}
            text="Congratulations, <br /> Your Instagram account is connected!"
            image={require('../../../assets/icons/instagram.svg')}
        />)
      }

      {queryPage === "1" && (
        <div className="w-full flex flex-col items-start">
          <h3 className="text-head5 text-textBody font-bold ">
            A few steps left to connect your Instagram
          </h3>
          <p className="text-textBody text-links w-[52%] lh-150 text-left mt-2 mb-6">
            By clicking the button below, you'll see an Instagram log-in modal
            where you'll set up a few permissions. Once that's done, you're all
            set to connect to Manychat.
          </p>
          <FilledButton
            cta={() => {router.push('?page=2')}}
            text="Go to Instagram"
            btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
            pClass="text-white"
          />
        </div>
      )}

      {queryPage === "2" && (
        <>
          {hasAccounts ? (
            <div className="w-full">
              <p className="text-textBody w-full mx-auto text-links lh-150 text-left mb-6">
                We found 1 Facebook Page managed by you.
              </p>

              <div className="w-full py-6 flex items-center gap-4 mt-4 border-b border-defaultInputBorder">
                <div className="h-[52px] w-[52px] rounded-full flex items-center justify-center overflow-hidden bg-linkMain">
                  <p className="font-extrabold text-linkHover text-head1">E</p>
                </div>
                <p className="text-textBody text-links flex-[1]">Ebtehal</p>
                <FilledButton
                  cta={() => {}}
                  text="Connected"
                  btnClass="bg-secBg !w-fit px-6"
                  pClass="!text-disabled"
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col items-start">
              <h3 className="text-head5 w-[60%] text-textBody font-bold ">
                We did not find any Facebook pages connected to this account.
              </h3>
              <p className="text-textBody text-links w-[54%] lh-150 text-left mt-2 mb-6">
                It looks like there are no Facebook pages associated with your
                current account. Please connect a different Facebook account to
                manage your Instagram connections.
              </p>
              <FilledButton
                cta={() => {setHasConnected(true)}}
                text="Connect another Facebook account"
                btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
                pClass="text-white"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Page;
