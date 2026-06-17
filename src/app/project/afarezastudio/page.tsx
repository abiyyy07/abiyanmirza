"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaTimes, FaLayerGroup, FaCode, FaRocket, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function Afarezastudio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // State untuk melacak indeks foto aktif dan status hover slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const screenshots = [
    "/projek/afarezastudio.png",
    "/projek/afarezastudio/as-ss1.png",
    "/projek/afarezastudio/as-ss2.png",
    "/projek/afarezastudio/as-ss3.png",
    "/projek/afarezastudio/as-ss4.png",
    "/projek/afarezastudio/as-ss5.png",
  ];

  const autoSlideInterval = 4000;

  // Navigasi manual slide (next)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  }, [screenshots.length]);

  // Navigasi manual slide (sebelumnya)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  // Slide otomatis
  useEffect(() => {
    if (isHovered) return;
    const slideTimer = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(slideTimer);
  }, [nextSlide, isHovered]);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 font-mono selection:bg-emerald-400/30 pb-20 relative">
      <title>Afareza Studio | Abiyan</title>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 lg:pt-28">
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-10 group transition-colors"
        >
          <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to View All Projects</span>
        </Link>

        {/* HEADER SPECIFICATION */}
        <section className="text-center md:text-left mb-6 border-b-4 border-black pb-6">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Afareza Studio
          </h1>
          <p className="text-sm md:text-base text-zinc-400 uppercase tracking-wide font-medium mb-6">
            Company Profile of Afareza Studio
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-start select-none">
            {["Web App", "Next JS", "Company Profile"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-950 border-2 border-emerald-400 text-xs font-bold text-emerald-400 uppercase">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* VIEW PHOTOS */}
        <section 
          className="mb-10 bg-zinc-950 border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000] relative select-none group/slider"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* CORE CAROUSEL VIEWER PANEL */}
          <div className="relative w-full aspect-video border-2 border-black bg-zinc-900 overflow-hidden">
            
            {/* SLIDE WRAPPER (Smooth Transition) */}
            <div 
              className="absolute inset-0 flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-full flex-shrink-0 cursor-zoom-in group/item overflow-hidden"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`RID Screenshot ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="transition-all duration-300 contrast-110"
                  />
                  {/* HOVER EXPAND OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-black text-emerald-400 border border-emerald-400 font-bold text-[10px] uppercase px-3 py-1.5 shadow-[2px_2px_0px_0px_#000]">
                      Expand Photo
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MANUAL BUTTON CONTROL: PREVIOUS */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-black text-zinc-400 hover:text-emerald-400 border-2 border-black hover:border-emerald-400 w-8 h-8 flex items-center justify-center font-bold text-xs active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
              aria-label="Previous Slide"
            >
              <FaChevronLeft size={12} />
            </button>

            {/* MANUAL BUTTON CONTROL: NEXT */}
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-black text-zinc-400 hover:text-emerald-400 border-2 border-black hover:border-emerald-400 w-8 h-8 flex items-center justify-center font-bold text-xs active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
              aria-label="Next Slide"
            >
              <FaChevronRight size={12} />
            </button>
          </div>

          {/* STEP INDICATORS (DOTS ALA PETA GAME) */}
          <div className="flex justify-center gap-2 mt-4">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 border border-black transition-all ${
                  currentIndex === index 
                    ? "bg-emerald-400 scale-110 shadow-[1px_1px_0px_0px_#000]" 
                    : "bg-zinc-800 hover:bg-zinc-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* DATA CORE DETAILS */}
        <div className="grid md:grid-cols-12 gap-6 items-start">
          {/* LEFT CONTENT */}
          <div className="md:col-span-8 bg-zinc-950 border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_#000] space-y-4">
            <h2 className="text-md font-black uppercase text-white tracking-wide flex items-center gap-2 border-b border-zinc-800 pb-3">
              <FaRocket className="text-emerald-400 text-sm" /> Project Overview
            </h2>
            <div className="text-zinc-400 text-xs sm:text-sm leading-relaxed tracking-wide text-justify space-y-4">
              <p>
                <span className="text-white font-bold">Afareza Studio</span> is an independent digital studio. We take pride in our simplicity, allowing us to focus deeply on craftsmanship and innovation without compromise.
              </p>
              <p>
                As an indie studio, we bridge the gap between complex technical challenges and intuitive user experiences. From scalable SaaS platforms to specialized digital assets, we build foundations for growth.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-4 space-y-4 w-full">
            
            {/* Tech Module */}
            <div className="bg-zinc-950 border-4 border-black p-5 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
                <FaCode className="text-emerald-400" /> TECH STACK
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Next JS", "React", "Tailwind CSS", "Firebase"].map((tech) => (
                  <span key={tech} className="bg-zinc-900 text-emerald-400 border border-zinc-800 px-2 py-1 text-[10px] font-black uppercase tracking-tight">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature Module */}
            <div className="bg-zinc-950 border-4 border-black p-5 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
                <FaLayerGroup className="text-emerald-400" /> Features System
              </h3>
              <ul className="text-[11px] font-bold uppercase text-zinc-400 space-y-2.5 tracking-wide">
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">&gt;</span> Company Profile
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">&gt;</span> Featured the Project
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">&gt;</span> Introduce Company
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">&gt;</span> Company Information
                </li>
              </ul>
            </div>

          </div>

        </div>
      </main>

      {/* FULL PREVIEW DECRYPTION LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-all"
          onClick={() => setSelectedImage(null)}
        >
          {/* WINDOW STYLE FOR LIGHTBOX */}
          <div 
            className="bg-zinc-950 border-4 border-black w-full max-w-5xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LIGHTBOX BAR */}
            <div className="bg-black text-emerald-400 px-4 py-2 flex justify-between items-center text-xs border-b-2 border-black font-bold uppercase select-none">
              <span>Viewing Detail of the Photo</span>
              <button 
                onClick={() => setSelectedImage(null)}
                className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              >
                <FaTimes /> CLOSE
              </button>
            </div>
            
            {/* IMAGE FRAME CONTAINMENT */}
            <div className="p-1 bg-zinc-900 flex items-center justify-center aspect-video relative w-full">
              <Image
                src={selectedImage}
                alt="Afareza Studio Web App View"
                fill
                className="object-contain p-2 contrast-105"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}