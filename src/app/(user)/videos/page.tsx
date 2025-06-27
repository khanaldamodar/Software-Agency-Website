'use client'

import React from 'react'
import NewsHeader from '@/components/news-and-updates-components/NewsHeader'
import IndividualVideo from '@/components/news-and-updates-components/IndividualVideo'

const videoData = [
  {
    youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: 'Behind the Scenes at F1Soft',
    date: 'June 25, 2025',
  },
  {
    youtube: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    title: 'How We Built Our Platform',
    date: 'May 12, 2025',
  },
  {
    youtube: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    title: 'Founders Talk Culture',
    date: 'April 18, 2025',
  },
  {
    youtube: 'https://www.youtube.com/watch?v=tgbNymZ7vqY',
    title: 'Innovation Showcase',
    date: 'March 30, 2025',
  },
  {
    youtube: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    title: 'Staff Interviews',
    date: 'February 22, 2025',
  },
  {
    youtube: 'https://www.youtube.com/watch?v=oUFJJNQGwhk',
    title: 'Company Day Highlights',
    date: 'January 15, 2025',
  },
]

const page = () => {
  return (
    <div>
      <NewsHeader
        title="Videos"
        desc="Our monthly newsletter to keep abreast of what’s happening at F1Soft"
      />

      {/* Videos Section */}
      <div className="md:px-80 px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videoData.map((video, index) => (
            <IndividualVideo
              key={index}
              youtube={video.youtube}
              title={video.title}
              date={video.date}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
