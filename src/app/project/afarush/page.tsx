'use client';

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaTimes, FaLayerGroup, FaCode, FaRocket } from "react-icons/fa";
import Link from "next/link";

export default function Afarush() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const screenshots = [
    "/projek/afarush/ar-ss6.jpg",
    "/projek/afarush/ar-ss4.jpg",
    "/projek/afarush/ar-ss7.jpg",
    "/projek/afarush/ar-ss3.jpg",
    "/projek/afarush/ar-ss1.jpg",
    "/projek/afarush/ar-ss2.jpg",
    "/projek/afarush/ar-ss8.jpg",
    "/projek/afarush/ar-ss11.jpg",
    "/projek/afarush/ar-ss12.jpg",
    "/projek/afarush/ar-ss13.jpg",
    "/projek/afarush/ar-ss14.jpg",
    "/projek/afarush/ar-ss10.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-purple-500/30">
      <title>Afarush | Abiyan</title>

      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 lg:py-24">
        {/* Back Button */}
        <Link 
          href="/project" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent text-white">
            Afarush
          </h1>
          <p className="text-xl text-purple-400 font-medium mb-8">Typing Competition App</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Mobile App", "Flutter", "Gaming", "Competitive"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-gray-900 border border-gray-800 rounded-full text-sm font-semibold text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Hero Gallery - Horizontal Scroll */}
        <section className="mb-12">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x hide-scrollbar mask-fade-edges">
            {screenshots.map((src, index) => (
              <div 
                key={index}
                className="relative flex-shrink-0 w-64 aspect-[9/19] rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 snap-center cursor-zoom-in group shadow-2xl transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">🔍</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">Scroll horizontally to see more →</p>
        </section>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Main Description */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-900/40 border border-gray-800 p-8 rounded-3xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaRocket className="text-purple-500" /> Description
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Afarush is a mobile application dedicated to fast-typing competitions. While typing tests are commonly found on desktops, Afarush brings this competitive experience to mobile users. 
                <br /><br />
                The app provides two distinct competition modes: Multiplayer and Solo. In Multiplayer, two players face off in a real-time race to determine who is the fastest typist, with winners gaining points to climb the ranks. The app serves as both entertainment and a genuine tool to test and improve your mobile typing speed.
              </p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-4">
            <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-3xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FaCode className="text-purple-500" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Dart", "Firebase", "GetX"].map((tech) => (
                  <span key={tech} className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-lg text-sm font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-3xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FaLayerGroup className="text-purple-500" /> Key Features
              </h3>
              <ul className="text-sm text-gray-400 space-y-3">
                <li className="flex items-center gap-2">✓ Real-time Multiplayer Battle</li>
                <li className="flex items-center gap-2">✓ Solo Training Mode</li>
                <li className="flex items-center gap-2">✓ Global Ranking & Leaderboards</li>
                <li className="flex items-center gap-2">✓ WPM (Words Per Minute) Tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
            <FaTimes size={24} />
          </button>
          <div className="relative w-full max-w-sm h-[80vh]">
            <Image
              src={selectedImage}
              alt="Preview Full"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
}