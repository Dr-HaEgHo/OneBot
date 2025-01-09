import Image from 'next/image'
import React, { FC } from 'react'

interface stateTypes {
  title?:string;
  subtitle?: string;
}

const States = () => {
  return (
    <div>States</div>
  )
}

export default States

export const Success:FC<stateTypes> = ({title, subtitle}) => {
  return (
    <div className="w-full h-full z-[99] bg-white absolute top-0 left-0 flex flex-col justify-center items-center text-center">
        <div className="w-20 h-20 mb-4">
          <Image
            src={require('@/assets/icons/success.png')}
            alt="successful"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-lg text-green-600 mb-1 ">{title}</p>
        <p className='text-sm'>{subtitle}</p>
        <div className='w-[150px] h-1 rounded-full overflow-hidden bg-slate-200 mt-1'>
          <div className='w-1/2 h-full rounded-full bg-green-200 line-grow'/>
        </div>
      </div>
  )
}

export const Error:FC<stateTypes> = ({title, subtitle}) => {
  return (
    <div className="w-full h-full z-[99] bg-white absolute top-0 left-0 flex flex-col justify-center items-center text-center">
        <div className="w-20 h-20 mb-4">
          <Image
            src={require('@/assets/icons/error.svg')}
            alt="successful"
            className="w-full h-full object-cover"
          />
        </div>
        <p className='text-red-500 mb-1'>{title}</p>
        <p className="text-sm">{subtitle}</p>
        <div className='w-[150px] h-1 rounded-full overflow-hidden bg-slate-200 mt-1'>
          <div className='w-1/2 h-full rounded-full bg-red-200 line-grow'/>
        </div>
      </div>
  )
}
