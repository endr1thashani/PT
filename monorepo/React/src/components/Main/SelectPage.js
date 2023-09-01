import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../assets/mainData'
const SelectPage = ({ updateSteps }) => {
  return (
    <div className='w-full flex flex-col h-screen items-center justify-center max-w-[900px] mx-auto'>
        <div className='w-full max-w-[400px] bg-white flex flex-col items-center max-h-[900px]  p-[15px]'> 
            {
                data.map((item,index) =>(
                    <div key={index} className='flex items-center h-[50px] w-full justify-between border-[1px] border-gray-200 my-[10px] rounded-sm p-[10px]'>
                        <Link 
                            to={`/select/${item.id}`} 
                            onClick={() => updateSteps('2/2')}
                            className='flex items-center w-full justify-between'
                        >
                            <div className='flex items-center'>
                                <img className='h-[40px] w-[40px]' src={item.foto} alt='foto'/>
                                <h1 className='ml-[10px]'>{item.title}</h1>
                            </div>
                                <p className='text-gray-500'>&gt;</p>
                        </Link>
                    </div>
                ))
            }
            
        </div>

        <div className='flex w-[400px] items-center h-[50px] justify-between border-[1px] bg-white border-gray-200 my-[10px] rounded-sm p-[10px]'>
            <p className='text-[13px] text-gray-400 font-bold'>Not sure about consultation type?Please, call <span className='text-blue-500'>0203 7959063</span></p>
        </div>

    </div>
  )
}

export default SelectPage