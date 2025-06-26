import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-[30vh] bg-[#EFEFEF] flex flex-row items-center justify-around font-poppins'>
        {/* Company */}
        <div className='flex flex-col gap-2'>
            <h2 className='font-semibold text-xl'>Company</h2>
            <ul className='text-xs mt-2'>
            <li>About us</li>
            <li>Contact us</li>
            <li>Career</li>
            </ul>
        </div>
    {/* Our Solutions */}
        <div className='flex flex-col gap-2'>
             <h2 className='font-semibold text-xl'>Our Solutions</h2>
            <ul className='text-xs'>
                <li>Solution-1</li>
                <li>Solution-2</li>
                <li>Solution-3</li>
                <li>Solution-4</li>
            </ul>
        </div>

        {/* News and Updates */}
        <div className='flex flex-col gap-2'>
             <h2 className='font-semibold text-xl'>News & Updates</h2>
            <ul className='text-xs'>
                <li>Corporate News</li>
                <li>Piststop</li>
                <li>Videos</li>
            </ul>
        </div>

        {/* Certifications */}
        <div className='flex flex-col gap-2'>
         <h2 className='font-semibold text-xl'>Certifications</h2>
         <div className='relative h-15 w-35'>
            <Image
            src={"/company/logo.png"}
            fill
            alt='Certificate'
            className='object-cover filter-blue'
            />

         </div>
           
        </div>
        

    </div>
  )
}

export default Footer