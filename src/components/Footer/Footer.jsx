import React from 'react'

import plusCircle from '../../../public/icons/plus-circle.svg'
import phone from '../../../public/icons/phone.svg'
import location from '../../../public/icons/location.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
        <footer className='flex flex-col w-full h-auto'>
            <div className='flex flex-col md:flex-row justify-between items-start justify-items-center bg-gray-800 py-8 px-16 gap-4'>
                <div className='flex flex-col just'>
                    <h3 className='font-tittle text-green-500'>CEAS</h3>
                    <span className='font-body font-semibold text-white'>Centro de Enseñanza Automovilística de Santander.</span>
                    <span className='font-body font-semibold text-white'>302 384 2100</span>
                    <span className='font-body font-semibold text-white'>Carrera 28 # 47-65 Barrio Palmira - Barrancabermeja - Colombia</span>
                </div>
                <div className='flex flex-col just'>
                    <h3 className='font-tittle text-green-500'>Contacto</h3>
                    <span className='font-body font-semibold text-white'>Telefono: 622 51 44</span>
                    <span className='font-body font-semibold text-white'>Telefono: 611 02 12</span>
                </div>
                <div className='flex flex-col just'>
                    <h3 className='font-tittle text-green-500'>Contacto</h3>
                    <span className='font-body font-semibold text-white'> ceasbarranca@hotmail.com </span>
                    <span className='font-body font-semibold text-white'>Celular: 302 235 03 04 </span>
                    <span className='font-body font-semibold text-white'>Celular: 301 464 83 28 </span>
                </div>
            </div>
            <div className='w-full bg-[#056635] px-16 py-4 text-white font-tittle font-semibold'>
                © Copyright 2023 CEAS - Centro de Enseñanza Automovilística de Santander.
            </div>
        </footer>
    </>
  )
}
