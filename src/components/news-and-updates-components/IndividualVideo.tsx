import React from 'react'

interface VideoType{
    youtube: string
    title: string
    date: string
}

const IndividualVideo = ({youtube, title, date}: VideoType) => {
  return (
    <div>IndividualVideo</div>
  )
}

export default IndividualVideo