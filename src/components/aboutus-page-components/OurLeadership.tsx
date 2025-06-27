'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'

interface Person {
  id: number
  name: string
  position: string
  company: string
  image: string
  linkedin: string
}

const TABS = ['Board of Directors', 'Advisors', 'Leadership Team'] as const
type TabType = typeof TABS[number]

const data: Record<TabType, Person[]> = {
  'Board of Directors': [
    {
      id: 1,
      name: 'John Doe',
      position: 'Chairman',
      company: 'ABC Corp',
      image: '/people/11.png', // Place image in public/images
      linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
      id: 2,
      name: 'John Doe',
      position: 'Chairman',
      company: 'ABC Corp',
      image: '/people/11.png', // Place image in public/images
      linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
      id: 3,
      name: 'John Doe',
      position: 'Chairman',
      company: 'ABC Corp',
      image: '/people/11.png', // Place image in public/images
      linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
      id: 4,
      name: 'John Doe',
      position: 'Chairman',
      company: 'ABC Corp',
      image: '/people/11.png', // Place image in public/images
      linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
      id: 5,
      name: 'John Doe',
      position: 'Chairman',
      company: 'ABC Corp',
      image: '/people/11.png', // Place image in public/images
      linkedin: 'https://linkedin.com/in/johndoe'
    },

  ],
  'Advisors': [
    {
      id: 6,
      name: 'Jane Smith',
      position: 'Tech Advisor',
      company: 'XYZ Ventures',
      image: '/images/jane.jpg',
      linkedin: 'https://linkedin.com/in/janesmith'
    },
  ],
  'Leadership Team': [
    {
      id: 7,
      name: 'Alice Johnson',
      position: 'CTO',
      company: 'Tech Innovate',
      image: '/images/alice.jpg',
      linkedin: 'https://linkedin.com/in/alicejohnson'
    },
  ]
}

const OurLeadership = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Board of Directors')

  return (
    <div className='min-h-[100vh] flex flex-col items-center justify-center gap-10 font-poppins px-5 py-10'>
      <div className='text-center'>
        <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
          Our Leadership
        </h1>
        <p className='text-sm text-gray-600 mt-4 md:text-base max-w-2xl mx-auto'>
          Our leadership team comprises of visionary innovators, seasoned bankers, technologists, futurists and domain experts, all committed to driving change through transformative solutions.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 flex-wrap justify-center">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-6'>
        {data[activeTab].map((person) => (
          <div key={person.id} className='flex flex-col items-center text-center'>
            <Image
              src={person.image}
              alt={person.name}
              width={200}
              height={150}
              className='object-cover'
            />
            <h2 className='mt-4 text-lg font-semibold'>{person.name}</h2>
            <p className='text-sm text-gray-600'>{person.position}</p>
            <p className='text-sm text-gray-500'>{person.company}</p>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className='mt-2 text-blue-600 hover:text-blue-800 transition'
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurLeadership
