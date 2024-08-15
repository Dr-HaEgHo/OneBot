import { FilledButton } from "@/components/Button";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

interface props {
  setConnect: Dispatch<SetStateAction<boolean>>;
}

const GoPro: FC<props> = ({ setConnect }) => {
  const { setData, setButton } = useContext(GlobalContext);

  useEffect(() => {
    setData({
      art: require("../../../assets/icons/connTelegram.svg"),
      title:
        "Go Pro to keep </br> new number </br> connected to  </br> Whatsapp",
      description:
        "Without PRO subscription this WhatsApp number will be disconnected in 1 month.",
    });

    setButton({
      cta: () => {},
      text: "Back to region selection",
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[518px] aspect-[2.4] flex flex-col items-end bg-otherBlueSea mb-10 p-6 rounded-md overflow-hidden">
        <Image
          src={require("../../../assets/icons/laptopPro.svg")}
          alt="laptop illustration"
          className="w-[108px]"
        />
        <h3 className="text-textBody w-full font-semibold text-[22px]">
          Go PRO now to get <span className="text-otherGovBay">14 days</span>{" "}
          <br />
          for FREE. Cancel any time.
        </h3>
      </div>

      <div className="w-full max-w-[475px]">
        <div className="w-full mb-6">
          <p className="text-textBody text-links lh-150 text-left ">
            Unlock all Pro features
          </p>
          <p className="text-textBody text-links lh-150 text-left mt-1">
            Re-engage your customers with Business-Initiated Promotional
            Broadcasting
          </p>
        </div>
        <div className="w-full mb-6">
          <p className="text-textBody text-links lh-150 text-left ">
            Engage across all channels
          </p>
          <p className="text-textBody text-links lh-150 text-left mt-1">
            Reach your customers across all chat apps beyond WhatsApp at no
            extra cost
          </p>
        </div>
        <div className="w-full mb-6">
          <p className="text-textBody text-links lh-150 text-left ">
            Get more leads
          </p>
          <p className="text-textBody text-links lh-150 text-left mt-1">
            Collect and export customer data to external CRMs and Google Sheets
          </p>
        </div>
      </div>

      <div className="w-full max-w-[515px]">
        <h3 className="text-head4 font-bold text-textBody mb-5">
          Today's total: $1.1
        </h3>
        <p className="text-textBody text-links lh-150 text-left">
          Phone number: $1.1/month
        </p>
        <p className="text-textBody text-links lh-150 text-left mt-1">
          OneBot PRO: $0 for first 14 days, then $15/month*
        </p>
        <p className="text-textSec text-links text-left mt-4">
          * Depends on the exact amount of your contacts.
          <a href="#" className="text-appBlue">
            Learn More
          </a>
        </p>
      </div>

      <div className="flex items-center gap-4 justify-end w-full max-w-[515px] mt-20 ">
        <FilledButton
          cta={() => {
            setConnect(true);
          }}
          text="Go to Payment"
          btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
          pClass="text-white"
        />
      </div>
    </div>
  );
};

export default GoPro;
