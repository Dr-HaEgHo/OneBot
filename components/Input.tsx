'use client'
import { dropDownProps, emailInputPropsFade, pwInputProps, searchInputProps } from '@/types'
import { ArrowDown2, ArrowUp2, Eye, EyeSlash } from 'iconsax-react';
import Image from 'next/image';
import React, { FC, useRef, useState } from 'react'


export const InputFade: FC<emailInputPropsFade> = (props) => {
    return (
        <div className='input-wrap' >
            { props.label && <label className={`labelsFade ${props.lClass}`}>{props.label && props.label}</label>}
            <input id={props.id} value={props.value} type={props?.type} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} className='input' placeholder={props.placeholder && props.placeholder} />
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}

export const PasswordInputFade: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <label className='labels'>{props.label && props.label}</label>
            <div className='password-input' >
                <input id={props.id} className='input' value={props.value} type={isOpen === true ? "text" : "password"} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    {
                        isOpen === true ? (<EyeSlash variant="Bold" size="20" />) : (<Eye variant="Bold" size="20" />)
                    }
                </div>
            </div>
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}

export const SearchInputFade: FC<searchInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <div className='password-input' >
                <input className='inputsfade min-w-[260px] 2xl:min-w-[460px] ' type='text' placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[20px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    <div className='w-5 h-5' >
                        {/* <Image 
                            src={require('../assets/icons/search.png')}
                            alt='onebot.com'
                            className='w-full'
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const DropDown: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <label className='labels'>{props.label && props.label}</label>
            <div className='password-input' >
                <input className='inputs' type={isOpen === true ? "text" : "password"} placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    {
                        isOpen === true ? (<EyeSlash variant="Bold" size="20" />) : (<Eye variant="Bold" size="20" />)
                    }
                </div>
            </div>
        </div>
    )
}

export const DropDownFade: FC<dropDownProps> = (props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    // const [value, setValue] = useState<string>('')

    const pRef = useRef<HTMLParagraphElement>(null)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    const handleChange = () => {

    }

    const handleDropItem = (name: string | undefined) => {
        props?.setValue(name as string);
        setIsOpen(prev => prev = !prev);
    }


    return (
        <div className='input-wrap' >
            <label className='labels'>{props.label && props.label}</label>
            <div className='password-input' >
                <input onChange={handleChange} value={props.value} className={`input ${props.iClass}`} type={props?.type} placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons '>
                    {
                        isOpen ? (<ArrowUp2 variant="Bold" size="20" />) : (<ArrowDown2 variant="Bold" size="20" />)
                    }
                </div>


                <div style={{
                    height: isOpen ? 150 : 0
                }} className='transition duration-[1000ms] w-full rounded-md bg-white shadow absolute z-[999] top-[120%] slim-scroll' >
                    {
                        props?.data.map((item:any, idx:number) => (
                            <p ref={pRef} key={idx} onClick={() => handleDropItem(item.name)} className='transition duration-200 cursor-pointer p-2 text-[11px] 2xl:text-xs hover:bg-sidebarTxtHover active:bg-sidebarTxtActive' >{item.name}</p>
                        ))
                    }

                    <div className='w-full h-[2rem]' />
                </div>
            </div>
        </div>
    )
}


export const TextArea: FC<emailInputPropsFade> = (props) => {
    return (
        <div className='input-wrap' >
            { props.label && <label className={`labelsFade ${props.lClass}`}>{props.label && props.label}</label>}
            <textarea id={props.id} value={props.value} disabled={props?.isDisabled} className={`input !text-links ${props.iClass}`} placeholder={props.placeholder && props.placeholder} />
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}