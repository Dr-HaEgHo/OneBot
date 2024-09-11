'use client'
import { dropDownProps, emailInputPropsFade, pwInputProps, searchInputProps } from '@/types'
import { ArrowDown2, ArrowUp2, Eye, EyeSlash } from 'iconsax-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react'

export const DropDownFade = dynamic(() => import('../components/dynamic/DropFade'), {
    ssr : false,
 });


export const InputFade: FC<emailInputPropsFade> = (props) => {
    return (
        <div className='input-wrap' >
            { props.label && <label className={`labelsFade ${props.lClass}`}>{props.label && props.label}</label>}
            <input id={props.id} value={props.value} type={props?.type} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} className={`input ${props.iClass}`} placeholder={props.placeholder && props.placeholder} />
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
            <label className={`labels ${props.lClass}`}>{props.label && props.label}</label>
            <div className={`password-input`} >
                <input id={props.id} className={`input ${props.iClass}`} value={props.value} type={isOpen === true ? "text" : "password"} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} placeholder={props.placeholder && props.placeholder} />
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



export const TextArea: FC<emailInputPropsFade> = (props) => {
    return (
        <div className='input-wrap' >
            { props.label && <label className={`labelsFade ${props.lClass}`}>{props.label && props.label}</label>}
            <textarea id={props.id} value={props.value} disabled={props?.isDisabled} className={`input !text-links ${props.iClass}`} placeholder={props.placeholder && props.placeholder} />
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}