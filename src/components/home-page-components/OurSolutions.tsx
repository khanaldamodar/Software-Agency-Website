'use client'
import React, { useState } from 'react'

// Tab titles
const tabTitles = [
  'Omnichannel Banking',
  'Neobanking',
  'Digital Wallet',
  'Digital Lending',
  'Interoperable Payment Switch',
  'Loyalty Management',
]

// Dummy data for each tab
const tabContents: Record<string, string> = {
  'Omnichannel Banking':
    'Our Omnichannel Banking solution offers customers a seamless and unified experience across all banking channels, both online and offline.',
  Neobanking:
    'Our Neobanking platform is designed to cater to digital-first customers with tailored, fast, and mobile-friendly banking services.',
  'Digital Wallet':
    'The Digital Wallet enables secure, quick, and convenient transactions — empowering users with mobile-based payment experiences.',
  'Digital Lending':
    'Digital Lending automates the loan application, approval, and disbursal process, improving efficiency and customer experience.',
  'Interoperable Payment Switch':
    'Our Interoperable Payment Switch enables seamless transactions across diverse financial institutions and platforms.',
  
}

const OurSolutions = () => {
  const [activeTab, setActiveTab] = useState(tabTitles[0])

  return (
    <div
      className="flex items-center justify-center flex-col min-h-screen bg-cover bg-center font-poppins px-4 md:px-20 py-10 text-white"
      style={{
        backgroundImage: `url('/background/solution-bg.jpg')`,
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-10 text-center max-w-6xl">
        <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
          Our Solutions
        </h1>
        <p className="text-xl text-white/90">
          Designed with scalability, security and adaptability at its core, our advanced tech stack is the cornerstone
          of how we help partner BFIs grow and thrive. Together, we create solutions that drive sustainable growth,
          ensuring our partners succeed in transforming challenges into opportunities within the evolving financial
          ecosystem.
        </p>
      </div>

      {/* Tabs */}
    <div className="mt-12 w-full max-w-6xl">
      <div
        className="flex overflow-x-auto gap-4 border-b border-white/30 pb-2 scrollbar-hide"
        style={{
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE 10+
        }}
      >
        {tabTitles.map((title) => (
        <button
          key={title}
          onClick={() => setActiveTab(title)}
          className={`px-5 py-2 whitespace-nowrap border-b-2 transition-all duration-200 ${
            activeTab === title
            ? 'border-blue-400 text-blue-400 font-semibold'
            : 'border-transparent text-white hover:text-blue-300'
          }`}
        >
          {title}
        </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-8 bg-white/10 backdrop-blur-md p-6 rounded-xl text-lg text-white">
        <h2 className="text-2xl font-semibold mb-3">{activeTab}</h2>
        <p>{tabContents[activeTab]}</p>
      </div>
    </div>
    <style jsx global>{`
      .scrollbar-hide {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
      }
    `}</style>
    </div>
  )
}

export default OurSolutions
