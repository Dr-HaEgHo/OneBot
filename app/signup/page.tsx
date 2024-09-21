"use client";
// import ImageSlider from '@/components/ImageSlider'
import Image from "next/image";
import { FilledButton, OutlinedButton } from "@/components/Button";
import SocialCard from "@/components/SocialCard";
import ImageComponent from "@/components/ImageSlider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/context/context";
import TitleHeader from "@/components/TitleHeader";
// import { clearSignupSuccess } from '@/store/auth/authSlice'

const cards = [
  {
    id: 1,
    text: "Instagram",
    description:
      "Supercharge your social media marketing with Instagram Automation.",
    image: require("../../assets/icons/instagram.svg"),
    to: 'signup/facebook-auth',
    channel: 'instagram'
  },
  {
    id: 2,
    text: "Facebook Messenger",
    description:
      "Create Facebook Messenger automation to keep customers happy.",
    image: require("../../assets/icons/facebook.svg"),
    to: 'signup/facebook-auth',
    channel: "facebook",
  },
  {
    id: 3,
    text: "WhatsApp",
    description:
      "Choose the most popular mobile messaging app in the world and reach 2 billion users.",
    image: require("../../assets/icons/whatsapp.svg"),
    to: 'signup/facebook-auth',
    channel: "whatsapp"
  },
  {
    id: 4,
    text: "Telegram",
    description:
      "Power up your business with Telegram automation.",
    image: require("../../assets/icons/telegram.svg"),
    to: 'signup/telegram-auth',
    channel: "telegram",
  },
  {
    id: 5,
    text: "Sign-up with Email",
    description:
      "Gain more control over your account by signing up with either your personal or company email.",
    image: require("../../assets/icons/email.svg"),
    to: 'signup/email',
    channel: "",
  },
];

export default function Signup() {

    const router = useRouter()
    const {setNavSignup, setChild} = useContext(GlobalContext);

    useEffect(() => {
      setNavSignup({
        language: "English",
        text: "SIGN IN",
        route: "/login",
        classes: "border-appOrange"
      })
      setChild(
        null
      );
    },[])

  return (
    <main className="w-full flex items-center">

      <div className="w-full h-full mx-auto  max-lg:scroll max-lg:mb-20 relative">
        <TitleHeader title="Which channel would you <br /> like to begin with?" subtitle="No need to worry; you can easily add more channels later."/>
        {/* Cards */}
        <div className="w-full max-w-[423px] mx-auto h-full flex flex-col gap-4 items-center justify-center relative">
          <FilledButton
            cta={() => router.push("/signup/facebook-auth?channel=facebook")}
            text="Sign up For Facebook"
            image={require("../../assets/icons/facebookWhite.svg")}
            btnClass="bg-appBlue hover:bg-appBlueHover"
            pClass="text-white"
          />
          <FilledButton
            cta={() => router.push("/signup/facebook-auth?channel=whatsapp")}
            text="Sign up For WhatsApp"
            image={require("../../assets/icons/wa-white.svg")}
            btnClass="bg-whatsapp hover:bg-whatsappHover"
            pClass="text-white"
          />
          <div className="w-full relative">
            <Image
              src={require('../../assets/icons/igButton.svg')}
              alt="instagram button background color"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1]"
            />
            <FilledButton
                cta={() => router.push("/signup/facebook-auth?channel=instagram")}
                text="Sign Up For Instagram"
                image={require("../../assets/icons/insta-white.svg")}
                btnClass="z-10"
                pClass="text-white"
              />
          </div>
          <FilledButton
            cta={() => router.push("/signup/telegram-auth")}
            text="Sign Up For Telegram"
            image={require("../../assets/icons/telegramWhite.svg")}
            btnClass="bg-teleBlue hover:bg-teleBlueHover"
            pClass="text-white"
          />
          <FilledButton
            cta={() => router.push("/signup/email")}
            text="Sign Up With Email"
            image={require("../../assets/icons/Mail.svg")}
            btnClass="border bg-white hover:bg-secBg"
            pClass="text-textBody"
          />
          <FilledButton
            cta={() => router.push("/signup")}
            text="Sign Up With Google"
            image={require("../../assets/icons/googleBtn.svg")}
            btnClass="border bg-white hover:bg-secBg"
            pClass="text-textBody"
          />
          <FilledButton
            cta={() => router.push("/signup")}
            text="Sign Up With Apple"
            image={require("../../assets/icons/Apple.svg")}
            btnClass="bg-darkBtn hover:bg-darkGreyBtn"
            pClass="text-white"
          />
          <p className="text-textSec text-links text-center mt-8">
            Already in ChatBoomer?{" "}
            <a href="/login" className="text-appBlue">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}