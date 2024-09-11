"use client";
// import ImageSlider from '@/components/ImageSlider'
import Image from "next/image";
import { FilledButton, OutlinedButton } from "@/components/Button";
import SocialCard from "@/components/SocialCard";
import ImageComponent from "@/components/ImageSlider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/context/context";
// import { clearSignupSuccess } from '@/store/auth/authSlice'

const cards = [
  {
    id: 1,
    text: "Instagram",
    description:
      "Supercharge your social media marketing with Instagram Automation.",
    image: require("../../assets/icons/instagram.svg"),
    to: "facebookAuth",
    channel: "instagram",
  },
  {
    id: 2,
    text: "Facebook Messenger",
    description:
      "Create Facebook Messenger automation to keep customers happy.",
    image: require("../../assets/icons/facebook.svg"),
    to: "facebookAuth",
    channel: "facebook",
  },
  {
    id: 3,
    text: "WhatsApp",
    description:
      "Choose the most popular mobile messaging app in the world and reach 2 billion users.",
    image: require("../../assets/icons/whatsapp.svg"),
    to: "facebookAuth",
    channel: "whatsapp",
  },
  {
    id: 4,
    text: "Telegram",
    description: "Power up your business with Telegram automation.",
    image: require("../../assets/icons/telegram.svg"),
    to: "telegramAuth",
    channel: "telegram",
  },
];

const data = {
  art: require("../../assets/icons/loginArt.svg"),
  title: "Welcome back to </br> OneBot!",
  description: "Sign In to OneBot.",
};

export default function Signin() {
  const router = useRouter();
  const { setNavSignup } = useContext(GlobalContext)

  useEffect(() => {
    setNavSignup({
      language: "English",
      text: "GET STARTED FREE",
      route: '/signup',
      classes: 'border-appOrange'
    })
  }, [])

  return (
    <main className="w-full h-fit lg:h-[86vh] flex items-center ">
      <div className="signup-container">
        <div className="w-full mx-auto flex flex-col gap-2 my-9">
          <h1 className="text-textBody font-bold text-[44px] text-center lh-130 tracking-[0%]">
            Welcome back to ChatBoomer!
          </h1>
          <p className="text-textSec text-[15px] text-center tracking-[0.2px]">
            Sign In to ChatBoomer.
          </p>
        </div>
        {/* Cards */}
        <div className="w-full max-w-[423px] mx-auto h-full flex flex-col gap-4 items-center justify-center relative">
          <FilledButton
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
          />
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
 