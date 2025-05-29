import React from 'react'

const Pagination = ({handlePrev,handleNext,pageNo}) => {
  return (
    <div className='bg-gray-500 p-4 mt-8 rounded-3xl flex justify-center'>
      <div onClick={handlePrev} className='px-8'>
        <i class="fa-solid fa-arrow-left"></i>
      </div>

      <div className='font-bold text-xl'>
        {pageNo}
      </div>
      
      <div onClick={handleNext} className='px-8'>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  )
}

export default Pagination

