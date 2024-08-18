"use client";
// import ImageSlider from '@/components/ImageSlider'
import Image from "next/image";
import { FilledButton, OutlinedButton } from "@/components/Button";
import SocialCard from "@/components/SocialCard";
import ImageComponent from "@/components/ImageSlider";
import { useRouter } from "next/navigation";
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
  return (
    <main className="w-full h-fit lg:h-screen flex items-center ">
      <div className="w-[44%] h-full hidden bg-appPearLight lg:block overflow-hidden relative pl-36 pr-[70px]">
        <ImageComponent data={data} />
      </div>

      <div className="w-full lg:w-[56%] h-full mx-auto bg-white max-lg:scroll max-lg:mb-20 ">
        <div className="absolute top-0 right-0 flex p-8 items-center gap-8">
          <div className="flex items-center gap-2">
            <Image
              src={require("../../assets/icons/language.svg")}
              alt="language"
              className="h-6 w-6"
              width={1024}
              height={1024}
            />
            <p className="text-textBody text-links">English</p>
          </div>
          <OutlinedButton
            cta={() => router.push("/login")}
            text="SIGN IN"
            btnClass="border-appOrange"
            pClass=""
          />
        </div>

        {/* Cards */}
        <div className="w-full max-w-[518px] mx-auto h-full flex flex-col gap-4 items-center justify-center relative">
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
                text="Sign In With Facebook"
                image={require("../../assets/icons/Apple.svg")}
                btnClass="bg-darkBtn hover:bg-darkGreyBtn"
                pClass="text-white"
            />
            <p className="text-textSec text-links text-center mt-8">
            New to OneBot? {" "}
            <a href="/signup" className="text-appBlue">
                Sign Up
            </a>
            </p>


            <div className='w-full absolute left-1/2 transform -translate-x-1/2 bottom-[10%] '>
                <ul className='w-full flex items-center justify-center gap-6'>
                    <li><a href="" className='text-linkMain hover:text-linkHover text-links'>Terms of Service</a></li>
                    <li><a href="" className='text-linkMain hover:text-linkHover text-links'>Privacy Policy</a></li>
                </ul>
            </div>

            
        </div>

      </div>
    </main>
  );
}
