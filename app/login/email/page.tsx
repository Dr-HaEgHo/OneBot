"use client";
import { BoundlessIconButton, FilledButton } from "@/components/Button";
import { InputFade, PasswordInputFade } from "@/components/Input";
import TitleHeader from "@/components/TitleHeader";
import { GlobalContext } from "@/context/context";
import { loginSchema } from "@/schemas";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {

  const router = useRouter(); 

  const { setNavSignup } = useContext(GlobalContext);
  const [isTerms, setIsTerms] = useState<boolean>(false);
  const [errorPH, setErrorPH] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(false);


  const onSubmit = () => {
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

    useEffect(() => {
      if (
        values.email !== "" &&
        values.password !== "" &&
        !errors.email &&
        !errors.password
      ) {
        setFormButtonDisabled(true);
      } else {
        setFormButtonDisabled(false);
      }
  
    }, [values, errors]);

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
      <div className="w-full h-full lg:h-[72vh] mx-auto flex flex-col items-center justify-center max-lg:scroll max-lg:mb-20 relative">
        <TitleHeader title="Sign In to ChatBoomer"/>
        {/* Cards */}
        <div className="w-full signup-container mx-auto ">
          <div className="w-[59%] max-w-[518px] mx-auto">
            <form action="" className="w-full flex flex-col gap-4">
              <InputFade
                label="Email Address"
                placeholder="Enter your email"
                type="text"
                lClass="text-base text-textBody"
                iClass="!text-[15px] textInput"
              />
         
              <PasswordInputFade
                id="password"
                value={values.password}
                handleChange={handleChange}
                blur={handleBlur}
                label="Password"
                placeholder="Enter password"
                lClass="text-base text-textBody"
                iClass="!text-[15px] textInput"
              />

              <div className="w-full flex items-center gap-4">
                <div className="cursor-pointer" onClick={() => setIsTerms(!isTerms)}>
                  {isTerms ? (
                    <Image
                      src={require("../../../assets/icons/check.svg")}
                      alt="unchecked"
                      className="w-5 h-5 object-cover"
                    />
                  ) : (
                    <Image
                      src={require("../../../assets/icons/unchecked.svg")}
                      alt="unchecked"
                      className="w-5 h-5 object-cover"
                    />
                  )}
                </div>
                <p className="text-textSec text-linkSmall ">
                  Remember me
                </p>
              </div>

              <FilledButton
                cta={() => {}}
                text="Sign In"
                btnClass="mt-8 bg-appOrange hover:bg-appOrangeHover"
                pClass="text-white"
              />

            </form>
            <FilledButton
                  cta={() => {
                    router.push('/');
                  }}
                  text="Forgot password"
                  btnClass="mt-4 !w-fit"
                  pClass="text-textBody underline whitespace-nowrap"
                />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
