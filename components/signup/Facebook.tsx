"use client";
import React, { useContext, useEffect, useState } from "react";
import { FilledButton } from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import TitleHeader from "../TitleHeader";
import dynamic from "next/dynamic";
// import { useFacebookSDK } from "@/hooks/useFacebookSdk";
import axios from "axios";
import { baseUrlProd } from "@/config";
import cogoToast from "cogo-toast";
import Load, { LoadButton } from "../Load";
import useSigninOptions from "@/hooks/useSigninOptions";
const FacebookIntegration = dynamic(() => import("@/components/FacebookAuth"), {
  ssr: false,
});


const Facebook = () => {
  const router = useRouter();
  // useFacebookSDK();

  const search = useSearchParams();
  const channel = new URLSearchParams(search).get("channel");
  const { setChild, signinOption, setSigninOption } = useContext(GlobalContext);
  const { loadingOp, data } = useSigninOptions(setOption())
  
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ disabled, setDisabled ] = useState<boolean>(false);


  const setRoute = (): string => {
    let route: string = "/";
    switch (channel) {
      case "instagram":
        route = "/signup/connect-instagram?page=1";
        break;
      case "whatsapp":
        route = "/signup/connect-whatsapp?page=1";
        break;
      case "facebook":
        route = "/signup/connect-facebook";
        break;
      default:
        route = "/signup/connect-facebook";
    }

    return route;
  };

  const setChannel = () => {
    let channelData = {
      channel: "",
      color: "",
      image: "",
      mural: "",
    };

    switch (channel) {
      case "instagram":
        channelData = {
          channel: "facebook",
          // color: 'bg-insta hover:bg-instaHover',
          color: "bg-appBlue hover:bg-appBlueHover",
          image: require("../../assets/icons/facebookWhite.svg"),
          mural: require("../../assets/images/insta-mural.svg"),
        };
        break;
      case "whatsapp":
        channelData = {
          channel: "facebook",
          // color: 'bg-whatsapp hover:bg-whatsappHover',
          color: "bg-appBlue hover:bg-appBlueHover",
          image: require("../../assets/icons/facebookWhite.svg"),
          mural: require("../../assets/images/wa-mural.svg"),
        };
        break;
      case "facebook":
        channelData = {
          channel: "facebook",
          color: "bg-appBlue hover:bg-appBlueHover",
          image: require("../../assets/icons/facebookWhite.svg"),
          mural: require("../../assets/images/meta-mural.svg"),
        };
        break;
      default:
        channelData = {
          channel: "facebook",
          color: "bg-appBlue hover:bg-appBlueHover",
          image: require("../../assets/icons/facebookWhite.svg"),
          mural: require("../../assets/images/meta-mural.svg"),
        };
    }

    return channelData;
  };

  function setOption ()  {
    let option: "ig" | "wa" | "fb" = "fb" ; 

    switch (channel) {
      case "instagram":
        option = "ig"
        break;
      case "whatsapp":
        option = "wa"
        break;
      case "facebook":
        option = "fb"
        break;
    }

    return option;
  };

  // const handleLogin = async() => {
  //   window.FB.init({
  //     appId: "3435930283316360",
  //     version:"v15.1"
  //   })

  //   if (window.FB) {
  //     window.FB.login(
  //       (response) => {
  //         if (response.status === "connected") {
  //           console.log("Logged in:", response.authResponse);
  //         } else {
  //           console.log("User cancelled login or did not fully authorize.");
  //         }
  //       },
  //       { scope: "public_profile,email" }
  //     );
  //   } else {
  //     console.error("Facebook SDK not loaded yet.");
  //   }
  // };

  const handleOpenNewTab = (url:string) => {
    // const fullUrl = `${window.location.origin}${url}`;
    window.open(url, '_blank'); // Open the route in a new tab
  };

  console.log("the id needed", signinOption)


  // const getSigninOptions = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await axios.get(`${baseUrlProd}/configs/signin-options`);

  //     if (response && response.status === 200) {
  //       console.log("axios response", response?.data.data[0].id);
  //       setSigninOption(response?.data.data[0].id)
  //       setLoading(false)
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     cogoToast.error('Error getting sign in details, try again')
  //     setLoading(false)
  //   }
  // };

  const handleLogin = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${baseUrlProd}/auth/${data}/auth-request?redirect_url=https://onebot.tzkarcreative.com`
      );

      if (response && response.status === 200) {
        // console.log("axios response", response?.data.data.url);
        const url = await response?.data.data.url
        handleOpenNewTab(url);
        setLoading(false)
      }
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };

  useEffect(() => {

    setChild(
      <div className="w-full h-full">
        <Image
          src={setChannel().mural}
          alt="meta business mural"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }, [channel]);

  useEffect(() => {
    if(signinOption === null ){
      setDisabled(true);
    }else{
      setDisabled(false);
    }
  }, [signinOption]);

  // useEffect(() => {
  //   getSigninOptions();
  // },[])

  return (
    <div>
      <TitleHeader
        title="Sign Up to ChatBoomer"
        subtitle="Sign Up to create an account"
      />
      <p className="text-textBody w-full mx-auto text-links lh-150 text-center mb-8">
        <span className="font-bold">ChatBoomer</span> needs specific permissions
        to create automations <br />
        for Messenger, Instagram, and WhatsApp. Click the button to allow
        access.
      </p>
      {/* <FacebookIntegration/> */}
      {
        loading || loadingOp ? (
          <FilledButton
            text={``}
            btnClass={setChannel().color}
            pClass="text-white"
            disabled={true}
          >
            <LoadButton/>
          </FilledButton>
        ) : (
          <FilledButton
            cta={() => {
              handleLogin();
              // router.push(setRoute());
            }}
            text={`Continue with ${setChannel().channel}`}
            image={setChannel().image}
            btnClass={setChannel().color}
            pClass="text-white"
            disabled={loading || loadingOp || disabled}
          />

        )
      }
      <div>
        <p className="text-textSec text-linkSmall text-center mt-8">
          By signing up, you agree to ChatBoomer's
          <br />
          <span>
            <a href="#" className="text-appBlue">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-appBlue">
              Privacy Policy
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Facebook;
