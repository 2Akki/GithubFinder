import React, { Fragment } from 'react'

export default function About() {
  return (
   <Fragment>
       <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile the Details. This
        project is made for anyone
        <a href='https://www.youtube.com/'>
          {' '}
         Who wants to ue it for searching
        </a>{' '}
       Made by 
        <strong>
          <a href='https://twitter.com/Deal_with_Akki'> Akki</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.1</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href="https://twitter.com/Deal_with_Akki">
          Akki Sharma
        </a>
      </p>
   </Fragment>
  )
}
