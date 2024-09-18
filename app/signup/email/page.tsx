"use client";
import { FilledButton } from "@/components/Button";
import { InputFade, PasswordInputFade } from "@/components/Input";
import TitleHeader from "@/components/TitleHeader";
import { GlobalContext } from "@/context/context";
import { profileSchema, signupSchema } from "@/schemas";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Page = () => {
  const { setNavSignup } = useContext(GlobalContext);
  const [isTerms, setIsTerms] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [errorPH, setErrorPH] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(false);


  const onSubmit = () => {
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      validationSchema: signupSchema,
      onSubmit,
    });

    useEffect(() => {
      if (
        values.firstname !== "" &&
        values.lastname !== "" &&
        values.email !== "" &&
        phone !== "" &&
        !errors.firstname &&
        !errors.lastname &&
        errorPH === "" &&
        !errors.email 
      ) {
        setFormButtonDisabled(true);
      } else {
        setFormButtonDisabled(false);
      }
  
      if (phone === "") {
        setErrorPH("This field is required");
      } else if (phone.length < 13) {
        setErrorPH("Invalid: phone number too short");
      } else if (phone.length > 14) {
        setErrorPH("Invalid: phone number too long");
      } else {
        setErrorPH("");
      }
  
      console.log(phone);
      console.log(errorPH);
    }, [values, errors, phone, errorPH]);

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
              <div className="w-full flex flex-col input-wrap !p-0">
              <label className="labelsFade">Mobile Number</label>
                <PhoneInput
                  country={"ng"}
                  placeholder="Enter phone number"
                  value=""
                  // onChange={}
                  searchStyle={{
                    width: "100%",
                    display: "flex",
                    gap:"14px"
                  }}
                  inputStyle={{
                    width: "100%",
                    padding: "10px 70px",
                    border: '1px #eaeaea solid',
                    background: 'none',
                    fontSize: "15px"
                  }}
                  buttonStyle={{
                    border: '1px #dfdddd solid',
                    background: "none",
                    padding: '10px '
                  }}
                />
              </div>
              <PasswordInputFade
                id="password"
                value={values.password}
                touched={touched.password}
                handleChange={handleChange}
                blur={handleBlur}
                label="Create a password"
                placeholder="Enter password"
                lClass="text-base text-textBody"
                iClass="!text-[15px] textInput"
              />
              <PasswordInputFade
                id="confirmPassword"
                value={values.confirmPassword}
                touched={touched.confirmPassword}
                handleChange={handleChange}
                blur={handleBlur}
                label="Confirm password"
                placeholder="Confirm password"
                lClass="text-base text-textBody"
                iClass="!text-[15px] textInput"
              />

              <div className="w-full flex items-center gap-4">
                <div onClick={() => setIsTerms(!isTerms)}>
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
                <div onClick={() => setIsSubscribed(!isSubscribed)}>
                  {isSubscribed ? (
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
