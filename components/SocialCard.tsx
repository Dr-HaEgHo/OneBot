import { socialType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const SocialCard: FC<socialType> = ({data, btnClass}) => {
  return (
    <Link href={`/${data.to}?channel=${data.channel}`} className='w-[412px]'>
        <button className={`${btnClass} flex items-center gap-4 py-[32px] px-8 w-full rounded-md appShadow shadApp`}>
            <Image
                src={data.image}
                alt='social media logo'
                className='w-[42px] h-[42px]'
                width={1024}
                height={1024}
            />
            <div className='flex flex-col items-start'>
                <h2 className='text-head4 text-textBody font-bold text-left'>{data.text}</h2>
                <p className='text-navSmall text-textSec text-left'>{data.description}</p>
            </div>
        </button>
    </Link>
  )
}

export default SocialCard