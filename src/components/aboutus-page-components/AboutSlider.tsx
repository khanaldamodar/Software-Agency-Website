import React from 'react'

const AboutSlider = () => {
  return (
    <div className='h-[100vh] font-poppins flex flex-col items-center justify-center gap-20'>
        {/* Heading */}
        <div className='px-80'>
            <h1 className="font-bold text-4xl md:text-4xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
                We democratize financial services to create new possibilities for economic progress and individual prosperity.
            </h1>
        </div>
        <div className='px-80 '>
            <p className='leading-8 text-xl text-justify'>
                F1Soft aims to make finance accessible and inclusive for individuals and businesses through technological innovations. We work to remove barriers and ensure equal opportunities for everyone to access and utilize financial services. We believe that building inclusive financial systems lead to new possibilities and prospects that collectively contribute to the economic advancement of a society eventually resulting in the financial well-being of a person.
            </p>
        </div>
    </div>
  )
}

export default AboutSlider