"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import resumePdf from './../../../public/picture/logo2.jpg'
const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image" >
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Hey! I am Shafaq Anees
         <br className='hidden lg:inline-block'/>
          <div className="hidden lg:inline-block ">  
              <Typewriter
  options={{
    strings: ['Web Development', 'Graphic designer', 'Econmist'],
    autoStart: true,
    loop: true,
  }}/>
  </div>
        </h1>
          <div className='w-[100px] h-[2px] bg-blue-700'> </div>
        <p className="mb-8 leading-relaxed">I am a passionate web developer with expertise in building responsive, user-friendly websites and web applications. Specializing in front-end and back-end technologies, I create scalable and efficient solutions using modern frameworks and tools like React, Next.js, Node.js, and more. My goal is to deliver high-quality, accessible web experiences that meet the needs of clients and users alike. With a strong focus on clean code, performance optimization, and intuitive UI/UX design, I strive to build web solutions that drive results.</p>
        <div className="flex justify-center">
          <a href={'#contact'}>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button>
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" width={400} alt="hero" src={require("../../../public/assests/picture/logo2.jpg")}></Image>

      </div>
    </div>
  </section>

    
  )
}

export default Hero