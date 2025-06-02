import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
    return (
        <>
            <head>
                <title>Abiyan - Project</title>
            </head>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white px-4 md:px-10">
                <div className="text-3xl font-bold mb-6 text-white">All My Projects</div>
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project One */}
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
                            <p className="text-gray-600">
                                Mobile app platform for learning English using a fun quiz-based method. There are 5 types of quizzes to boost your English skills.
                            </p>
                            <Link
                                href="/project/bahasa-bridge"
                                className="mt-2 mr-2 inline-block text-purple-600 font-semibold bg-transparent border-2 border-purple-800 px-3 py-1 rounded-md hover:bg-purple-800 hover:text-white transition duration-200"
                            >
                                Detail App
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/1FO1fm-M3j6wJAOPTr6SrNSufJmLyIe2T?usp=drive_link"
                                target="_blank"
                                className="mt-2 inline-block text-purple-600 font-semibold bg-transparent border-2 border-purple-800 px-3 py-1 rounded-md hover:bg-purple-800 hover:text-white transition duration-200"
                            >
                                Try App
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
                            <p className="text-gray-600">
                                Typing competition app to improve typing speed. Includes solo mode, versus match, and a ranking system.
                            </p>
                            <Link
                                href="/project/afarush"
                                className="mt-2 mr-2 inline-block text-purple-600 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-800 hover:text-white transform duration-200"
                                >
                                Detail App
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/1OiHnBpRHBTK7T2bnPCAJLdVZtBd5B1k-?usp=drive_link" target="_blanc"
                                className="mt-2 inline-block text-purple-600 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-800 hover:text-white transform duration-200"
                                >
                                Try App
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
                            <p className="text-gray-600">
                                Location sharing app that allows you and your friends to see each others positions on a map. But you can hide to privacy.
                            </p>
                            <Link
                                href="/project/geofarezly"
                                className="mt-2 mr-2 inline-block text-purple-600 font-semibold bg-transparent border-2 border-purple-800 px-3 py-1 rounded-md hover:bg-purple-800 hover:text-white transition duration-200"
                            >
                                Detail App
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/1FcLYCvseIDw2djrOyRTj48dtF22O3u_M?usp=drive_link"
                                target="_blank"
                                className="mt-2 inline-block text-purple-600 font-semibold bg-transparent border-2 border-purple-800 px-3 py-1 rounded-md hover:bg-purple-800 hover:text-white transition duration-200"
                            >
                                Try App
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
