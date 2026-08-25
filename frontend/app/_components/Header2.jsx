"use client"
import React from 'react'
import Image from 'next/image'
function Header2() {
  
  return (
    <div className ='py-2 px-5 flex justify-between items-center border shadow-sm'>
        <div className='flex flex-col item-center gap-1'>
             <Image src={'./logo.svg'}
               alt='logo'
               width={55}
               height={60} />
             <h1 className='font-bold text-2xl '>expense tracker</h1>
        </div>
    
    </div>
   
  )
}

export default Header2