"use client";

import {
  CloseCircle,
  CloseSquare,
  Logout,
  MenuBoard,
  People,
  Profile,
} from "iconsax-react";
import Image from "next/image";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// import { links } from './homepage/Navbar';
import Link from "next/link";
import { GlobalContext } from "@/context/context";
// import Prompt from './Prompt';/
// import { useAppDispatch } from '@/store/hooks';
// import { logout } from '@/store/auth/authSlice';

const Sidebar = () => {
  const location = usePathname();
  const router = useRouter();
  const param = useParams();
  // const dispatch = useAppDispatch();

  const { mainSidebarOpen, setMainSidebarOpen } = useContext(GlobalContext);

  const [onlineStatus, setOnlineStatus] = useState("online");
  const [logoutOpen, setLogoutOpen] = useState(false);

  const sidebarLinks = [
    {
      id: "overview",
      image: require("@/assets/icons/sidebar/home-wh.svg"),
      imageOn: require("@/assets/icons/sidebar/home-on.svg"),
      title: "Overview",
      route: "/dashboard",
      subRoutes: "/dashboard",
      subRoutes1: `/dashboard`,
    },
    {
      id: "live-chat",
      image: require("@/assets/icons/sidebar/chat-wh.svg"),
      imageOn: require("@/assets/icons/sidebar/chat-on.svg"),
      title: "Live Chat",
      route: "/dashboard/live-chat",
      subRoutes: "/dashboard/live-chat",
      subRoutes1: `/dashboard/live-chat`,
    },
    {
      id: "automation",
      image: require("@/assets/icons/sidebar/automation-wh.svg"),
      imageOn: require("@/assets/icons/sidebar/automation-on.svg"),
      title: "Automation",
      route: "/dashboard/automation",
      subRoutes: "/dashboard/automation",
      subRoutes1: `/dashboard/automation`,
    },
    {
      id: "campaigns",
      image: require("@/assets/icons/sidebar/campaigns-wh.svg"),
      imageOn: require("@/assets/icons/sidebar/campaigns-on.svg"),
      title: "Campaigns",
      route: "/dashboard/campaigns",
      subRoutes: "/dashboard/campaigns",
      subRoutes1: `/dashboard/campaigns`,
    },
    {
      id: "insights",
      image: require("@/assets/icons/sidebar/insights-wh.svg"),
      imageOn: require("@/assets/icons/sidebar/insights-on.svg"),
      title: "Insights",
      route: "/dashboard/insights",
      subRoutes: "/dashboard/insights",
      subRoutes1: `/dashboard/insights`,
    },
    {
      id: "templates",
      image: require("@/assets/icons/sidebar/templates-wh.svg"),
      imageOn: require("@/assets/icons/sidebar/templates-on.svg"),
      title: "Templates",
      route: "/dashboard/templates",
      subRoutes: "/dashboard/templates",
      subRoutes1: `/dashboard/templates`,
    },
    {
      id: "contacts",
      image: require("@/assets/icons/sidebar/contacts-wh.svg"),
      imageOn: require("@/assets/icons/sidebar/contacts-on.svg"),
      title: "Contacts",
      route: "/dashboard/contacts",
      subRoutes: "/dashboard/contacts",
      subRoutes1: `/dashboard/contacts`,
    },
    {
      id: "settings",
      image: require("@/assets/icons/sidebar/settings-wh.svg"),
      imageOn: require("@/assets/icons/sidebar/settings-on.svg"),
      title: "Settings",
      route: "/dashboard/settings",
      subRoutes: "/dashboard/settings",
      subRoutes1: `/dashboard/settings`,
    },
  ];

  const handleLogout = () => {
    // dispatch(logout())
    router.push("/login");
  };

  const toggleSidebar = () => {
    setMainSidebarOpen(!mainSidebarOpen);
  };

  const handleCancel = () => {
    setLogoutOpen((prev: boolean) => (prev = !prev));
  };

  useEffect(() => {
    if (mainSidebarOpen) {
      console.log("issss open o");
    } else {
      console.log("iss nur open oh");
    }
  }, [mainSidebarOpen]);

  return (
    <div className="w-full h-screen bg-appGrey border-sidebarDiv flex flex-col border-r-[0.2px] relative">
      <div className="w-full h-[75px] flex items-center p-6 justify-center top-0 left-0 border-b border-divider">
        <Image
          src={require("../assets/icons/sidebar/logo-wh.svg")}
          alt="logo"
          className="w-full h-full"
        />
      </div>

      {/* DRAWER SWITCH */}
      <div
        onClick={toggleSidebar}
        className="w-7 h-7 absolute hoverActive bottom-10 cursor-pointer z-[999] -right-[14px]"
      >
        <Image
          src={require("@/assets/icons/sidebar/drawer-button.svg")}
          alt="drawer switch"
          className="w-full "
        />
      </div>




      {/* LINKS */}
      <div className="h-full w-full relative slim-scroll">
        <div className="w-full px-6 pt-6">
          <div className="w-full flex flex-col items-start gap-2">
            {sidebarLinks?.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  router.push(item.route);
                  // toggleSidebar()
                }}
                className={`w-full cursor-pointer relative transition duration-200 py-[10px] px-3 flex items-center gap-3 hover:opacity-80`}
              >
                <div className="w-5 h-5">
                  <Image src={location === item.route ||
                      location === item.subRoutes ||
                      location === item.subRoutes1
                        ? item.imageOn
                        : item.image} alt="onebot.com" className="w-full" />
                </div>
                <p
                  style={{
                    color:
                      location === item.route ||
                      location === item.subRoutes ||
                      location === item.subRoutes1
                        ? "#FF5252"
                        : "",
                  }}
                  className={`text-sm text-white font-medium `}
                >
                  {item.title && item.title}
                </p>
              </div>
            ))}
          </div>

      
        </div>
      </div>
    </div>
  );
};

export const SidebarMobile = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(GlobalContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`transition duration-500 w-full fixed right-0 bg-white z-10 p-4 border-b border-primary`}
      style={{
        top: isSidebarOpen ? "0%" : "-100%",
        height: "90vh",
      }}
    >
      <div className="w-full flex items-center justify-between">
        {/* LOGO FOMR MOBILE*/}
        <a href="/" className="w-[90px] block lg:hidden">
          {/* <Image 
                    src={require('../assets/images/logoblack.png')}
                    alt='onebot.com'
                    className='w-full'
                /> */}
        </a>
        <CloseSquare
          onClick={toggleSidebar}
          className="text-primary transition duration-200 w-10 min-w-10 h-10 cursor-pointer hoverActive"
          variant="Bold"
        />
      </div>

      {/* NAV */}
      <div className="flex h-full flex-col gap-[40px] w-full items-center justify-center">
        <ul className="flex w-[70%] max-w-[400px] flex-col items-center gap-[40px]">
          {/* {
                        links && links.map(link => (
                            <a key={link?.id} href={link?.route} className='w-full flex items-center py-2 rounded transition duration hover:bg-blackHover active:bg-blackActive'><li className='text-sm 2xl:text-base text-center text-headDesc w-full'>{link?.title}</li></a>
                        ))
                    } */}
        </ul>

        <Link href="/signup" className="">
          <button className="buttons-2 flex items-center gap-1">
            <p className="text-xs 2xl:text-sm text-white">Get Started</p>
            {/* <Image 
                            src={require('../assets/icons/circleArrow.png')}
                            alt='onebot.com'
                            className='w-[18px]'
                        /> */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
