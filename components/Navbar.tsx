'use client'
import { HambergerMenu, Menu, Notification } from 'iconsax-react'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { SearchInputFade } from './Input'
import { GlobalContext } from '@/context/context'
// import { Activity } from "@untitled-ui/icons-react";



const Navbar = () => {

    const [isNotification, setIsNotifications] = useState(true)
    const location = usePathname();
    const params = useParams();
    const [searchValue, setSearchValue] = useState('')
    const [plan, setPlan ] = useState()
     const { mainSidebarOpen, setMainSidebarOpen, headerInfo } = useContext(GlobalContext);

    const toggleSidebar = () => {
        setMainSidebarOpen(!mainSidebarOpen)
    }

    

    return (
        <div className='w-full sticky top-0 bg-pryBg border-b-[1px] border-secBorder px-10 py-2 flex items-center justify-between' >
            <div className="">
              <h1 className='text-2xl text-textBody font-bold'>{headerInfo} Overview</h1>
            </div>
            <div></div>
        </div>
    )
}

export default Navbar;