import React from 'react'
import { Button } from "@material-tailwind/react";
import { BsGithub} from 'react-icons/bs';
import project1 from '../assets/project/Project_1.png'
import project2 from '../assets/project/Project_2.png'
import project3 from '../assets/project/Project_3.png'
import project4 from '../assets/project/Project_4.png'



const Projects = () => {
  return (
    <div className='text-center bg-black-pearl-500 projectsBO pt-20' id = "Project">
        <div className='text-white'>
            <h1 className='text-3xl font-Roboto_Flex font-extrabold '>
                Projects
            </h1>
            <p className='font-Roboto_Flex font-thin text-sm pt-3 pb-20'>
                Below are some of my skills, and I'm always looking to learn more.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 px-8 md:px-24 lg:px-52">
            <div class="flex justify-center text-6xl border-2 w-full h-auto rounded-md p-2 bg-gray-100">
                <img className='flex justify-center rounded-md'
                src = {project2}
                />
            </div>
            <div class="flex justify-center text-6xl border-2 w-full h-auto rounded-md p-2 bg-gray-100">
            <img
                src = {project4}
                />
            </div>
            <div class="flex justify-center text-6xl border-2 w-full h-auto rounded-md p-5 bg-gray-100">
            <img 
                src = {project1}
                />
            </div>
            <div class="flex justify-center text-6xl border-2 w-full h-auto rounded-md p-5 bg-gray-100">
            <img
                src = {project3}
                />
            </div>
            
        </div>

        <div className='text-white'>
            <p className='text-sm font-Roboto_Flex font-light py-8'>
                In my free time, I continue to work on personal projects and have many ideas just waiting to be realized.
            </p>
            <h1 className='text-2xl font-Roboto_Flex font-extrabold pt-4 pb-6 '>
                To see more of my projects...
            </h1>

            <Button className='bg-white hover:bg-gray-100 py-5 px-8 button rounded-md shadow-lg font-Roboto font-bold'>
                <a href="https://github.com/DoniyorI" className='text-xl'>
                    <p className='inline'>Visit my Github</p>
                    <BsGithub className='h-7 w-7 p-0.5 inline -translate-y-0.5'/>
                </a>
            </Button>
        </div>
    </div>
  )
}

export default Projects
