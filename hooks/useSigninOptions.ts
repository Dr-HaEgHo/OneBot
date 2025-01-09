"use client";
import { baseUrlProd } from "@/config";
import { GlobalContext } from "@/context/context";
import axios from "axios";
import cogoToast from "cogo-toast";
import React, { useContext, useEffect, useState } from "react";

const useSigninOptions = (authOption: "fb" | "google" | "mail" | "wa" | "ig" ) => {
  const [loadingOp, setLoadingOp] = useState<boolean>(false);
  const { setSigninOption } = useContext(GlobalContext);
  const [data, setData] = useState<number | null>(null);
  const [fullData, setFullData] = useState<any | null>(null);

  const setAuthOption = (): number => {
    let index: number;
    switch (authOption) {
      case "fb":
        index = 0;
        break;
      case "google":
        index = 1;
        break;
      case "mail":
        index = 2;
        break;
      case "ig":
        index = 3;
        break;
      case "wa":
        index = 4;
        break;
    }

    return index;
  };

  const getSigninOptions = async () => {
    setLoadingOp(true);
    try {
      const response = await axios.get(`${baseUrlProd}/configs/signin-options`);

      if (response && response.status === 200) {
        console.log("axios response", response?.data.data[0].id);
        setSigninOption(response?.data.data[setAuthOption()].id);
        setData(response?.data.data[setAuthOption()].id);
        setFullData(response?.data.data)
        setLoadingOp(false);
      }
    } catch (err) {
      console.log(err);
      cogoToast.error("Error getting sign in details, try again");
      setLoadingOp(false);
    }
  };

  useEffect(() => {
    if (!authOption) {
      return;
    }
    getSigninOptions();
  }, []);

  return { loadingOp, data, fullData };
};

export default useSigninOptions;
