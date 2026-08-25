import React from 'react'
import Sidebar from '../../_components/Sidebar'
import Header2 from '../../_components/Header2'
function layout({children}) {
  return (
    <section className='min-h-screen bg-gray-50'>
        <Header2 className='h-20 bg-white border-b flex items-center px-6'/>
        <div className='flex'>

            <Sidebar/>
                <main className="flex-1 p-6">
          {children}
        </main>
        </div>

       
    </section>
  )
}

export default layout