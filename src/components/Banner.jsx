import React from 'react'

const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage:  `url(https://de.web.img3.acsta.net/r_654_368/img/ee/bb/eebbca0d7a5fd37f32192de79117a628.jpg)`}}>
        <div className='text-white text-2xl  w-full bg-blue-900/60 text-center p-4 font-sans'>
            Avengers 
        </div>
    </div>
  )
}

export default Banner
