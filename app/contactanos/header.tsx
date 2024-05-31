import React from 'react'

const header = () => {
  return (
    <div className='w-full h-[400px] relative'>
      <img src="https://i.pinimg.com/736x/64/a1/c7/64a1c71b6f8274d4a920c8457c083f9b.jpg" alt="contáctanos"
      className='h-full w-full object-cover' />
      <div className='absolute w-full h-full top-0 left-0 bg-[#4E0FB0] bg-opacity-50 flex justify-center items-center xl:px-32 md:px-24  px-8'>
        <h3 className='text-5xl font-black text-white text-center'>Lleva tu marca al siguiente nivel con nosotros </h3>
      </div>
    </div>
  )
}

export default header
