import React from 'react'

const Header = ({ steps }) => {
  return (
    <div className='flex flex-col w-full text-center justify-center h-[80px] bg-white border-[1px] border-b-gray-200'>
        <h1 className='font-bold text-[18px]'>Choose Service</h1>
        <h1>Step { steps } </h1>
    </div>
  )
}

export default Header