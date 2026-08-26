'use client'

import React, { useState } from 'react'
import Sidebar from '../../_components/Sidebar'
import Header2 from '../../_components/Header2'

function Layout({ children }) {

  const [issidebaropen, setIssiderbaropen] = useState(false)

  function handlesidebar() {
    setIssiderbaropen(!issidebaropen)
  }

  return (

    <section className="min-h-screen bg-gray-50 flex flex-col">

      {/* ================= HEADER ================= */}

      <Header2
        onIssidebarOpen={handlesidebar}
      />


      {/* ================= CONTENT ================= */}

      <div className="flex flex-1 relative">


        {/* ================= OVERLAY ================= */}

        {issidebaropen && (

          <div
            onClick={() => setIssiderbaropen(false)}
            className="
              fixed
              inset-0
              z-40
              bg-slate-900/25
              backdrop-blur-[2px]
              transition-opacity
            "
          />

        )}


        {/* ================= SIDEBAR ================= */}

        <Sidebar
          isSidebarOpen={issidebaropen}
        />


        {/* ================= MAIN ================= */}

        <main
          className="
            flex-1
            p-6
            w-full
          "
        >

          <div className="max-w-7xl mx-auto">

            {children}

          </div>

        </main>

      </div>

    </section>
  )
}

export default Layout