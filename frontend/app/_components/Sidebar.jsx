import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
LayoutDashboard,
  Receipt,
  User,
  Settings
} from 'lucide-react'
function sidebar() {
    const links=[{
        name:"dashboard",
        href:"/dashboard",
        icon:<LayoutDashboard size={20}/>
    },{
        name:"expenses",
        href:"/expenses",
        icon:<Receipt size={20}/>
    },{
        name:"profile",
        href:"/profile",
        icon:<User size={20}/>
    },{
        name:"settings",
        href:"/settings",
        icon:<Settings size={20}/>
    }]
  return (
    <section className='flex min-h-screen w-64 flex-col border-r border-gray-200 bg-white px-4 py-6 shadow-sm'>
        <Image src= '/logo.svg'
                       alt='logo'
                       width={55}
                       height={60}
                       className='mx-auto mb-10' />
        <div className='flex flex-col gap-2'>
            {links.map((e)=>{return(
                <Link className='lex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium
                 text-gray-600 transition hover:bg-gray-100
                  hover:text-gray-900' 
                   href={e.href}>
                {e.icon}
                {e.name}
                
                </Link>
               
            )})}
            </div>
            
    </section>
    
  )
}

export default sidebar