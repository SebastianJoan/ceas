import React from 'react'
import whatsApp from '../../../public/icons/whatsapp.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function FloatingActionButton() {
  return (
    <Link href='https://api.whatsapp.com/send?phone=%2B573023842100&data=AWDhWy7XsHGzFqe2srOG9n2VwjP-H1PgIPnBpfrCIX6GTf0kP6xlJ6iE8Pof22IlUwL21bm3PpV6FBMYX7MywRc3FWYgmadAGqtdsp7QTgiBKaItm8RoGaHbynxg32aiAdQeQ5tCzRyG7QzmeXj0yRVsFp7h2aszKXyh8_zuqGgEirR47iX916b2n2msk7SY5E7DKyLu1u9jEDnwdrVAML8J4oMT7tBIhxCiLL5rKPPd1HVCM3vgqHz9iFZIHVrQCraNVSEAvoL1YK6oQDUa9EynhzSvXeUJPG4u2S07XCY0miN2fJA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3TKLvjiByNeNPnQ8GFHYmWNJfa1IHdOLMlUBnRCjjJ-ofIV9cwtNGYycs' className='w-full md:w-[70px] h-[70px] md:py-2 md:px-2 md:rounded-full bg-green-500 hover:bg-green-800 hover:transition-colors fixed md:top-[85%] bottom-0 md:right-4 md:cursor-pointer flex justify-center items-center justify-items-center gap-5'>
      <Image
        src={whatsApp}
        alt="whatsApp Icon"
        width={70}
        height={70}
        className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]'
      />
      <span className='md:hidden font-tittle font-semibold text-white'>302 384 2100</span>
    </Link>
  )
}
