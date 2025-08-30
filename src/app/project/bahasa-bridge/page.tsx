'use client';

import { useState } from "react";

export default function BahasaBridge() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const screenshots = [
    "/projek/bahasa-bridge/bb-ss1.jpg",
    "/projek/bahasa-bridge/bb-ss2.jpg",
    "/projek/bahasa-bridge/bb-ss3.jpg",
    "/projek/bahasa-bridge/bb-ss4.jpg",
    "/projek/bahasa-bridge/bb-ss5.jpg",
    "/projek/bahasa-bridge/bb-ss6.jpg",
    "/projek/bahasa-bridge/bb-ss7.jpg",
    "/projek/bahasa-bridge/bb-ss8.jpg",
    "/projek/bahasa-bridge/bb-ss9.jpg",
    "/projek/bahasa-bridge/bb-ss10.jpg",
    "/projek/bahasa-bridge/bb-ss11.jpg",
  ];

  const techStack = [
    "Flutter",
    "Firebase",
    "Dart",
    "GetX",
    "Firestore",
  ];

  const libraries = [
    "GetX",
    "cloud_firestore",
    "firebase_auth",
    // Tambahkan jika ada
  ];

  return (
    <>
      <head>
        <title>Project | Bahasa Bridge</title>
      </head>

      <div className="bg-gray-800 min-h-screen p-6">
        {/* Judul */}
        <h1 className="text-3xl font-bold text-purple-500 mb-4 text-center">
          Bahasa Bridge – A Mobile Learning App
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="text-white border-2 border-white pr-2 pl-2 rounded-lg text-lg font-semibold">Mobile App</div>
          <div className="text-white border-2 border-white pr-2 pl-2 rounded-lg text-lg font-semibold">Flutter</div>
          <div className="text-white border-2 border-white pr-2 pl-2 rounded-lg text-lg font-semibold">Education App</div>
        </div>

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
                Bahasa Bridge is a mobile application platform for learning English for Indonesian. There are various quiz methods provided to support learning and provide results and final points for assessment. Various types of quizzes, such as multiple choices in Grammar, Vocabulary, Reading Comprehension, and Idioms Phrases. We also provide puzzles for children to get closer to learning. Then there is also a manual typing type that arranges words. Leaderboards are also provided and displayed as learning motivation to continue to develop in the future.
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
