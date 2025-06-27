'use client'

import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

interface InstagramPost {
  id: number
  imageUrl: string
  postUrl: string
}

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    imageUrl: '/images/insta1.jpg',
    postUrl: 'https://www.instagram.com/p/example1/',
  },
  {
    id: 2,
    imageUrl: '/images/insta2.jpg',
    postUrl: 'https://www.instagram.com/p/example2/',
  },
  {
    id: 3,
    imageUrl: '/images/insta3.jpg',
    postUrl: 'https://www.instagram.com/p/example3/',
  },
  {
    id: 4,
    imageUrl: '/images/insta4.jpg',
    postUrl: 'https://www.instagram.com/p/example4/',
  },
  {
    id: 5,
    imageUrl: '/images/insta5.jpg',
    postUrl: 'https://www.instagram.com/p/example5/',
  },
  {
    id: 6,
    imageUrl: '/images/insta6.jpg',
    postUrl: 'https://www.instagram.com/p/example6/',
  },
]

const LifeatCompany = () => {
  return (
    <div className='min-h-[100vh] bg-[#F8F9FA] flex flex-col items-center justify-center px-4 py-16'>
      {/* Heading */}
      <div className='flex flex-col items-center justify-center gap-6 mb-10 text-center'>
        <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
          Life at Shakta Technology
        </h1>
        <p className='text-lg text-gray-600 max-w-3xl'>
          1200+ individuals sharing a journey of learning, innovation, and meaningful impact in a dynamic and vibrant workplace.
        </p>
        <a
          href='https://www.instagram.com/shaktatechnology' // Replace with actual profile link
          target='_blank'
          rel='noopener noreferrer'
          className='font-poppins flex items-center gap-2 text-xl cursor-pointer text-blue-600 hover:text-blue-800 transition'
        >
          <FaInstagram size={25} />
          <span className='font-semibold'>Discover More</span>
        </a>
      </div>

      {/* Instagram Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.postUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300'
          >
            <Image
              src={post.imageUrl}
              alt={`Instagram Post ${post.id}`}
              width={300}
              height={300}
              className='object-cover w-full h-[300px]'
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default LifeatCompany
