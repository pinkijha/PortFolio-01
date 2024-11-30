import React from 'react';
import react from '/react.png'
import js from '/js1.png';
import css from '/css.png';
import html from '/html1.png';
import angular from '/angular.png';
import boot from '/bootstrap.png';
import tailwind from '/tailwind.png';
import node from '/node.jpg'

const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            logo: react,
            name: 'ReactJs',
            projectName: 'Portfolio, DashBoard, Swiggy-Clone, Youtube-Clone, Netflix-Clone',
        },
        {
            id: 2,
            logo: js,
            name: 'JavaScript',
            projectName: 'Calculators, Age-Calci, Stone-Paper-Scissor, Tic-Tac-Toe',
        },
        {
            id: 3,
            logo: css,
            name: 'CSS',
            projectName: 'Amazone-Landing-Page',
        },
        {
            id: 4,
            logo: html,
            name: 'HTML',
            projectName: 'Amazone-Landing-Page',
        },
        {
            id: 5,
            logo: tailwind,
            name: 'Tailwind',
            projectName: 'Portfolio, DashBoard, Swiggy-Clone, Youtube-Clone, Netflix-Clone',
        },
        {
            id: 6,
            logo: boot,
            name: 'Bootstrap',
            projectName: 'Portfolio, DashBoard, Swiggy-Clone, Youtube-Clone, Netflix-Clone',
        },
        {
            id: 7,
            logo: angular,
            name: 'Angular',
            projectName: 'Todo-List, Crud-Operation',
        },
        {
            id: 8,
            logo: node,
            name: 'NodeJs',
            projectName: 'Work In Progress ',
        },
    ]
  return (
    <div id='Portfolio' className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12 md:my-16">
       <div>
        <h1 className="text-3xl font-bold mb-4 md:mb-5">PortFolio</h1>
        <spna className='font-semibold underline' >Featured Project</spna>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-3 space-y-3 my-5'>
            {cardItem.map(({id, logo, name, projectName}) => (
                <div className='md:w-[300px] md:h-[300px] border rounded-lg p-2  shadow-lg
                cursor-pointer hover:scale-90 md:hover:scale-110 duration-200  ' key={id}>
                    <img className='w-[100px] h-[100px] rounded-full p-2 ' src={logo} alt='react_logo' />
                    <div>
                        <div className='font-bold mb-2 px-2 text-md md:text-xl'>{name}</div>
                        <p className='px-2 text-gray-700'>{projectName}</p>
                    </div>

                    <div className='space-x-3 md:space-y-0 space-y-3 px-6 py-6 justify-around'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded'><a href='https://www.linkedin.com/in/pinkijha/' target='_blank'>Show</a></button>
                        <button className='bg-green-500  hover:bg-green-700 text-white font-bold px-2 py-2 rounded'><a href='https://github.com/pinkijha' target='_blank'>Source Code</a></button>
                    </div>

                </div>
            )
            )}
        </div>
       </div>
    </div>
  )
}

export default Portfolio
