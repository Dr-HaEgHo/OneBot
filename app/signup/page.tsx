"use client";
// import ImageSlider from '@/components/ImageSlider'
import Image from "next/image";
import { OutlinedButton } from "@/components/Button";
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
    channel: "telegram",
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
          <TitleHeader title="Which channel would you <br /> like to begin with?" subtitle="No need to worry; you can easily add more channels later." />
        {/* Cards */}
        <div className="w-full grid-container max-w-[880px] mx-auto ">
          {cards?.map((item, idx) => (
            <SocialCard key={idx} data={item}/>
          ))}
        </div>
      </div>
    </main>
  );
}
