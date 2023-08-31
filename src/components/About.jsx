import React from 'react'
import photo from '../assets/slide_show/Photo_8.jpg'
import { BsFacebook,BsGithub, BsLinkedin } from 'react-icons/bs';
import { Button } from "@material-tailwind/react";
import PDF from '../assets/Doniyor_s_Resume.pdf'




const About = () => {
  return (
    
    <div class="bg-porcelain-100 aboutH lg:pt-52 px-10 lg:px-20 lg:pb-96 md:px-20 md:pb-96 pt-24" id = "About" >
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">

            <div class="content-center profile2">
                <img src = {photo} alt="about" height={375} width={375} className='rounded-full border-solid border-8 border-black-pearl-500 '/>
            </div>

            <div class=" lg:col-span-2 p-6">
            <h1 className='text-left font-Roboto font-extrabold text-3xl pt-1'>Doniyor Ismatilloev</h1>
                <p className='text-left font-Roboto font-light text-sm'>University At Buffalo ‘ 24, BS Computer Science
                </p>
                <p className='text-left font-Roboto font-light text-sm'> GPA: 3.76, Honors: Dean's List, Pride of New York Scholarship</p>
                <br/>
               
                <p className ='text-left font-Roboto lg:pr-32'>
                I'm an undergraduate student pursuing a Bachelor's degree in Computer Science at the University at Buffalo, Class of 2024. My passion lies in software design, development, artificial intelligence, and machine learning. Through continuous learning and exploration, I strive to expand my skills and knowledge in these areas. 
                </p>
                <br/>
                <p className ='text-left font-Roboto lg:pr-32'>
                As a testament to my dedication, I have developed my own website where I showcase my projects and skills. This platform allows me to demonstrate my creativity, problem-solving abilities, and passion for technology.
                </p>
                <br/>
                <p className ='text-left font-Roboto lg:pr-32'>
                I am excited about the opportunity to contribute to meaningful projects and grow as a computer scientist. Feel free to explore my website to learn more about my journey and the projects I've worked on.
                Thank you for visiting my website!

                </p> 
                <br/>
                <p className ='text-left font-Roboto lg:pr-32'>
                Thank you for visiting my website!

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
                    <a href = "#Skills">
                        Skills
                    </a>
                </div>
            </Button>
            <Button className='bg-white hover:bg-gray-100 py-2 px-3 md:px-6 mx-1 md:mx-3 button shadow-lg rounded-none'>
                <div className='font-Roboto font-semibold shadow-none text-lg lg:text-xl'>
                    <a href = "#Project">
                        Projects
                    </a>
                </div>
            </Button>
            <Button className=' bg-black-pearl-500 hover:bg-black-pearl-700 py-2 px-3 md:px-6 mx-1 md:mx-3 button shadow-lg text-white rounded-none'>
                <div className='text-white font-semibold text-lg lg:text-xl'>
                    <a href = {PDF}>
                        Resume
                    </a>
                </div>
            </Button>

            </div>
        </div>
    </div>


  )
}

export default About
