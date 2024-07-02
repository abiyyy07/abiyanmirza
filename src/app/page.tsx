'use client'

import Image from "next/image";
import Link from "next/link";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHome, FaHtml5, FaInstagram, FaLinkedin, FaNodeJs, FaReact, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Typed, { ReactTyped } from 'react-typed';
import { useRef } from "react";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { CgProfile, CgWebsite } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  const aboutMe = useRef(null);
  const myProject = useRef(null);
  return (
    <main className="">

    <nav className="fixed w-full bg-gray-800 text-white shadow-md shadow-purple-500 top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex gap-1">
              <div className="text-purple-600">Abiyan</div>
              <div className="">Mirza</div>
            </div>
          </div>
          <div className="hidden items-center md:flex gap-6 font-semibold">
            <Link href="/" className="hover:text-purple-500 transform duration-200 flex gap-1">
              <FaHome className="mt-1" />Home
            </Link>
            <button className="hover:text-purple-500 transform duration-200 flex gap-1" onClick={() => scrollToRef(aboutMe)}>
              <CgProfile className="mt-1" />About me
            </button>
            <button className="hover:text-purple-500 transform duration-200 flex gap-1" onClick={() => scrollToRef(myProject)}>
              <CgWebsite className="mt-1" />Project
            </button>
            <Link href="https://wa.me/6289698672945" className="text-white bg-transparent px-2 py-1 border-2 border-white hover:bg-purple-600 hover:border-purple-600 duration-200 transform">
              Contact Me
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-600 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-16 left-0 w-full bg-gray-800 py-2 shadow-md md:hidden transition-transform duration-300 z-40 ${
          isOpen ? '-translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-auto">
          <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">
            Items 1
          </Link>
        </div>
      </div>
    </nav>

    <div className="flex flex-col-reverse md:flex-row items-center justify-evenly h-screen bg-gray-800 text-white">
      <div className="flex flex-col items-center md:items-start text-center md:text-left px-6 -mt-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-purple-500">Im Abiyan Mirza</span>
        </h1>
        <h2 className="text-2xl md:text-4xl mb-8 gap-2">
          <ReactTyped
            strings={['Full Stack Developer', 'Web Developer']}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </h2>
        <p className="mb-4 -mt-4">Innovating with technology</p>
        <Link href="#" className="bg-purple-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition duration-300">
          Contact Me
        </Link>
      </div>
      <div className="flex justify-center md:justify-end mt-8 md:mt-0 z-50">
        <div className="relative z-40">
          <Image
            src="/abiyan.jpg"
            alt="Abiyan Mirza"
            width={300}
            height={200}
            className="rounded-full border-4 border-purple-500 shadow-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-500 animate-pulse"></div>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 text-white py-10 px-8 md:px-56 relative" ref={aboutMe}>
      <div className="text-3xl font-bold mb-4 relative z-10">
        <span className="text-white underline">About Me</span>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 to-purple-800 opacity-50 z-0"></div>
      <div className="text-lg relative z-10">
        <p>
        Hi, Im Abiyan Mirza. Im passionate about web development as well as other software development I'm learning and love creating seamless user experiences. With the experience and skills that I have and learned, I strive to provide high-quality solutions that meet user and business needs and other needs.
        </p>
        <p className="mt-2">
        Outside of coding, I like doing my hobbies, the hobby I like the most is playing online games.
        </p>
        <div className="flex gap-4 mt-4">
          <Link href={'https://www.instagram.com/abiyanm_/?igsh=aHJ0cWdqcmZqY2l2'} target="_black" className="transform duration-200 hover:text-orange-500">
            <FaInstagram size={30} />
          </Link>
          <Link href={'https://github.com/abiyyy07/'} target="_black" className="transform duration-200 hover:text-gray-300">
            <FaGithub size={30} />
          </Link>
          <Link href={'https://wa.me/6289698672945'} target="_black" className="transform duration-200 hover:text-green-600">
            <FaWhatsapp size={30} />
          </Link>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 text-white py-10 px-4">
      <div className="text-3xl font-bold mb-6 text-purple-500 text-center">My Skills Programming</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* HTML */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <div className="text-3xl text-purple-500 font-bold">
            <FaHtml5 />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600">HTML</h3>
            <p className="text-gray-600">Markup Languange</p>
          </div>
        </div>
        {/* CSS */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <div className="text-3xl text-purple-500 font-bold">
            <FaCss3Alt  />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600">CSS</h3>
            <p className="text-gray-600">Styling Languange</p>
          </div>
        </div>
        {/* React */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <div className="text-3xl text-purple-500 font-bold">
            <FaReact />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600">React</h3>
            <p className="text-gray-600">Frontend Framework</p>
          </div>
        </div>
        {/* Tailwind */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <div className="text-3xl text-purple-500 font-bold">
            <RiTailwindCssFill />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600">Tailwind</h3>
            <p className="text-gray-600">Framework for CSS</p>
          </div>
        </div>
        {/* Typescript */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <div className="text-3xl text-purple-500 font-bold">
            <SiTypescript />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600">Typescript</h3>
            <p className="text-gray-600">Programming Language</p>
          </div>
        </div>
        {/* Node JS */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <div className="text-3xl text-purple-500 font-bold">
            <FaNodeJs />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600">Node JS</h3>
            <p className="text-gray-600">Backend Framework</p>
          </div>
        </div>
        {/* Firebase */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <div className="text-3xl text-purple-500 font-bold">
            <RiFirebaseFill />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600">Firebase</h3>
            <p className="text-gray-600">Backend-as-a-Service</p>
          </div>
        </div>
        {/* Git */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <div className="text-3xl text-purple-500 font-bold">
            <FaGitAlt />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600">Git</h3>
            <p className="text-gray-600">Version Control System</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 text-white py-10 px-4" ref={myProject}>
      <div className="text-3xl font-bold mb-4 text-white">My Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Project One */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative pb-2/3">
            <Image
              src="/projek/emporium.jpeg"
              alt="Emporium Petshop"
              width={500}
              height={500}
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-extrabold text-purple-800 mb-1">Emporium Petshop</h3>
            <p className="text-gray-600">Simple E-Commerce website with payment gateway and cost delivery calculate</p>
            <Link
              href="https://emporium-petshop.vercel.app/" target="_blanc"
              className="mt-2 inline-block text-purple-600 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-800 hover:text-white transform duration-200"
            >
              View Project
            </Link>
          </div>
        </div>

        {/* Project Two */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative pb-2/3">
            <Image
              src="/projek/agriculture.jpeg"
              alt="Smart Agriculture"
              width={500}
              height={500}
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-extrabold text-purple-800 mb-1">Smart Agriculture</h3>
            <p className="text-gray-600">Simple informative static website for information about Smart Agriculture, small project IoT.</p>
            <Link
              href="https://smart-agriculture-nine.vercel.app/" target="_black"
              className="mt-2 inline-block text-purple-600 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-800 hover:text-white transform duration-200"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 flex">
        <Link href={'/project'} className="bg-transparent hover:bg-purple-600 px-2 py-1 border-2 border-white text-white hover:border-purple-600 transform duration-200 font-semibold">Other project</Link>
      </div>
    </div>

    <footer className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 Abiyan Mirza. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/abiyyy07/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.instagram.com/abiyanm_/?igsh=aHJ0cWdqcmZqY2l2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abiyan-mirza-a468552b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://wa.me/6289698672945" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>

    </main>
  );
}
