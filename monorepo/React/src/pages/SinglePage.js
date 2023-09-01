import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { data } from '../assets/mainData'
import star from '../assets/images/star.png'

const SinglePage = ({props , updateSteps}) => {

  const { id } = useParams()

  const getData = data.find((item) => (item.id === Number(id)))
  return (
    <div className='w-full h-screen max-w-[1240px] mx-auto flex flex-col items-center justify-center'>

          <div className='flex flex-col items-center border-[1px] min-w-[500px] h-[500px] border-gray-300 my-[10px] rounded-[10px] bg-white'>
            <img className='w-full h-[290px] object-contain' src={getData.foto} alt='foto' />
            <h1 className='font-bold text-2xl my-[20px]'>{getData.title}</h1>
            <div className='w-full flex items-center justify-evenly mt-[50px]'>
              <p className='font-bold text-[18px]'>Price : <span className='text-green-600'>{getData.price}$</span></p>
              <p className='flex items-center font-bold text-[18px]'>Rating : {getData.rating} <img className='h-[18px] ml-[5px]' src={star} alt='star'/></p>
            </div>
          </div>
          <Link to='/' onClick={() => updateSteps('1/2')}>
              <button className='px-[44px] py-[10px] bg-blue-300 font-bold rounded-md'>Back</button>
          </Link>

    </div>
  )
}

export default SinglePage