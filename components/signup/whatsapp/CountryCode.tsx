import { FilledButton } from "@/components/Button";
import { DropDownFade, InputFade } from "@/components/Input";
import Modal from "@/components/Modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import PinInput from "react-pin-input";

const codes = [
  { id: 1, name: "+1" },
  { id: 2, name: "+2" },
  { id: 3, name: "+3" },
  { id: 4, name: "+4" },
  { id: 5, name: "+5" },
  { id: 6, name: "+6" },
  { id: 7, name: "+7" },
  { id: 8, name: "+8" },
];

interface modalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

const CountryCode:FC<modalProps> = ({open, setOpen}) => {
  const router = useRouter();
  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);

  let pinInputRef: PinInput | null | void;

  // const handleSubmit = () => {
  //   pinInputRef?.clear(), router.push("");
  // };

  return (
    <div className="w-full flex flex-col items-start">
      

      <h3 className="text-head5 text-textBody font-bold ">
        Select the country code of WhatsApp number
      </h3>
      <p className="text-textBody text-links lh-150 text-left mt-2">
        Every Manychat number works internationally. If your country isn't on
        the list below, you can select another number. We recommend using a USA
        number.
      </p>
      <p className="text-textBody text-links lh-150 text-left my-">
        You can start with the Manychat number to test the WhatsApp integration
        and then change it to your number later.
      </p>

      <DropDownFade
        type="text"
        setValue={() => {}}
        label="Choose country to see stats"
        placeholder="All Countries"
        data={codes}
      />

      <FilledButton
        cta={() => {setOpen(true)}}
        text="Get Number"
        btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6 mt-16"
        pClass="text-white"
      />
    </div>
  );
};

export default CountryCode;
