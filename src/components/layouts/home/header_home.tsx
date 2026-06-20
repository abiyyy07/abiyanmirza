"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ComponentsHeaderHome() {
  const roles = [
    "Fullstack Web Developer",
    "Hobbyist Game Dev (Godot)",
    "Hobbyist Mobile App Developer (Flutter)",
    "Tech Enthusiast",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Efek Mesin Tik Retro (Typewriter Effect)
  useEffect(() => {
    const handleType = () => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        // Sedang mengetik
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Jeda saat teks selesai diketik penuh
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Sedang menghapus
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-8 sm:px-12 md:px-20 lg:px-36 pt-24 md:pt-16 bg-zinc-900 font-mono text-white relative overflow-hidden"
    >
      {/* Dekorasi Grid Tipis Latar Belakang ala Retro Dev */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      {/* LEFT CONTENT */}
      <div className="w-full text-center md:text-left space-y-6 z-10">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
          Hi, I'm <br className="hidden sm:inline md:hidden" />
          <span className="bg-emerald-400 text-black px-3 py-1 inline-block my-1 shadow-[4px_4px_0px_0px_#000] border-2 border-black transform -rotate-1">
            Abiyan Mirza
          </span>
        </h1>

        {/* Retro Typewriter Area */}
        <div className="h-10 flex items-center justify-center md:justify-start">
          <p className="text-lg sm:text-xl font-bold text-zinc-400 uppercase tracking-wide">
            <span className="text-emerald-400">&gt; </span>
            <span className="text-white">{currentText}</span>
            <span className="animate-ping font-extrabold text-emerald-400">|</span>
          </p>
        </div>

        {/* Dialogue/Quote Box ala RPG Game */}
        <div className="p-4 bg-zinc-950 border-4 border-black shadow-[4px_4px_0px_0px_#000] relative">
          <span className="absolute -top-3 left-4 bg-zinc-900 px-2 text-xs text-zinc-500 font-bold uppercase">
            Quote:
          </span>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed tracking-wide">
            "Code like you’re solving a mystery. Build like you’re changing the world."
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="https://www.instagram.com/abiyanm_/"
            target="_blank"
            className="inline-block px-6 py-3 bg-emerald-400 text-black font-black uppercase border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:bg-emerald-300 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0px_0px_#000] transition-all w-fit mx-auto md:mx-0"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE (PIXEL FLAVORED FRAME) */}
      <div className="w-full flex justify-center md:justify-end z-10 mb-6">
        <div className="relative bg-zinc-950 p-3 border-4 border-black shadow-[12px_12px_0px_0px_#000] mb-4">
          
          {/* Label Kecil di Sudut Frame */}
          <div className="absolute top-2 left-4 text-[10px] text-zinc-600 font-bold tracking-widest uppercase">
            ABIYAN-PROFILE.JPG
          </div>

          <div className="relative border-2 border-black overflow-hidden mt-4 md:mb-0 pb-4">
            <Image
              src="/abiyan-profile.jpg"
              alt="Abiyan Mirza"
              width={350}
              height={350}
              className="object-cover transition-all duration-300 contrast-125"
              priority
            />
          </div>
          
          {/* Ornamen Sudut ala Detektor Layar */}
          <div className="flex justify-between items-center mt-3 px-1 text-[11px] text-emerald-400 font-bold">
            <span>HELLO THERE, YOU ARE VISITING ABIYAN SITE</span>
          </div>
        </div>
      </div>
    </section>
  );
}