import React from 'react'

import facebook from '../../../public/icons/facebook.svg'
import instagram from '../../../public/icons/instagram.svg'
import phone from '../../../public/icons/phone.svg'
import email from '../../../public/icons/email.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function InfoContainer() {
  return (
    <>
        <div className='hidden md:flex w-full bg-[#056635] justify-between px-16'>
            <div className='flex justify-center items-center justify-items-center gap-4'>
                <div className='flex justify-center items-center justify-items-center text-white gap-2'>
                    <Image
                        src={phone}
                        alt="phone Icon"
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                    302 384 2100
                </div>
                <div className='flex justify-center items-center justify-items-center text-white gap-2'>
                    <Image
                        src={phone}
                        alt="phone Icon"
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                    302 384 2100
                </div>
                <div className='flex justify-center items-center justify-items-center text-white gap-2'>
                    <Image
                        src={email}
                        alt="email Icon"
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                    correo@ceas.com
                </div>
            </div>
            <div className='flex text-white justify-center items-center justify-items-center px-16 py-2 gap-4'>
                Siguenos: 
                <Link href='https://www.facebook.com/ceas.ceas.353'>
                    <Image
                        src={facebook}
                        alt="Facebook Icon"
                        width={15}
                        height={15}
                        className='cursor-pointer'
                    />
                </Link>
                <Link href='/'>
                    <Image
                        src={instagram}
                        alt="Instagram Icon"
                        width={15}
                        height={15}
                        className='cursor-pointer'
                    />
                </Link>
            </div>
        </div>
    </>
  )
}
