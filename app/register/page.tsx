"use client";
import { FilledButton } from "@/components/Button";
import { DropDownFade, TextArea } from "@/components/Input";
import { GlobalContext } from "@/context/context";
import React, { ChangeEvent, useContext, useState } from "react";

const codes = [
  { id: 1, name: "Business" },
  { id: 2, name: "Marketing Agency" },
  { id: 3, name: "Solopreneur / Freelancer" },
  { id: 4, name: "Other" },
];

const sizes = [
  {id: 1, name:'1 - 10'},
  {id: 2, name:'11 - 50'},
  {id: 3, name:'51 - 100'},
  {id: 4, name:'101 - 1000'},
  {id: 5, name:'above 1000'}
]

const Page = () => {

  const { companyType, setCompanyType } = useContext(GlobalContext)

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <div className="w-full flex mt-12 z-50">
        <DropDownFade
          type="text"
          value={companyType}
          setValue={setCompanyType}
          label="What type of company do you work for?"
          placeholder="Select your company type"
          data={codes}
        />
      </div>

      {companyType === "Business" && (
        <div className="w-full flex flex-col gap-8 mt-8 ">
          <div className="w-full z-30">
            <DropDownFade
              type="text"
              // value={companyType}
              setValue={() => {}}
              label="What team do you work for?"
              placeholder="Select your option"
              data={codes}
            />
          </div>
          <DropDownFade
            type="text"
            setValue={() => {}}
            label="What is the size of your company?"
            placeholder="Select your option"
            data={codes}
          />
        </div>
      )}

      {companyType === "Marketing Agency" && (
        <div className="w-full flex flex-col gap-8 mt-8">
          <div className="w-full z-30">
          <DropDownFade
            type="text"
            // value={companyType}
            setValue={() => {}}
            label="What team do you work for?"
            placeholder="Select your option"
            data={codes}
          />
          </div>
          <DropDownFade
            type="text"
            setValue={() => {}}
            label="What team do you work for?"
            placeholder="Select your option"
            data={codes}
          />
        </div>
      )}
      
      {companyType === "Other" && (
        <div className="w-full flex flex-col gap-8 mt-8">
          <div className="w-full z-30">
          <TextArea
            type="text"
            // value={companyType}
            setValue={() => {}}
            placeholder="Enter text"
            iClass="w-full aspect-[6]"
          />
          </div>
          <div className="w-full z-30">
          <TextArea
            type="text"
            // value={companyType}
            setValue={() => {}}
            label="What type of business do you do?"
            placeholder="Enter your business type"
            iClass="w-full aspect-[6]"
          />
          </div>
          <div className="w-full z-30">
          <TextArea
            type="text"
            // value={companyType}
            setValue={() => {}}
            label="What is your role?"
            placeholder="Enter your role"
            iClass="w-full aspect-[6]"
          />
          </div>
          <DropDownFade
            type="text"
            setValue={() => {}}
            label="What is the size of your organization?"
            placeholder="Select your option"
            data={sizes}
            iClass="!text-links"
          />
        </div>
      )}

      <div className="absolute bottom-[52px] right-0 flex items-center gap-2 mt-6">
        <FilledButton
          cta={() => {}}
          text="Next"
          btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
          pClass="text-white"
        />
      </div>
    </div>
  );
};

export default Page;
