"use client";

import React from "react";
import { Menu, Search, Bell, ChevronDown } from "lucide-react";

function Header2({onIssidebarOpen}) {
  return (
    <header className="h-16 w-full bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
      
    
      <div className="flex items-center gap-4">
      
        <button onClick={onIssidebarOpen}
          className="p-2 cursor-pointer rounded-lg hover:bg-gray-100 transition"
          aria-label="Open menu"
        >
          <Menu size={22} className="text-gray-600" />
        </button>

     
        <div>
          <h1 className="text-lg font-semibold text-gray-800">
            Dashboard
          </h1>
          <p className="text-xs text-gray-400">
            Welcome back
          </p>
        </div>
      </div>

    
      <div className="flex items-center gap-3">

      
        <button
          className="p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label="Search"
        >
          <Search size={20} className="text-gray-500" />
        </button>

       
        <button
          className="relative p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label="Notifications"
        >
          <Bell size={20} className="text-gray-500" />

          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

       
        <div className="h-8 w-px bg-gray-200 mx-1"></div>

     
        <button className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition">
          
        
          <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
            RA
          </div>

         
          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-gray-800">
              Reda
            </p>
            <p className="text-xs text-gray-400">
              Admin
            </p>
          </div>

          <ChevronDown size={17} className="text-gray-400" />
        </button>

      </div>
    </header>
  );
}

export default Header2;