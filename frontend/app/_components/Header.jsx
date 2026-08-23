import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Header() {
  return (
    <div className ='py-2 px-5 flex justify-between items-center border shadow-sm'>
        <div className='flex flex-col item-center gap-1'>
             <Image src={'./logo.svg'}
               alt='logo'
               width={55}
               height={60} />
             <h1 className='font-bold text-2xl '>expense tracker</h1>
        </div>
        <Button className='py-6 px-8 text-lg border-2 cursor-pointer  rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:bg-indigo-500 hover:text-white transition-all duration-300'>
             Get Started</Button>

    </div>
   
  )
}

export default Header