"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ComponentsAboutHome() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 md:px-16 py-24 bg-gray-900 text-white flex items-center"
    >
      {/* GRADIENT BACKGROUND DECORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-44 left-20 w-[225px] h-[225px] bg-purple-600/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-52 right-24 w-[225px] h-[225px] bg-pink-500/30 rounded-full blur-[100px]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I'm Abiyan, a passionate developer who loves turning ideas into tangible, functional, and beautifully designed digital products. I enjoy experimenting with my own creativity while exploring new challenges and technologies.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          I build digital things that people actually enjoy using my apps, tools, and interactive projects crafted with clarity, intention, and a bit of personality. Clean structure, fluid user experience, and constant iteration are the core of my workflow
        </p>

        {/* QUOTE BOX */}
        <div className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700 shadow-lg text-gray-300 text-md leading-relaxed">
          "Progress doesn’t need to be perfect, it just needs to be consistent, so do your best! "
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center md:justify-start gap-6 mt-4">
          <a
            href="https://www.instagram.com/abiyanm_/"
            target="_blank"
            className="text-purple-200 hover:text-purple-500 transition text-3xl"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/abiyan-mirza-a468552b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="text-purple-200 hover:text-purple-500 transition text-3xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/abiyyy07"
            target="_blank"
            className="text-purple-200 hover:text-purple-500 transition text-3xl"
          >
            <FaGithub />
          </a>
        </div>
        
      </div>
    </section>
  );
}
