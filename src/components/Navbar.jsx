import React, { useState } from 'react';
import photo from '/Passport_size_photo.JPG';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [ showMenu, setShowMenu ] = useState(false);
    const menuList = [
        {
            id: 1,
            text: 'Home'
        },
        {
            id: 2,
            text: 'About'
        },
        {
            id: 3,
            text: 'Portfolio'
        },
        {
            id: 4,
            text: 'Experience'
        },
        {
            id: 5,
            text: 'Contact'
        },
    ]


    // css for mobile device on menu
    const mobileMenu = 'cursor-pointer text-xl font-semibold hover:scale-105 duration-200 hover:bg-green-200 rounded-md p-3'

    const btnClickHandler = () => {
        setShowMenu(!showMenu);
    }

  return (
    <>
    {/* Desktop navbar */}
    <div className='z-20 bg-white flex items-center  max-w-screen-2xl mx-auto fixed top-0 left-0 right-0
     container justify-between px-4 md:px-20 shadow-md'>
      <div className='flex items-center space-x-2 cursor-pointer'>
        <img className='rounded-full h-10  md:h-14 md:m-2 ' src={photo} alt='Photo' />


        <div className=''>
            <h3 className='text-lg font-semibold '>Pinki Jha</h3>
            <p className='text-sm'>Software Engineer</p>
        </div>

      </div>

      <div className='flex'>
        <ul className='hidden md:flex items-center space-x-8'>
         {
            menuList.map(({id, text}) => {
               return <li key={id} className=' hover:scale-105 duration-200 cursor-pointer'>{text}</li>
            })
         }
        </ul>
      </div>
      
      <div className='md:hidden' onClick={btnClickHandler}>
        {showMenu ?  <ImCross className='text-xl cursor-pointer' /> :
         <GiHamburgerMenu className='text-2xl cursor-pointer' /> }
      </div>
      </div>
      {/* Mobile NavBar */}
      {showMenu &&  
      <div className='shadow-md rounded-sm '>
        <ul className='md:hidden my-6 h-screen flex flex-col justify-center items-center'>
        {
            menuList.map(({id, text}) => {
               return <li className={mobileMenu} key={id}>{text}</li>
            })
         }
        </ul> 
    </div>}
     

    </>
  )
}

export default Navbar
