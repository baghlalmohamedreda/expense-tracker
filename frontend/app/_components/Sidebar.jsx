'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  LayoutDashboard,
  Receipt,
  User,
  Settings
} from 'lucide-react'

function Sidebar({ isSidebarOpen }) {

  const links = [
    {
      name: "dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard size={20} />
    },
    {
      name: "expenses",
      href: "/expenses",
      icon: <Receipt size={20} />
    },
    {
      name: "profile",
      href: "/profile",
      icon: <User size={20} />
    },
    {
      name: "settings",
      href: "/settings",
      icon: <Settings size={20} />
    }
  ]

  return (
    <aside
      className={`
        fixed
        left-0
        top-0
        z-60
        h-screen
        w-80
        bg-white
        border-r
        border-gray-200
        shadow-xl
        transition-transform
        duration-300
        ease-in-out
        ${isSidebarOpen
          ? "translate-x-0"
          : "-translate-x-full"
        }
      `}
    >

      <div className="flex flex-col h-full px-6 py-8">

       
        <Image
          src="/logo.svg"
          alt="logo"
          width={55}
          height={60}
          className="mx-auto mb-12"
        />

        <div className="flex flex-col gap-2">

          {links.map((e, i) => (

            <Link
              key={i}
              href={e.href}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-4
                py-3
                text-base
                font-semibold
                text-gray-600
                transition
                hover:bg-gray-100
                hover:text-gray-900
              "
            >
              {e.icon}

              {e.name}
            </Link>

          ))}

        </div>

      </div>

    </aside>
  )
}

export default Sidebar