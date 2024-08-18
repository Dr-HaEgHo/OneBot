"use client";
// import ImageSlider from '@/components/ImageSlider'
import Image from "next/image";
import { OutlinedButton } from "@/components/Button";
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
    to: 'facebookAuth',
    channel: 'instagram'
  },
  {
    id: 2,
    text: "Facebook Messenger",
    description:
      "Create Facebook Messenger automation to keep customers happy.",
    image: require("../../assets/icons/facebook.svg"),
    to: 'facebookAuth',
    channel: "facebook",
  },
  {
    id: 3,
    text: "WhatsApp",
    description:
      "Choose the most popular mobile messaging app in the world and reach 2 billion users.",
    image: require("../../assets/icons/whatsapp.svg"),
    to: 'facebookAuth',
    channel: "whatsapp"
  },
  {
    id: 4,
    text: "Telegram",
    description:
      "Power up your business with Telegram automation.",
    image: require("../../assets/icons/telegram.svg"),
    to: 'telegramAuth',
    channel: "telegram",
  },
];

const data = {
    art: require('../../assets/icons/Illustration.svg'), 
    title: 'What channel </br> would you like to </br> start with',
    description: "Don't worry, you can connect other channels later."
}

export default function Signup() {

    const router = useRouter()
  return (
    <main className="w-full h-fit lg:h-screen flex items-center ">
      <div className="w-[44%] h-full hidden bg-appPearLight lg:block overflow-hidden relative pl-36 pr-[70px]">
        <ImageComponent data={data}/>
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
            cta={() => router.push('/login')}
            text="SIGN IN"
            btnClass="border-appOrange"
            pClass="" 
          />
        </div>

        {/* Cards */}
        <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
          {cards?.map((item, idx) => (
            <SocialCard key={idx} data={item}/>
          ))}
        </div>
      </div>
    </main>
  );
}
