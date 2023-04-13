import Image from 'next/image'
import React from 'react'

export default function CardComponent(props) {
  
  const { tittle, descripcion, image, orderText, orderImage } = props

  return (
    <div className='md:px-4 md:py-2 px-5 py-5 bg-[#056635] rounded-md flex flex-col md:flex-row justify-center items-center gap-5 justify-items-center'>
      <Image
        src={image}
        alt="LogoCeas"
        className={`cursor-pointer w-[250px] h-auto order-1 ${ orderImage }`}
      />
      <div className={`order-2 ${ orderText } flex flex-col justify-items-center justify-center items-center text-justify`}>
        <h3 className='font-tittle text-white text-2xl'> { tittle } </h3>
        <span className='font-body font-semibold text-white'> { descripcion } </span>
      </div>
    </div>
  )
}
