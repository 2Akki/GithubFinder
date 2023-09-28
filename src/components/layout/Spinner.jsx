import React from 'react'
import SpinnerImg from '../layout/assets/Spinner.gif'
export default function Spinner() {
  return (
    <div className='w-100 mt-20'>
    <img
      width={180}
      className='text-center mx-auto'
      src={SpinnerImg}
      alt='Loading...'
    />
  </div>
  )
}
