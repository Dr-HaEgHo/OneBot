"use client";
import { AbsoLoad } from "@/components/Load";
import { Error, Success } from "@/components/States";
import { baseUrlProd } from "@/config";
import { GlobalContext } from "@/context/context";
import useSigninOptions from "@/hooks/useSigninOptions";
import axios from "axios";
import cogoToast from "cogo-toast";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const { setToken, setUserDetails, signupSuccess, setSignupSuccess } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(false);
  const { loadingOp, data } = useSigninOptions("google");

  const handleSignUp = async () => {
    if (!code && !state && data === null) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${baseUrlProd}/auth/${data}/signup`, {
        code: code,
        state: state,
      });

      if (response && response.status === 200) {
        console.log("the response", response?.data.data);
        setUserDetails(response?.data.data);
        setToken(response?.data.data.access_token);
        setSignupSuccess(true);
        setLoading(false);
      }
    } catch (err: any) {
      console.log(err);
      setSignupSuccess(false);
      cogoToast.error(err.response.data.message)
      setLoading(false);
    }
  };

  const search = useSearchParams();
  console.log("the option : ", data);

  const code = new URLSearchParams(search).get("code");
  const state = new URLSearchParams(search).get("state");

  useEffect(() => {
    if (signupSuccess === true) {
      setTimeout(() => {
        router.push(`/dashboard`);
        setSignupSuccess(null);
      }, 3000);
    } else if (signupSuccess === false) {
      setTimeout(() => {
        router.push(`/signup`);
        setSignupSuccess(null);
      }, 3000);
    }
  }, [signupSuccess]);

  useEffect(() => {
    if (data && code && state) {
      handleSignUp();
    } else {
      return;
    }
  }, [data, code, state]);

  return (
    <div className="w-full h-full ">
      {!loading && <AbsoLoad title="Signing up..." />}
      {signupSuccess === true && (
        <Success title="Successful" subtitle="redirecting to dashboard..." />
      )}
      {signupSuccess === false && (
        <Error title="Error" subtitle="Counldn't sign you up at this moment" />
      )}
    </div>
  );
};

export default Page;
