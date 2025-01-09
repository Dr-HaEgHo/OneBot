'use client'
// import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface absoTypes {
  title?: string;
  subtitle?: string;
}

const Load = () => {

  // const [ dots, setDots] = useState<number>(0);

  useEffect(() => {
  }, [])


  
  return (
    <main className="fixed fade z-40 top-0 left-0 w-full h-screen bg-blackLoading flex items-center justify-center ">
      <div className="flex flex-col gap-4 items-center justify-center z-50">
        <div className="flex items-center flex-col gap-1">
        <div className="spinning-logo rounded-full flex items-center justify-center text-white font-bold">
            {/* <Image 
                src={require('../assets/icons/logowhite.svg')}
                alt="logo"
                className="w-12 h-12"
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Load;


export const LoadButton = () => {

  const [ dots, setDots] = useState<number>(0);

  useEffect(() => {
  }, [])

  return (
    <main className="fade z-40 top-0 right-left w-full  flex items-center justify-center ">
      <div className="flex flex-col gap-4 items-center justify-center z-50">
        <div className="flex items-center flex-col gap-1">
          <div className="spinning-logo rounded-full flex items-center justify-center text-white font-bold">
            <div className="h-8 w-8 border-4 border-dashed rounded-full opacity-70 "></div>
          </div>
        </div>
      </div>
    </main>
  );
};


export const LoadSmallButton = () => {

  const [ dots, setDots] = useState<number>(0);

  useEffect(() => {
  }, [])


  
  return (
    <main className="fade z-40 top-0 right-left w-full  flex items-center justify-center ">
      <div className="flex flex-col gap-4 items-center justify-center z-50">
        <div className="flex items-center flex-col gap-1">
          <div className="spinning-logo rounded-full flex items-center justify-center text-white font-bold">
            {/* <Image 
                src={require('../assets/images/logo.png')}
                alt="logo"
                className="w-4 h-4"
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
};


export const SpinLoader = () => {
  return (
    <div className="w-full aspect-square rounded-full border-l-[1px] border-t-[1px] border-b-[1px] border-dismissLight spin"></div>
  )
}


export const AbsoLoad: FC<absoTypes> = ({title, subtitle}) => {
  return (
    <div className="w-full h-full z-[99] bg-white absolute top-0 left-0 flex flex-col justify-center items-center gap-4 text-center">
        <LoadButton/>
        <p className="text-sm text-grey500">{title}</p>
      </div>
  )
}