"use client";
import { FilledButton } from "@/components/Button";
import { DropDown, DropDownFade, InputFade } from "@/components/Input";
import Modal from "@/components/Modal";
import Congrats from "@/components/signup/Congrats";
import CountryCode from "@/components/signup/whatsapp/CountryCode";
import GoPro from "@/components/signup/whatsapp/GoPro";
import GuideWA from "@/components/signup/whatsapp/GuideWA";
import LinkInfo from "@/components/signup/whatsapp/LinkInfo";
import TitleHeader from "@/components/TitleHeader";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import PinInput from "react-pin-input";

const Page = () => {
  const router = useRouter();
  const [hasAccounts, setHasAccount] = useState(false);
  const { button, setButton, setData, setChild } = useContext(GlobalContext);
  const [hasConnected, setHasConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);

  let pinInputRef: PinInput | null | void;

  const search = useSearchParams();
  const queryPage = new URLSearchParams(search).get("page");

  const action = () => {
    setHasConnected(false)
    router.push('/login')
  };

  const updateButton = () => {
    setButton({
      cta: () => { 
        router.push("/signup");
      },
      text: "Choose another channel",
    });
  };

  useEffect(() => {
    updateButton();
  }, []);

  useEffect(() => {
    if (queryPage === '4') {
      setButton({
        cta: () => {},
        text: "Back to region selection",
      });
    }
    
    setChild(
      <div className="w-full h-full">
        <Image
          src={require("../../../assets/images/whatsapp-mural.svg")}
          alt="meta business mural"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }, []);

  return (
    <div>
      {hasConnected ? (
        <Congrats
          action={action}
          image={require("../../../assets/icons/whatsapp.svg")}
          text="Congratulations, <br /> Your WhatsApp account is connected!"
        />
      ) : (<Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="w-full py-2 border-b flex items-center justify-center border-secBorder">
          <h3 className="text-textBody text-head4 font-bold">
            Verify your email address
          </h3>
        </div>
        <div className="w-full h-full px-8 py-14">
          {/* GREY CARD */}
          <div className="bg-athensGray rounded-md p-4">
            <p className="text-textBody text-links lh-150 text-center mb-4">
              We will send you an email with a confirmation link. Please click
              the link to complete the verification process.
            </p>
            <div className="w-full flex items-center justify-center">
              <PinInput
                length={6}
                initialValue=""
                secret
                secretDelay={100}
                onChange={(value, index) => {
                  setValues(value.split(""));
                }}
                type="numeric"
                inputMode="number"
                style={{
                  gap: 8,
                }}
                inputStyle={{
                  borderColor: "#eaeaea",
                  backgroundColor: "#fff",
                  borderRadius: 4,
                  minWidth: 8,
                  width: 44,
                  height: 56,
                }}
                inputFocusStyle={{ borderColor: "#2A66AE" }}
                onComplete={(value, index) => {
                  setFormButtonDisabled(true);
                }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                // ref={(n) => (pinInputRef = n)}
              />
            </div>

            <div>
              <p className="text-textSec text-linkSmall text-center mt-6">
                If you haven't received your email, check the spam folder.
                <br />
                <span>
                  <a href="#" className="text-appBlue">
                    Resend Code
                  </a>
                </span>
              </p>
              <p className="text-textSec text-linkSmall text-center mt-4">
                You can change email address above. If you are experiencing
                technical difficulties,
                <br />
                <span>
                  please submit a{" "}
                  <a href="#" className="text-appBlue">
                    support ticket using this form.
                  </a>
                </span>
              </p>
            </div>

            <div className="w-[51%] mx-auto flex items-center gap-[10px] mt-4">
              <InputFade type="email" placeholder="Enter your email" value="" />
              <FilledButton
                cta={() => {router.push('?page=3')}}
                text="Save"
                btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
                pClass="text-white text-links"
              />
            </div>
          </div>
          {/* POINTS */}
          <div className="w-full flex flex-col gap-6 mt-6">
            <div className="flex items-start gap-4">
              <Image
                src={require("../../../assets/icons/redCheckCircle.svg")}
                alt="check mark"
                className="w-7 h-7 "
              />
              <p className="text-textSec text-linkSmall text-left">
                Never miss account activity alerts
                <br />
                Get important notifications and alerts that you affect your
                account.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src={require("../../../assets/icons/redCheckCircle.svg")}
                alt="check mark"
                className="w-7 h-7 "
              />
              <p className="text-textSec text-linkSmall text-left">
                Receive important updates
                <br />
                Stay up-to-date with the latest product news and best marketing
                strategies to leverage the power of your OneBot account.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src={require("../../../assets/icons/redCheckCircle.svg")}
                alt="check mark"
                className="w-7 h-7 "
              />
              <p className="text-textSec text-linkSmall text-left">
                Access new and powerful templates
                <br />
                Use your OneBot account to the maximum with free templates to
                build profitable campaigns.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src={require("../../../assets/icons/redCheckCircle.svg")}
                alt="check mark"
                className="w-7 h-7 "
              />
              <p className="text-textSec text-linkSmall text-left">
                Keep learning
                <br />
                Receive free marketing content and expert advice that will work
                for your business.
              </p>
            </div>
          </div>
        </div>
      </Modal>)}



      <div className="signup-container">
        <div className="w-full mx-auto flex flex-col gap-2 mb-9">
          <TitleHeader
            title={ queryPage === "4" ? 'Go Pro to keep new number <br /> connected to WhatsApp' : 'Welcome to the <br /> WhatsApp Channel' }
            subtitle={ queryPage === "4" ? 'Without PRO subscription this WhatsApp number will be disconnected in 1 month.' : 'Connect your WhatsApp channel through Facebook and start automating your business today.' }
          />
        </div>
        <div className="w-3/5 mx-auto">

          {queryPage === "1" && <GuideWA />}

          {queryPage === "2" && <CountryCode open={isModalOpen} setOpen={setIsModalOpen} />}

          {queryPage === "3" && <LinkInfo setOpen={setIsModalOpen} />}

          {queryPage === "4" && <GoPro setConnect={setHasConnected}/>}

        </div>
      </div>
    </div>
  );
};

export default Page;