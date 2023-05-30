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
    <div className='object-center  bg-black-pearl-500 skillBlue bg-full bg-cover pt-20' id="Skills">
        <h1 className='text-white text-center font-Roboto font-bold text-4xl'>
            Skills
        </h1>
        <p className='text-white text-center font-Roboto font-light text-sm'>
            Below are some of my skills, and I'm always looking to learn more.
        </p>
        <div className="text-center items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 md:px-32 lg:px-40 pt-14">
            <div className='grid grid-rows-2'>
                <div className='flex justify-center'>
                    <img src={Python} alt="Python" className='drop-shadow-xl icon'/> 
                </div>
                <div className='text-white'> 
                    <h1 className='text-white text-2xl font-Roboto_Flex font-bold'>
                        Python
                    </h1>
                    <p>
                    With 3+ years of experience, I have mastered Python through research, coursework, and personal projects. 
                    Its versatility and robustness have allowed me to solve complex problems, develop efficient algorithms, and 
                    build practical applications. Python's rich ecosystem of libraries and frameworks has been instrumental in turning 
                    my ideas into reality.                    
                    </p>
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
                    With 4+ years of experience, I have developed full-stack web applications using HTML, JavaScript, CSS,
                     and libraries like Bottle Routes. I'm proficient in React with frameworks like Bootstrap and Tailwind CSS. 
                     Demonstrating my ability to adapt and leverage cutting-edge 
                     technologies in real-world scenarios.                    </p>
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div className='flex justify-center'>
                    <img src={C} alt="C" className='drop-shadow-xl icon'/> 
                </div>
                <div className='text-white'> 
                    <h1 className='text-2xl font-Roboto_Flex font-bold'>
                        C
                    </h1>                    
                    <p className='text-white'>
                    With over a year of experience, I've delved into C programming, Dynamic Memory Allocator, a Conway's Game of 
                    Life simulation, and a messaging server. My C programming journey has equipped me with a deep understanding 
                    of low-level concepts and the ability to craft high-performance applications.                   
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
                    Through my extensive experience in Node.js, I have gained proficiency in leveraging its powerful 
                    ecosystem of modules and libraries. This expertise has enabled me to develop robust server-side applications, 
                    implement efficient APIs, and effectively manage database interactions                    </p>
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
                    I have worked on various Scala projects, including the Abstract Genetic Algorithm and the Self Check Out Machine Project. Scala has been instrumental in data processing, distributed computing, and object-oriented programming. Its versatility has allowed me to build small scripts as well as large-scale systems.
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