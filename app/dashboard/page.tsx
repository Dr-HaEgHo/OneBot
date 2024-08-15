"use client";
import SomethingWentWrong from "@/components/SomethingWentWrong";
import { getLatestCourses, getOngoingCourses } from "@/store/courses/courseAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const page = () => {

  return (
    <div className="w-full h-full bg-white ">
      <div className="dash-container">
        <div className="w-full pt-[26px] 2xl:pt-[34px] ">
         
       
      </div>
      </div>
    </div>
  );
};

export default page;
