'use client';

import { useState } from "react";

export default function Afago() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const screenshots = [
    "/projek/afago/ag-ss1.jpg",
    "/projek/afago/ag-ss3.jpg",
    "/projek/afago/ag-ss2.jpg",
    "/projek/afago/ag-ss6.jpg",
    "/projek/afago/ag-ss8.jpg",
    "/projek/afago/ag-ss9.jpg",
    "/projek/afago/ag-ss5.jpg",
    "/projek/afago/ag-ss10.jpg",
    "/projek/afago/ag-ss7.jpg",
    "/projek/afago/ag-ss4.jpg",
  ];

  return (
    <>
      <head>
        <title>Project | Afago</title>
      </head>

      <div className="bg-gray-800 min-h-screen p-6">
        {/* Judul */}
        <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Afago – Rent vehicle application
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
                
Afago is a mobile application for renting cars and motorbikes that uses down payment with a payment gateway by midtrans. Many types of vehicle brands are being rented and each brand has its own type. So the system is to book the date the vehicle will be rented and how many days the vehicle is rented. Easy settings to set orders for sellers and customers.
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
