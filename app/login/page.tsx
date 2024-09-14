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
        <TitleHeader
            title="Welcome back to ChatBoomer!"
            subtitle="Sign In to ChatBoomer."
          />
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
 