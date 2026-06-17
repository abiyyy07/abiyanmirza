"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaTimes, FaLayerGroup, FaCode, FaRocket, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function Geofarezly() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // State manajemen indeks aktif slider dan sensor hover mouse
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const screenshots = [
    "/projek/geofarezly/gf-ss8.jpg",
    "/projek/geofarezly/gf-ss2.jpg",
    "/projek/geofarezly/gf-ss3.jpg",
    "/projek/geofarezly/gf-ss4.jpg",
    "/projek/geofarezly/gf-ss1.jpg",
    "/projek/geofarezly/gf-ss9.jpg",
    "/projek/geofarezly/gf-ss5.jpg",
    "/projek/geofarezly/gf-ss6.jpg",
    "/projek/geofarezly/gf-ss7.jpg",
  ];

  const autoSlideInterval = 4000;

  // Navigasi otomatis/manual ke kanan (Batas dikurangi 3 karena menampilkan 3 gambar sekaligus)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= screenshots.length - 3 ? 0 : prevIndex + 1
    );
  }, [screenshots.length]);

  // Navigasi manual ke kiri
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 3 : prevIndex - 1
    );
  };

  // Siklus putar otomatis slider
  useEffect(() => {
    if (isHovered) return;
    const slideTimer = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(slideTimer);
  }, [nextSlide, isHovered]);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 font-mono selection:bg-emerald-400/30 pb-20 relative">
      <title>GeoFarezly | Abiyan</title>

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
            Geofarezly
          </h1>
          <p className="text-sm md:text-base text-zinc-400 uppercase tracking-wide font-medium mb-6">
            Realtime Location Sharing App
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-start select-none">
            {["Mobile App", "Flutter", "Realtime Location"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-950 border-2 border-emerald-400 text-xs font-bold text-emerald-400 uppercase">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* VIEW PHOTOS (PORTRAIT TRIPLE CONFIGURATION FOR MOBILE APP SCREENSHOTS) */}
        <section 
          className="mb-10 bg-zinc-950 border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000] relative select-none group/slider"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* CAROUSEL VIEWER PANEL - Skala lebar max-w-3xl agar menampung 3 bingkai potret secara presisi */}
          <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] sm:aspect-[16/11] border-2 border-black bg-zinc-900 overflow-hidden">
            
            {/* SLIDE WRAPPER (Sistem geser berbasis kelipatan sepertiga area / 33.333%) */}
            <div 
              className="absolute inset-0 flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {screenshots.map((src, index) => (
                <div
                  key={index}
                  className="relative w-1/3 h-full flex-shrink-0 border-r border-black last:border-r-0 cursor-zoom-in group/item overflow-hidden p-1.5 bg-zinc-950"
                  onClick={() => setSelectedImage(src)}
                >
                  <div className="relative w-full h-full border border-zinc-800 overflow-hidden">
                    <Image
                      src={src}
                      alt={`Screenshot ${index + 1}`}
                      fill
                      priority={index < 3}
                      className="transition-all duration-300 contrast-105 object-cover"
                    />
                    {/* HOVER EXPAND OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-black text-emerald-400 border border-emerald-400 font-bold text-[9px] uppercase px-2.5 py-1 shadow-[2px_2px_0px_0px_#000]">
                        Expand [0{index + 1}]
                      </span>
                    </div>
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

          {/* STEP INDICATORS (SLIDER DOTS) */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-4 max-w-xs mx-auto">
            {screenshots.slice(0, screenshots.length - 2).map((_, index) => (
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
              <FaRocket className="text-emerald-400 text-sm" /> Description
            </h2>
            <div className="text-zinc-400 text-xs sm:text-sm leading-relaxed tracking-wide text-justify space-y-4">
              <p>
                <span className="text-white font-bold">GeoFarezly</span> is a mobile application for sharing locations with friends in real time. GeoFarezly provides the accuracy of the displayed location. For privacy, you can also hide your location from your friends so that they are not seen.
              </p>
              <p>
                The friendship feature is the main key; search by UniqueID, send a request, and once accepted, you can see each other&apos;s positions on a highly customizable map interface.
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
                {["Flutter", "Dart", "Firebase", "GetX"].map((tech) => (
                  <span key={tech} className="bg-zinc-900 text-emerald-400 border border-zinc-800 px-2 py-1 text-[10px] font-black uppercase tracking-tight">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature Module */}
            <div className="bg-zinc-950 border-4 border-black p-5 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
                <FaLayerGroup className="text-emerald-400" /> Key Features
              </h3>
              <ul className="text-[11px] font-bold uppercase text-zinc-400 space-y-2.5 tracking-wide">
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">&gt;</span> Realtime Map Tracking
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">&gt;</span> Privacy Mode (Hide Location)
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">&gt;</span> Custom Map Themes
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">&gt;</span> UniqueID Friend System
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      {/* FULL PREVIEW PORTRAIT LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-all animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* WINDOW STYLE FOR LIGHTBOX - Mengunci tinggi maksimum jendela, bukan lebarnya */}
          <div 
            className="bg-zinc-950 border-4 border-black h-full max-h-[100vh] aspect-[9/19] shadow-[8px_8px_0px_0px_#000] relative flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LIGHTBOX BAR */}
            <div className="bg-black text-emerald-400 px-3 py-2 flex justify-between items-center text-[10px] sm:text-xs border-b-4 border-black font-bold uppercase select-none flex-shrink-0">
              <span className="truncate pr-2">PREVIEW APP</span>
              <button 
                onClick={() => setSelectedImage(null)}
                className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 text-[10px] sm:text-[11px] flex-shrink-0"
              >
                <FaTimes /> CLOSE
              </button>
            </div>
            
            {/* IMAGE FRAME CONTAINMENT - Mengisi sisa ruang jendela secara penuh dan fleksibel */}
            <div className="relative flex-1 w-full bg-zinc-900 p-2">
              <Image
                src={selectedImage}
                alt="System Preview"
                fill
                className="object-contain p-2 contrast-105"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}