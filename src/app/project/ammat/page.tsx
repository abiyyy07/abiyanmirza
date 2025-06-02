'use client';

import { useState } from "react";

export default function Ammat() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const screenshots = [
    "/projek/ammat/am-ss10.jpg",
    "/projek/ammat/am-ss9.jpg",
    "/projek/ammat/am-ss6.jpg",
    "/projek/ammat/am-ss3.jpg",
    "/projek/ammat/am-ss1.jpg",
    "/projek/ammat/am-ss2.jpg",
    "/projek/ammat/am-ss4.jpg",
    "/projek/ammat/am-ss5.jpg",
    "/projek/ammat/am-ss7.jpg",
    "/projek/ammat/am-ss8.jpg",
  ];

  return (
    <>
      <head>
        <title>Project | AMMAT</title>
      </head>

      <div className="bg-gray-800 min-h-screen p-6">
        {/* Judul */}
        <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          AMMAT – Mosque management mobile app
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
            <h2 className="text-2xl font-black mb-2 text-center text-white">Description</h2>
            <p className="text-white md:px-12 text-center">     
                AMMAT stands for At-Tauhid Mosque Management Application in Indonesian. It contains various features that are distinguished by their roles. Starting from the mosque youth, then there are the ranks of takmir. Then for the mosque youth, it is divided again into separate divisions and there are 5 different divisions that can be taken from each member. In addition, management for daily and also making website news is here. The purpose of making this application is to facilitate management for the future at-tauhid mosque.
            </p>
        </div>

        {/* Tech */}
        <div className="mb-8 px-2">
            <h2 className="text-2xl font-black mb-2 text-center text-white">Tech</h2>
            <p className="text-white md:px-12 text-center">
                Flutter, Dart, Firebase, Getx.
            </p>
        </div>
      </div>
    </>
  );
}
