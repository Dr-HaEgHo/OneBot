"use client";
import { FilledButton } from "@/components/Button";
import { InputFade, PasswordInputFade } from "@/components/Input";
import TitleHeader from "@/components/TitleHeader";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  const { setNavSignup } = useContext(GlobalContext);
  const [isTerms, setIsTerms] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  useEffect(() => {
    setNavSignup({
      language: "English",
      text: "SIGN IN",
      route: "/login",
      classes: "border-appOrange",
    });
  }, []);

  return (
    <main className="w-full flex items-center">
      <div className="w-full h-full mx-auto  max-lg:scroll max-lg:mb-20 relative">
        <TitleHeader 
          title="Sign Up to ChatBoomer"
          subtitle="Sign Up to create an account"
        />
        {/* Cards */}
        <div className="w-full signup-container mx-auto ">
          <div className="w-[59%] mx-auto">
            <form action="" className="w-full flex flex-col gap-4">
              <InputFade
                label="Email Address"
                placeholder="Enter your email"
                type="text"
                lClass="text-base text-textBody"
                iClass="!text-[15px] textInput"
              />

              <div className="w-full flex items-center gap-4">
                <InputFade
                  label="Your First Name"
                  placeholder="Enter first name"
                  type="text"
                  lClass="text-base text-textBody"
                  iClass="!text-[15px] textInput"
                />
                <InputFade
                  label="Your Last Name"
                  placeholder="Enter last name"
                  type="text"
                  lClass="text-base text-textBody"
                  iClass="!text-[15px] textInput"
                />
              </div>
              <InputFade
                label="Mobile Number"
                placeholder="00 000 0000"
                type="number"
                lClass="text-base text-textBody"
                iClass="!text-[15px] textInput"
              />
              <PasswordInputFade
                id=""
                value={""}
                label="Create a password"
                placeholder="Enter password"
                lClass="text-base text-textBody"
                iClass="!text-[15px] textInput"
              />
              <PasswordInputFade
                id=""
                value={""}
                label="Confirm password"
                placeholder="Confirm password"
                lClass="text-base text-textBody"
                iClass="!text-[15px] textInput"
              />

              <div className="w-full flex items-center gap-4">
                <div onClick={() => setIsTerms(!isTerms)}>
                  {isTerms ? (
                    <Image
                      src={require("../../../assets/icons/unchecked.svg")}
                      alt="unchecked"
                      className="w-5 h-5 object-cover"
                    />
                  ) : (
                    <Image
                      src={require("../../../assets/icons/unchecked.svg")}
                      alt="unchecked"
                      className="w-[18px] h-[18px] object-cover"
                    />
                  )}
                </div>
                <p className="text-textSec text-linkSmall ">
                  I agree to the{" "}
                  <span>
                    <a href="#" className="text-appBlue">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-appBlue">
                      Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-appBlue">
                      Privacy Policy
                    </a>
                  </span>
                </p>
              </div>

              <div className="w-full flex items-center gap-4">
                <div onClick={() => setIsTerms(!isTerms)}>
                  {isTerms ? (
                    <Image
                      src={require("../../../assets/icons/unchecked.svg")}
                      alt="unchecked"
                      className="w-5 h-5 object-cover"
                    />
                  ) : (
                    <Image
                      src={require("../../../assets/icons/unchecked.svg")}
                      alt="unchecked"
                      className="w-[18px] h-[18px] object-cover"
                    />
                  )}
                </div>
                <p className="text-textSec text-linkSmall ">
                  I would like to receive marketing emails
                </p>
              </div>

              <FilledButton
                cta={() => {}}
                text="Sign Up"
                btnClass="bg-appOrange hover:bg-appOrangeHover"
                pClass="text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
