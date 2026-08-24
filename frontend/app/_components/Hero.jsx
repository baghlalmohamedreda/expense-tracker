import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className="bg-white pt-24 lg:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Manage Your Expense & <br />
              <strong className="text-indigo-600">Control</strong> your Money
            </h1>

            <p className="mt-4 text-base text-gray-700 sm:text-lg">
                Track your daily spending, set smart budgets, and achieve your
                 financial goals with ease. Take complete charge of your wallet today.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Image 
              src="/dashboard.svg"
              alt="dashboard"
              width={450}
              height={550}
              priority
              className="rounded-xl  object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero