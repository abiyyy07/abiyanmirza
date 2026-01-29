'use client';

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaTimes, FaLayerGroup, FaCode, FaRocket, FaPenNib, FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function BlogAfareza() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const screenshots = [
    "/projek/blog-afareza.png",
    "/projek/blog-afareza/bg-ss1.png",
    "/projek/blog-afareza/bg-ss2.png",
    "/projek/blog-afareza/bg-ss3.png",
    "/projek/blog-afareza/bg-ss4.png",
    "/projek/blog-afareza/bg-ss5.png",
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-purple-500/30">
      <title>Afareza Blog | Abiyan</title>

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
            Afareza Studio Blog
          </h1>
          <p className="text-xl text-purple-400 font-medium mb-8">Official Insight & Technology Hub</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Next JS", "Content Platform", "MDX", "UI/UX"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-gray-900 border border-gray-800 rounded-full text-sm font-semibold text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Hero Gallery - Horizontal Scroll (Lanskap 16:9) */}
        <section className="mb-16">
          <div className="flex overflow-x-auto gap-4 pb-6 snap-x hide-scrollbar mask-fade-edges">
            {screenshots.map((src, index) => (
              <div 
                key={index}
                className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 snap-center cursor-zoom-in group shadow-xl transition-all hover:border-purple-500/50"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Blog Screenshot ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">🔍</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-2 italic flex items-center justify-center gap-2">
            <span>← Scroll to see articles</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
            <span>Click to enlarge →</span>
          </p>
        </section>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-900/40 border border-gray-800 p-8 rounded-3xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaRocket className="text-purple-500" /> Project Overview
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                <strong>Afareza Studio Blog</strong> is a dedicated content platform built to share professional insights, technical tutorials, and the latest updates from the digital asset industry. It serves as the primary voice of our indie studio, connecting our expertise with a wider community.
                <br /><br />
                The platform really focused on the insight can be connected to each other from articles, share about programming tech. This is a one way blog, we are with the public.
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
                {["Next JS", "React", "Tailwind CSS", "MDX"].map((tech) => (
                  <span key={tech} className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-lg text-sm font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-3xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FaLayerGroup className="text-purple-500" /> Web Features
              </h3>
              <ul className="text-sm text-gray-400 space-y-3">
                <li className="flex items-center gap-2">✓ SEO Optimized Content</li>
                <li className="flex items-center gap-2">✓ Easy to Search Articles</li>
                <li className="flex items-center gap-2">✓ Dynamic Articles</li>
                <li className="flex items-center gap-2">✓ Mobile Friendly Reading Experience</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
            <FaTimes size={28} />
          </button>
          <div className="relative w-full max-w-6xl aspect-video">
            <Image
              src={selectedImage}
              alt="Blog Full Preview"
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
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </div>
  );
}