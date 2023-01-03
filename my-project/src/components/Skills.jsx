import React from 'react'
import Python from '../assets/skills/Python.png'
import C from '../assets/skills/C.png'
import WebDev from '../assets/skills/WebDev.png'
import Node from '../assets/skills/Node.js.png'
import Scala from '../assets/skills/Scala.png'
import Other from '../assets/skills/Other.png'



const Skills = () => {
  return (
    <>
    <div className='object-center  bg-black-pearl-500 skillBlue bg-full bg-cover pt-20'>
        <h1 className='text-white text-center font-Roboto font-bold text-4xl'>
            Skills
        </h1>
        <p className='text-white text-center font-Roboto font-light text-sm'>
            Below are some of my skills, and I'm always looking to learn more.
        </p>
        <div className="items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-32 lg:px-40 pt-14">
            <div className='grid grid-rows-2'>
                <div className='flex justify-center'>
                    <img src={Python} alt="Python" className='drop-shadow-xl icon'/> 
                </div>
                <div className='text-white'> 
                    <h1 className='text-white text-2xl font-Roboto_Flex font-bold'>
                        Python
                    </h1>
                    <p>
                        Over the past 3 years, I've had extensive experience with Python in the course 
                        of my research, classwork, and personal projects. Some of my projects in Python include my 
                        _______ and _______</p>
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div className='flex justify-center'>
                    <img src={WebDev} alt="WebDev" className='drop-shadow-xl icon'/> 
                </div>
                <div className='text-white'> 
                    <h1 className='text-2xl font-Roboto_Flex font-bold'>
                        Web Development
                    </h1>
                    <p className='text-white'>
                        With a combined 4 years of experience from personal projects _______ often develop 
                        full-stack applications, consisting of HTML/JavaScript/CSS, and various web libraries 
                        like Bottle Routes. Also experience React with frameworks such as Bootstrap, Tailwind 
                        CSS, and Django with backend using Typescript in the Winning Hackaton Project
                    </p>
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div className='flex justify-center'>
                    <img src={C} alt="C" className='drop-shadow-xl icon'/> 
                </div>
                <div className='text-white'> 
                    <h1 className='text-2xl font-Roboto_Flex font-bold'>
                        C
                    </h1>                    <p className='text-white'>
                        I have over a year in programming in C. Projects include ______, _____ and ______ Using 
                        C as the Primary language because of its efficiently working on enterprise applications, 
                        games, graphics, and applications requiring calculations.
                    </p>
                </div>
            </div>

            <div className='grid grid-rows-2'>
                <div className='flex justify-center'>
                    <img src={Node} alt="Node" className='drop-shadow-xl icon'/> 
                </div>
                <div className='text-white'> 
                    <h1 className='text-2xl font-Roboto_Flex font-bold'>
                        Node.js
                    </h1>                    
                    <p className='text-white'>
                    I have extensive experience in Node.js and many of its modules
                    </p>
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div className='flex justify-center'>
                    <img src={Scala} alt="Scala" className='drop-shadow-xl icon'/> 
                </div>
                <div className='text-white'> 
                    <h1 className='text-2xl font-Roboto_Flex font-bold'>
                        Scala
                    </h1> 
                    <p className='text-white'>
                    I've worked on many projects in Scala such as ______ and ______. Using Scala building 
                    writing small scripts to building a massive system for data processing. And great for 
                    Data processing, distributed computing, Such as Object Oriented programming such as the
                     _____ Project.
                    </p>
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div className='flex justify-center'>
                    <img src={Other} alt="Other" className='drop-shadow-xl icon'/> 
                </div>
                <div className='text-white'> 
                    <h1 className='text-2xl font-Roboto_Flex font-bold'>
                        Others
                    </h1>
                    <p className='text-white'>
                    I have significant experience using web libraries such as Bottle Route, and Bootstrap, 
                    Tailwind CSS, Django to create web applications for many of my professional and personal 
                    projects.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills