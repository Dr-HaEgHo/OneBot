import React, { FC } from "react";
// import Swiper and modules styles
import Image from "next/image";
import { ImageProps } from "@/types";
import { BoundlessIconButton } from "./Button";

const ImageComponent: FC<ImageProps> = ({ data, button }) => {
  return (
    <div className="z-[9999] w-full py-12 h-full flex flex-col justify-between">
      {/* LOGO */}
      <div className="w-[153px] z-[999]">
        <Image
          src={require("../..../../assets/icons/LogoBlack.png")}
          alt="onebot.com"
          className="w-full"
        />
      </div>

      <div className="w-full h-full  flex flex-col items-start justify-center  ">
        <div className="">
          <div className="h-[180px]">
            <Image src={data.art} alt="onebot.com" className="h-full" />
          </div>
          <div>
            <h1
              className="text-textBody text-left text-head1 font-bold clash lh-130 pt-6 mb-4"
              dangerouslySetInnerHTML={{ __html: data.title }}
            ></h1>
          </div>
          <p className="text-textSec text-links font-normal text-left">
            {data.description}
          </p>
        </div>
      </div>
      {button && (
        <BoundlessIconButton
          cta={button.cta}
          text={button.text}
          image={button.image}
          pClass="text-linkMain"
        />
      )}
    </div>
  );
};

export default ImageComponent;
