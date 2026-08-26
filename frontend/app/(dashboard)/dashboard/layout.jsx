'use client'
import React from 'react'
import Sidebar from '../../_components/Sidebar'
import Header2 from '../../_components/Header2'
import { useState } from 'react'
function layout({children}) {
  const [issidebaropen,setIssiderbaropen]=useState(true)
  function handlesidebar(){
    setIssiderbaropen(!issidebaropen)

  }
  return (
    <section className='min-h-screen bg-gray-50'>
        <Header2 onIssidebarOpen={handlesidebar}
         className='h-20 bg-white border-b flex items-center px-6'/>
        <div className='flex'>

            <Sidebar isSidebarOpen={issidebaropen} />
                <main className="flex-1 p-6">
          {children}
        </main>
        </div>

       
    </section>
  )
}

export default layout