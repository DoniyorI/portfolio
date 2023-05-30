import React from 'react'
import photo from '../assets/slide_show/Photo_6.jpg'
import { Button } from "@material-tailwind/react";


const Home = () => {
  return (
    <section id = "#">
        <div class="bg-hero bg-no-repeat bg-cover bg-center h-screen">
            <div className='margin'>
                <img src = {photo} alt="profile" height={200} width={200} className='profile content-center rounded-full'/>
                <div className='text font-Roboto_Flex font-bold text-center pt-52'>
                    <h1>
                        Doniyor Ismatilloev
                    </h1>
                    <p className='sm_text font-Roboto_Flex font-light text-center pb-5'>
                        Software Engineer
                    </p>
                    <Button className='bg-white hover:bg-gray-100 py-3 px-5 button rounded-2xl shadow-lg pt'>
                        <a href = "#About">
                            Enter Portfolio
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Home
