'use client'

import React, { useState } from 'react'

interface VideoType {
  youtube: string
  title: string
  date: string
}

const getYoutubeVideoId = (url: string): string | null => {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}

const IndividualVideo = ({ youtube, title, date }: VideoType) => {
  const [showModal, setShowModal] = useState(false)

  const videoId = getYoutubeVideoId(youtube)
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : ''

  return (
    <>
      {/* Video Card */}
      <div
        className="relative cursor-pointer group rounded-md overflow-hidden shadow-lg hover:shadow-xl transition font-poppins"
        onClick={() => setShowModal(true)}
      >
        {/* Thumbnail */}
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-60 object-cover"
          />
        )}

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-white text-black bg-opacity-60 p-4">
          <p className="text-xs">{date}</p>
          <h3 className="text-md font-semibold">{title}</h3>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50  bg-opacity-70 flex items-center justify-center px-4"
          onClick={() => setShowModal(false)} // click outside closes modal
        >
          <div
            className="bg-white rounded-md overflow-hidden max-w-6xl w-full relative"
            onClick={(e) => e.stopPropagation()} // prevent closing on inner click
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold z-50"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Embedded Video */}
            {videoId && (
              <div className="w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  className="w-full h-full"
                  allowFullScreen
                  allow="autoplay"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default IndividualVideo
