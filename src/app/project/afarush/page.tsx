'use client';

import { useState } from "react";

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
    <>
      <head>
        <title>Project | Afarush</title>
      </head>

      <div className="bg-gray-800 min-h-screen p-6">
        {/* Judul */}
        <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Afarush – Typing competition app
        </h1>

        {/* Screenshot scrollable */}
        <div className="flex overflow-x-auto space-x-4 mb-6 px-16 hide-scrollbar">
          {screenshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="w-40 h-auto rounded shadow-md cursor-pointer flex-shrink-0"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>

        {/* Lightbox overlay */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full rounded shadow-lg"
            />
          </div>
        )}

        {/* Deskripsi */}
        <div className="mb-8 px-2">
            <h2 className="text-2xl font-black mb-2 text-center text-white">Deskripsi</h2>
            <p className="text-white px-12 text-center">
                Afarush is a mobile application for fast typing competitions via mobile phones. Usually familiar on the website and run for desktop, but this is different and is on mobile. Afarush provides 2 modes of competition, namely multiplayer and solo, and each is distinguished by the calculation of points and ranks. Multiplayer is found by 2 people who type quickly and will be given points to the winner and vice versa. Leaderboard is also presented, divided into 2 modes so that each mode has its own top score. This application is for entertainment and tests how fast you are in typing on your mobile phone.
            </p>
        </div>

        {/* Tech */}
        <div className="mb-8 px-2">
            <h2 className="text-2xl font-black mb-2 text-center text-white">Tech</h2>
            <p className="text-white px-12 text-center">
                Flutter, Dart, Firebase, Getx.
            </p>
        </div>
      </div>
    </>
  );
}
