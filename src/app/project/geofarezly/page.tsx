'use client';

import { useState } from "react";

export default function Geofarezly() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  return (
    <>
      <head>
        <title>Project | Geofarezly</title>
      </head>

      <div className="bg-gray-800 min-h-screen p-6">
        {/* Judul */}
        <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Geofarezly – A Mobile app sharing realtime location
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
                GeoFarezly is a mobile application for sharing locations with friends in real time. GeoFarezly provides the accuracy of the displayed location. For privacy, you can also hide your location from your friends so that they are not seen. In addition, if you are bored with the standard map theme, you can change it yourself in the settings. The friendship feature is the main key to supporting elements in the application, because for sharing. You can search by UniqueID then ask for friendship until accepted and officially become friends and can see each other's locations.
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
