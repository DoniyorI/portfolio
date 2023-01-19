import React from 'react'
import photo from '../assets/slide_show/Photo_8.jpg'
import { BsFacebook,BsGithub, BsLinkedin } from 'react-icons/bs';
import { Button } from "@material-tailwind/react";




const About = () => {
  return (
    
    <div class="bg-porcelain-100 aboutH lg:pt-52 lg:px-20 lg:pb-96">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">

            <div class="flex justify-center ">
                <img src = {photo} alt="about" height={300} width={300} className='rounded-full border-solid border-8 border-black-pearl-500 '/>
            </div>

            <div class=" lg:col-span-2 p-6">
            <h1 className='text-left font-Roboto font-extrabold text-3xl pt-1'>Doniyor Ismatilloev</h1>
                <p className='text-left font-Roboto font-light text-sm'>University At Buffalo ‘ 24, BS Computer Science</p>
                <br/>
                <p className ='text-left font-Roboto lg:pr-32'>
                    I'm a undergraduate of University At Buffalo Class of 2024 and my passion is Computer Science. 
                    My interests include software design and development, artificial intelligence, machine learning, 
                    and Web Development.
                </p>
                <br/>
                <p className ='text-left font-Roboto lg:pr-32'>
                    I'm currently a Undergraduate student working towards my Bachelor’s degree in 
                    BS Computer Science.
                </p>
            </div>

            <div class=" lg:col-span-1 flex justify-center">
                <a href="https://www.facebook.com/profile.php?id=100010434663019">
                    <BsFacebook className='h-10 w-12 px-2 inline'/> 
                </a>
                <a href="https://www.linkedin.com/in/doniyor2024/">
                    <BsLinkedin className='h-10 w-12 px-2 inline'/>
                </a>
                <a href="https://github.com/DoniyorI">
                    <BsGithub className='h-10 w-12 px-2 inline'/>
                </a>
            </div>

            <div class="font-Roboto font-extrabold text-3xl lg:col-span-3 flex justify-center">
                Learn more about my:    
            </div>

            <div class="lg:col-span-3 flex justify-center">
            <Button className='bg-white hover:bg-gray-100 py-2 px-3 md:px-9 mx-1 md:mx-3 button shadow-lg rounded-none'>
                <div className='font-Roboto font-bold shadow-none text-lg lg:text-xl'>
                    Skills
                </div>
            </Button>
            <Button className='bg-white hover:bg-gray-100 py-2 px-3 md:px-6 mx-1 md:mx-3 button shadow-lg rounded-none'>
                <div className='font-Roboto font-semibold shadow-none text-lg lg:text-xl'>
                    Projects
                </div>
            </Button>
            <Button className=' bg-black-pearl-500 hover:bg-black-pearl-700 py-2 px-3 md:px-6 mx-1 md:mx-3 button shadow-lg text-white rounded-none'>
                <div className='text-white font-semibold text-lg lg:text-xl'>
                    Resume
                </div>
            </Button>

            </div>
        </div>
    </div>


  )
}

export default About
