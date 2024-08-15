"use client";
import { FilledButton } from "@/components/Button";
import Congrats from "@/components/signup/Congrats";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const [hasAccounts, setHasAccount] = useState(false);
  const [ hasConnected, setHasConnected ] = useState(false);
  const { button, setButton } = useContext(GlobalContext)
  
  const action = () => {
    setHasConnected(false)
    router.push('/login')
  };

  const router = useRouter()

  const updateButton = () => {
    setButton({
      cta: () => {router.push('/signup')},
      text: 'Choose another channel',
  })}

  useEffect(() => {
    updateButton()
  }, [])
  return (
    <>
        { hasConnected ? (<Congrats
            action={action}
            text="Congratulations, <br /> Your Facebook account is connected!"
            image={require('../../../assets/icons/facebook.svg')}
        />) : (
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
                    cta={() => {setHasConnected(true)}}
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
                    cta={() => {setHasAccount(true)}}
                    text="Create New Page"
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

export default page;
