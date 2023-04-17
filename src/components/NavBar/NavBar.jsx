import React from 'react'

import plusCircle from '../../../public/icons/plus-circle.svg'
import LogoCeas from '../../../public/img/LogoCeas.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <>
        <nav className='w-full h-auto px-16 py-4 flex justify-between border-b border-black'>
            <div className='flex justify-center items-center justify-items-center'>
                <Image
                    src={LogoCeas}
                    alt="LogoCeas"
                    width={647}
                    height={147}
                    className='cursor-pointer w-auto h-[50px]'
                />
            </div>
            <div className='hidden md:flex justify-center items-center justify-items-center gap-3'>
                <Link href='/' className='px-2 py-2 hover:bg-[#056635] hover:text-white rounded-md font-semibold '>
                    Inicio
                </Link>
                <Link href='/about-us' className='px-2 py-2 hover:bg-[#056635] hover:text-white rounded-md font-semibold '>
                    Nosotros
                </Link>
                <Link href='/services' className='px-2 py-2 hover:bg-[#056635] hover:text-white rounded-md font-semibold '>
                    Servicios
                </Link>
            </div>
        </nav>
    </>
  )
}
