import React from 'react';
import react from '/react.png'
import js from '/js1.png';
import css from '/css.png';
import html from '/html.png';
import angular from '/angular.png';
import boot from '/bootstrap.png';
import tailwind from '/tailwind.png';
import node from '/node.jpg';
import wordpress from '/Wordpress.png';
import php from '/php.png'

const Experience = () => {
    const cardItem = [
        
        {
            id: 1,
            logo: js,
            name: 'JavaScript'
        },
        {
            id: 6,
            logo: css,
            name: 'CSS'
        },
        {
            id: 7,
            logo: html,
            name: 'HTML'
        },{
            id: 2,
            logo: react,
            name: 'ReactJs'
        },
        {
            id: 8,
            logo: tailwind,
            name: 'Tailwind'
        },
        {
            id: 3,
            logo: boot,
            name: 'Bootstrap'
        },
        {
            id: 4,
            logo: angular,
            name: 'Angular'
        },
        {
            id: 5,
            logo: node,
            name: 'NodeJs'
        },
        {
            id: 9,
            logo: wordpress,
            name: 'WordPress'
        },
        {
            id: 10,
            logo: php,
            name: 'PHP'
        },
    ]
  return (
    <div name='Experience' className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12 md:my-16">
       <div>
        <h1 className="text-3xl font-bold mb-4 md:mb-5">Experience</h1>
        <p className=' ' >I've more than 2 years of experince in below Technology.</p>
        <div className='grid md:grid-cols-5 grid-cols-2 gap-7 my-3'>
            {cardItem.map(({id, logo, name}) => (
                <div className='md:w-[200px] md:h-[200px] flex flex-col items-center justify-center border rounded-full p-2  shadow-lg
                cursor-pointer hover:scale-90 md:hover:scale-110 duration-200  ' key={id}>
                    <img className='w-[100px]  rounded-full' src={logo} alt='react_logo' />
                    <div>
                        <div className='font-bold mb-2 px-2 text-md md:text-xl'>{name}</div>
                       
                    </div>

                    

                </div>
            )
            )}
        </div>
       </div>
    </div>
  )
}

export default Experience
