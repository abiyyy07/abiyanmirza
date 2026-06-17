"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ComponentsAboutHome() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 md:px-16 py-20 bg-zinc-900 text-white flex items-center font-mono overflow-hidden"
    >
      {/* Dekorasi Garis Grid Latar Belakang */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none"></div>

      {/* CONTENT BOX (RETRO GUI WINDOW) */}
      <div className="relative z-10 max-w-3xl mx-auto w-full bg-zinc-950 border-4 border-black shadow-[8px_8px_0px_0px_#000]">
        
        {/* WINDOW HEADER (Bar Atas Jendela Jadul) */}
        <div className="bg-black text-emerald-400 px-4 py-2 flex justify-between items-center border-b-4 border-black select-none">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <span>[📄]</span>
            <span>ABOUT_ME.txt</span>
          </div>
          {/* Tombol Mini/Max/Close Ala Window Jadul */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 bg-zinc-700 border border-zinc-500 inline-block"></span>
            <span className="w-3 h-3 bg-zinc-700 border border-zinc-500 inline-block"></span>
            <span className="w-3 h-3 bg-emerald-500 border border-black inline-block"></span>
          </div>
        </div>

        {/* WINDOW BODY */}
        <div className="p-6 md:p-8 text-center md:text-left space-y-6">
          
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
            <span className="text-emerald-400">&gt;</span> About Me
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed tracking-wide">
            <p>
              I'm <span className="text-emerald-400 font-bold bg-zinc-900 px-1 border border-zinc-800 shadow-[2px_2px_0px_0px_#000]">Abiyan</span>, 
              a passionate developer who loves turning ideas into tangible, functional, and beautifully designed digital products. 
              I enjoy experimenting with my own creativity while exploring new challenges and technologies.
            </p>

            <p className="text-zinc-300">
              I build digital things that people actually enjoy using—my apps, tools, and interactive projects 
              are crafted with clarity, intention, and a bit of personality. Clean structure, fluid user experience, 
              and constant iteration are the core of my workflow.
            </p>
          </div>

          {/* LORE / QUOTE BOX */}
          <div className="p-4 bg-zinc-900 border-2 border-dashed border-zinc-700 text-zinc-300 text-xs sm:text-sm leading-relaxed relative">
            <span className="absolute -top-2.5 left-4 bg-zinc-950 px-1.5 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
              What Inspires Me?
            </span>
            <p className="italic">
              "Progress doesn’t need to be perfect, it just needs to be consistent, so do your best!"
            </p>
          </div>

          {/* SOCIAL LINKS (Boxy Buttons) */}
          <div className="pt-2">
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3 font-bold">
              -- My Additional Links --
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/abiyanm_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-900 text-zinc-400 hover:text-purple-600 border-2 border-black flex items-center justify-center text-xl shadow-[4px_4px_0px_0px_#000] hover:bg-zinc-800 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all"
              >
                <FaInstagram />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abiyan-mirza-a468552b3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-900 text-zinc-400 hover:text-blue-400 border-2 border-black flex items-center justify-center text-xl shadow-[4px_4px_0px_0px_#000] hover:bg-zinc-800 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all"
              >
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/abiyyy07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-900 text-zinc-400 hover:text-gray-200 border-2 border-black flex items-center justify-center text-xl shadow-[4px_4px_0px_0px_#000] hover:bg-zinc-800 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}