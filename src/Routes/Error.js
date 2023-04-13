import React from 'react'

import pageerror from '../Assets/images/error-404.png';
const Error = () => {
  return (
    <>
        <div className='w-full h-screen text-center flex-col flex-wrap flex justify-center items-center text-white text-3xl md:text-5xl'>
            <img src={pageerror} alt="Page404" className='w-56 h-56' />
            <h1 className='mt-8'>404 Page Not Found</h1>
            <p className='mt-8 text-lg md:text-2xl'>The page you requested could not be found.</p>
        </div>
    </>
  )
}

export default Error