"use client";
// import ImageSlider from '@/components/ImageSlider'
import Image from "next/image";
import { FilledButton, OutlinedButton } from "@/components/Button";
import SocialCard from "@/components/SocialCard";
import ImageComponent from "@/components/ImageSlider";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/context";
import TitleHeader from "@/components/TitleHeader";
import useSigninOptions from "@/hooks/useSigninOptions";
import Load, { AbsoLoad } from "@/components/Load";
import axios from "axios";
import { baseUrlProd } from "@/config";
import { Error, Success } from "@/components/States";
// import { clearSignupSuccess } from '@/store/auth/authSlice'

interface deeTypes {
  name: string;
  image: string;
  btnClass: string;
  pClass: string;
  url: string;
}

export default function Signin() {
  const router = useRouter();
  const {
    setNavSignup,
    setButton,
    setToken,
    setUserDetails,
    signinSuccess,
    setSigninSuccess,
  } = useContext(GlobalContext);
  const { loadingOp, fullData } = useSigninOptions("fb");
  const [loading, setLoading] = useState<boolean>(false);

  const search = useSearchParams();

  const code = new URLSearchParams(search).get("code");
  const state = new URLSearchParams(search).get("state");
  const qOption = new URLSearchParams(search).get("option");

  console.log(fullData);

  const fetchDetails = (name: string) => {
    let deets: deeTypes = {
      name: "Facebook",
      image: "@/assets/icons/facebookWhite.svg",
      btnClass: "bg-appBlue hover:bg-appBlueHover",
      pClass: "text-white",
      url: ""
    };
    if (!name) {
      return;
    }

    switch (name) {
      case "Facebook":
        deets = {
          name: "Facebook",
          image: require("@/assets/icons/facebookWhite.svg"),
          btnClass: "bg-appBlue hover:bg-appBlueHover",
          pClass: "text-white",
          url: "https://onebot.tzkarcreative.com"
        };
        break;
      case "Google":
        deets = {
          name: "Google",
          image: require("@/assets/icons/googleBtn.svg"),
          btnClass: "border bg-white hover:bg-secBg",
          pClass: "text-textBody",
          url: "https://mymetickets.com"
        };
        break;
      case "Email":
        deets = {
          name: "Email",
          image: require("@/assets/icons/Mail.svg"),
          btnClass: "border bg-white hover:bg-secBg",
          pClass: "text-textBody",
          url: "https://onebot.tzkarcreative.com"
        };
        break;
      case "Apple":
        deets = {
          name: "Apple",
          image: require("@/assets/icons/Apple.svg"),
          btnClass: "bg-darkBtn hover:bg-darkGreyBtn",
          pClass: "text-white",
          url: "https://onebot.tzkarcreative.com"
        };
        break;
      case "Telegram":
        deets = {
          name: "Telegram",
          image: require("@/assets/icons/telegramWhite.svg"),
          btnClass: "bg-teleBlue hover:bg-teleBlueHover",
          pClass: "text-textBody",
          url: "https://onebot.tzkarcreative.com"
        };
    }

    return deets;
  };

  const handleOpenNewTab = (url: string) => {
    // const fullUrl = `${window.location.origin}${url}`;
    window.open(url, "_blank"); // Open the route in a new tab
  };

  const getAuth = async (option: number, redUrl: string) => {
    if (!option) {
      return;
    }
    try {
      const res = await axios.get(
        `${baseUrlProd}/auth/${option}/auth-request?redirect_url=${redUrl}`
      );
      if (res && res.status === 200) {
        // console.log("axios res", res?.data.data.url);
        const url = await res?.data.data.url;
        handleOpenNewTab(url);
        setLoading(false);
        router.push(`/login?option=${option}`);
      }
    } catch (err) {
      console.log("axios error message: ", err);
      setLoading(false);
    }
  };

  const handleSignIn = async (option: number) => {
    if (!code && !state && option === null) {
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrlProd}/auth/${option}/signin`,
        {
          code: code,
          state: state,
        }
      );

      if (response && response.status === 200) {
        console.log("the response", response?.data.data);
        setUserDetails(response?.data.data);
        setToken(response?.data.data.access_token);
        setSigninSuccess(true);
      }
    } catch (err) {
      console.log(err);
      setSigninSuccess(false);
    }
  };

  useEffect(() => {
    if (qOption && code && state) {
      handleSignIn(qOption as unknown as number);
    } else {
      return;
    }
  }, [qOption, code, state]);

  useEffect(() => {
    if (signinSuccess === true) {
      setTimeout(() => {
        router.push(`/dashboard`);
        setSigninSuccess(null);
      }, 2000);
    } else if (signinSuccess === false) {
      setTimeout(() => {
        router.push(`/login`);
        setSigninSuccess(null);
      }, 2000);
    }
  }, [signinSuccess]);

  useEffect(() => {
    setNavSignup({
      language: "English",
      text: "GET STARTED FREE",
      route: "/signup",
      classes: "border-appOrange",
    });
    setButton(null);
  }, []);

  return (
    <main className="w-full h-fit lg:h-[86vh] flex items-center ">
      {loading && <AbsoLoad title="Getting Started" />}
      {signinSuccess === true && (
        <Success title="Successful" subtitle="redirecting to dashboard..." />
      )}
      {signinSuccess === false && (
        <Error title="Error" subtitle="Please try login again" />
      )}
      <div className="signup-container">
        <TitleHeader
          title="Welcome back to ChatBoomer!"
          subtitle="Sign In to ChatBoomer."
        />
        {/* Cards */}
        <div className="w-full max-w-[423px] mx-auto h-full flex flex-col gap-4 items-center justify-center relative">
          {loadingOp ? (
            <AbsoLoad title="Loading signin options" />
          ) : fullData ? (
            fullData.map((item: any) => (
              <>
                {item.name === "Instagram" ? (
                  <div className="w-full relative">
                    <Image
                      src={require("../../assets/icons/igButton.svg")}
                      alt="instagram button background color"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1]"
                    />
                    <FilledButton
                      cta={() => getAuth(item.id, fetchDetails(item.name)?.url as unknown as string)}
                      text="Sign Up For Instagram"
                      image={require("../../assets/icons/insta-white.svg")}
                      btnClass="z-10 disabled:opacity-50"
                      pClass="text-white"
                      disabled={loading}
                    />
                  </div>
                ) : (
                  <FilledButton
                    cta={() => getAuth(item.id, fetchDetails(item.name)?.url as unknown as string)}
                    text={`Sign In With ${fetchDetails(item.name)?.name}`}
                    image={fetchDetails(item.name)?.image}
                    btnClass={fetchDetails(item.name)?.btnClass}
                    pClass={fetchDetails(item.name)?.pClass}
                  />
                )}
              </>
            ))
          ) : (
            <div>
              <p>No signin Options, please register</p>
            </div>
          )}

          {/* <FilledButton
            cta={() => router.push("/login")}
            text="Sign In With Facebook"
            image={require("../../assets/icons/facebookWhite.svg")}
            btnClass="bg-appBlue hover:bg-appBlueHover"
            pClass="text-white"
          />
          <FilledButton
            cta={() => router.push("/login")}
            text="Sign In With Telegram"
            image={require("../../assets/icons/telegramWhite.svg")}
            btnClass="bg-teleBlue hover:bg-teleBlueHover"
            pClass="text-white"
          />
          <FilledButton
            cta={() => router.push("/login")}
            text="Sign In With Google"
            image={require("../../assets/icons/googleBtn.svg")}
            btnClass="border bg-white hover:bg-secBg"
            pClass="text-textBody"
          />
          <FilledButton
            cta={() => router.push("/login")}
            text="Sign In With Apple"
            image={require("../../assets/icons/Apple.svg")}
            btnClass="bg-darkBtn hover:bg-darkGreyBtn"
            pClass="text-white"
          />
          <FilledButton
            cta={() => router.push("/login/email")}
            text="Sign In With Email"
            image={require("../../assets/icons/Mail.svg")}
            btnClass="border bg-white hover:bg-secBg"
            pClass="text-textBody"
          /> */}
          <p className="text-textSec text-links text-center mt-8">
            New to ChatBoomer?{" "}
            <a href="/signup" className="text-appBlue">
              Sign Up
            </a>
          </p>

          <div className="w-full mt-[112px]">
            <ul className="w-full flex items-center justify-center gap-6">
              <li>
                <a
                  href=""
                  className="text-linkMain hover:text-linkHover text-links"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-linkMain hover:text-linkHover text-links"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
