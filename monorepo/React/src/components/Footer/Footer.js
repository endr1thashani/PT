import React from 'react'
import logo from '../../assets/images/logo.svg'
const Footer = () => {
  return (
    <div className='flex w-full items-center justify-center h-[60px] bg-white border-[1px] border-b-gray-200'>
        <h1 className='font-bold text-[14px] text-gray-300 mr-[5px]'>Powered By</h1>
        <img className='w-[65px] h-[65px]' src={logo} alt='pabau' />
    </div>
  )
}

export default Footer