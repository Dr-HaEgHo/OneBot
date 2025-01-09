"use client";
import { FilledButton } from "@/components/Button";
import { AbsoLoad, LoadButton } from "@/components/Load";
import Congrats from "@/components/signup/Congrats";
import { Error, Success } from "@/components/States";
import TitleHeader from "@/components/TitleHeader";
import { baseUrlProd } from "@/config";
import { GlobalContext } from "@/context/context";
import useSigninOptions from "@/hooks/useSigninOptions";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  const [hasAccounts, setHasAccount] = useState(false);
  const [hasConnected, setHasConnected] = useState(false);
  const [hasAuthed, setHasAuthed] = useState<boolean>(false);
  const {
    button,
    setButton,
    setChild,
    token,
    setToken,
    signinOption,
    setUserDetails,
    signupSuccess,
    setSignupSuccess
  } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(false);
  const { loadingOp, data } = useSigninOptions("fb");

  const search = useSearchParams();
  console.log("the option : ", data);

  const code = new URLSearchParams(search).get("code");
  const state = new URLSearchParams(search).get("state");

  const action = () => {
    setHasConnected(false);
    router.push("/login");
  };

  const handleSignUp = async () => {
    if (!code && !state && data === null) {
      return;
    }

    try {
      const response = await axios.post(`${baseUrlProd}/auth/${data}/signup`, {
        code: code,
        state: state,
      });


      if (response && response.status === 200) {
        console.log("the response", response?.data.data);
        setUserDetails(response?.data.data);
        setToken(response?.data.data.access_token)
        setSignupSuccess(true)
      }
    } catch (err) {
      console.log(err);
      setSignupSuccess(false);
    }
  };

  const router = useRouter();

  const updateButton = () => {
    setChild(
      <div className="w-full h-full">
        <Image
          src={require("../../../assets/images/face-mural.svg")}
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

  useEffect(() => {
    if (signupSuccess === true) {
      setTimeout(() => {
        router.push(`/dashboard`);
        setSignupSuccess(null);
      }, 800);
    }else if(signupSuccess === false) {
      setTimeout(() => {
        router.push(`/signup/facebook-auth?channel=facebook`);
        setSignupSuccess(null);
      }, 800);
    }
  }, [signupSuccess]);

  useEffect(() => {
    if (!data) {
      return;
    }else{
      handleSignUp();
    }
  }, [data]);

  return (
    <div className="min-h-[80vh] flex items-center relative">
       { loading && <AbsoLoad title="Signing up..."/> }
       { signupSuccess === true && <Success title="Successful" subtitle="redirecting to dashboard..."/> }
       { signupSuccess === false && <Error title="Error" subtitle="Counldn't sign you up at this moment"/> }
      
      {hasConnected ? (
        <Congrats
          action={action}
          text="Congratulations, <br /> Your Facebook account is connected!"
          image={require("../../../assets/icons/facebooklogo.svg")}
        />
      ) : (
        <div className="signup-container">
          <TitleHeader
            title="Connect Facebook Page"
            subtitle="Follow the instruction to create your first Messenger automation."
          />
          {hasAccounts ? (
            <div className="w-full">
              <p className="text-textBody w-full mx-auto font-normal text-links lh-150 text-left mb-4">
                We found 1 Facebook Page managed by you.
              </p>

              <div className="w-full py-6 flex items-center gap-4 mt-4 border-b border-defaultInputBorder">
                <div className="h-[52px] w-[52px] rounded-full flex items-center justify-center overflow-hidden bg-linkMain">
                  <p className="font-extrabold text-linkHover text-head1">E</p>
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
