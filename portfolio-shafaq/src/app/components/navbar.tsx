import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { TbPdf } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           <Image src={require("../../../public/assests/picture/apple-logo.svg")} width={80} alt="" />
         
        
            <span className="title-font sm:text-4xl text-3xl mb-0 font-medium text-gray-900">Educational Tutorial</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-blue-600">Home</a>
            <a href="#about" className="mr-5 hover:text-blue-600">About</a>
            <a href="#skills" className="mr-5 hover:text-blue-600">Skills</a>
            <a href="#projects" className="mr-5 hover:text-blue-600">Projects</a>
            <a href="#contact" className="mr-5 hover:text-blue-600">Contact</a>
          </nav>

            
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link href={require('../../../public/assests/picture/logo2.jpg')}>
           Download CV
           </Link>
          
      
           <FaCloudDownloadAlt className="text-xl ml-2"/>

          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
