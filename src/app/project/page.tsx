import Image from 'next/image';
import Link from 'next/link';
import { FaGoogleDrive, FaLock } from 'react-icons/fa';

export default function Project() {
    return (
        <>
            <head>
                <title>Abiyan | Project</title>
            </head>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white px-4 md:px-10">
                <div className="text-3xl font-bold mb-6 text-white mt-8">All My Projects</div>
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* ====================================================== */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/projek/ammat.jpg"
                                alt="AMMAT"
                                width={500}
                                height={500}
                                className="w-full"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-extrabold text-purple-800 mb-1">AMMAT</h3>
                            {/* Tags */}
                            <div className="flex items-center mt-2 mb-2 gap-1 overflow-hidden truncate whitespace-nowrap">
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Mobile App</div>
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Flutter</div>
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Mosque/Social App</div>
                            </div>
                            {/* Description */}
                            <p className="text-gray-600">
                                Mobile app who functionally manage mosque system like member, event, or any data who needed for digital.
                            </p>
                            <Link
                                href="/project/ammat"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                            >
                                Detail App
                            </Link>
                            <Link
                                href=""
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                            >
                                <div className="flex items-center gap-2">Private App <FaLock /></div>
                            </Link>
                        </div>
                    </div>

                    {/* ====================================================== */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/projek/afago.jpg"
                                alt="Bahasa Bridge"
                                width={500}
                                height={500}
                                className="w-full"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-extrabold text-purple-800 mb-1">Afago</h3>
                            {/* Tags */}
                            <div className="flex items-center mt-2 mb-2 gap-1 overflow-hidden truncate whitespace-nowrap">
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Mobile App</div>
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Flutter</div>
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Rent App</div>
                            </div>
                            {/* Description */}
                            <p className="text-gray-600">
                                Mobile app who functionally for easy rent vehicle with payment gateway (midtrans). Available two type of vehicle and easy manage order.
                            </p>
                            <Link
                                href="/project/afago"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                            >
                                Detail App
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/16PHZAcxSLc2cXdYQY6V1UJ-u_AsjiUHY?usp=drive_link"
                                target="_blank"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                            >
                                <div className="flex items-center gap-2">Try App <FaGoogleDrive /></div>
                            </Link>
                        </div>
                    </div>

                    {/* ====================================================== */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/projek/bb.jpg"
                                alt="Bahasa Bridge"
                                width={500}
                                height={500}
                                className="w-full"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-extrabold text-purple-800 mb-1">Bahasa Bridge</h3>
                            {/* Tags */}
                            <div className="flex items-center mt-2 mb-2 gap-1 overflow-hidden truncate whitespace-nowrap">
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Mobile App</div>
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Flutter</div>
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Education App</div>
                            </div>
                            {/* Description */}
                            <p className="text-gray-600">
                                Mobile app platform for learning English using a fun quiz-based method. There are 5 types of quizzes to boost your English skills.
                            </p>
                            <Link
                                href="/project/bahasa-bridge"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                            >
                                Detail App
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/1FO1fm-M3j6wJAOPTr6SrNSufJmLyIe2T?usp=drive_link"
                                target="_blank"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                            >
                                <div className="flex items-center gap-2">Try App <FaGoogleDrive /></div>
                            </Link>
                        </div>
                    </div>

                    {/* Project Two */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/projek/afarush.jpg"
                                alt="Afa Rush"
                                width={500}
                                height={500}
                                className="w-full"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-extrabold text-purple-800 mb-1">Afa Rush</h3>
                            {/* Tags */}
                            <div className="flex items-center mt-2 mb-2 gap-1 overflow-hidden truncate whitespace-nowrap">
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Mobile App</div>
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Flutter</div>
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Typing App</div>
                            </div>
                            {/* Description */}
                            <p className="text-gray-600">
                                Typing competition app to improve typing speed. Includes solo mode, versus match, and a ranking system.
                            </p>
                            <Link
                                href="/project/afarush"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                                >
                                Detail App
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/1OiHnBpRHBTK7T2bnPCAJLdVZtBd5B1k-?usp=drive_link" target="_blanc"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                                >
                                <div className="flex items-center gap-2">Try App <FaGoogleDrive /></div>
                            </Link>
                        </div>
                    </div>

                    {/* Project Three */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/projek/geofarezly.jpg"
                                alt="GeoFarezly"
                                width={500}
                                height={500}
                                className="w-full"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-extrabold text-purple-800 mb-1">GeoFarezly</h3>
                            {/* Tags */}
                            <div className="flex items-center mt-2 mb-2 gap-1 overflow-hidden truncate whitespace-nowrap">
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Mobile App</div>
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Flutter</div>
                                <div className="border-purple-800 border-2 text-purple-800 px-2 rounded-lg font-semibold">Realtime Location App</div>
                            </div>
                            {/* Description */}
                            <p className="text-gray-600">
                                Location sharing app that allows you and your friends to see each others positions on a map. But you can hide to privacy.
                            </p>
                            <Link
                                href="/project/geofarezly"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                            >
                                Detail App
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/1FcLYCvseIDw2djrOyRTj48dtF22O3u_M?usp=drive_link"
                                target="_blank"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                            >
                                <div className="flex items-center gap-2">Try App <FaGoogleDrive /></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
