import React from 'react';
import photo from '/Passport_size_photo.JPG'

const Navbar = () => {
  return (
    <div className=' flex max-w-screen-2xl mx-auto container justify-between m-2 px-4 md:px-20 shadow-md'>
      <div className='flex items-center space-x-2 cursor-pointer'>
        <img className='rounded-full h-14 md:m-2 ' src={photo} alt='Photo' />

        <div className=''>
            <h3 className='text-lg font-semibold '>Pinki Jha</h3>
            <p className='text-sm'>Software Engineer</p>
        </div>

      </div>
      
      <div className='flex'>
        <ul className='flex items-center space-x-6'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Portfolio</li>
            <li className='cursor-pointer'>Experience</li>            
            <li className='cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
