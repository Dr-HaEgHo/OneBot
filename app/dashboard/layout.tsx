"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { GlobalContext } from "@/context/context";
import React, { useContext } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { mainSidebarOpen } = useContext(GlobalContext);

  return (
    <div className="w-full  flex items-start bg-dashboardBg">
      <div
        style={{
          width: mainSidebarOpen === true ? 215 : 0
        }}
        className={`transition duration-300 sticky top-0 h-screen flex w-[215px] z-[9999999999999999] `}
      >
        <Sidebar />
      </div>
      <div className="flex flex-[4.5] h-full flex-col">
        {/* NAVBAR COMPONENT */}
        <div className="w-full bg-white sticky top-0 z-[999]">
          <Navbar />
        </div>

        {/* EACH PAGE ROUTED TO FROM THE FILE STRUCTURE */}
        <div className="h-full w-full scroll-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
