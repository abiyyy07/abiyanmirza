import Image from "next/image"
import Link from "next/link"
import { FaGoogleDrive } from "react-icons/fa"

export default function ProjectHome() {
    return (
        <>
            <div className="text-3xl font-bold mb-4 text-white">My Projects</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Project One */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative pb-2/3">
                            <Image
                            src="/projek/bb.jpg"
                            alt="Bahasa Bridge"
                            width={500}
                            height={500}
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
                            <p className="text-gray-600">Mobile apps platform for easy learning english with quiz method. Available 5 type of quiz you can answer and increase your english skill.</p>
                            <Link
                                href="/project/bahasa-bridge"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                                >
                                    Detail App
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/1FO1fm-M3j6wJAOPTr6SrNSufJmLyIe2T?usp=drive_link" target="_blanc"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                                >
                                    <div className="flex items-center gap-2">Try App <FaGoogleDrive /></div>
                            </Link>
                        </div>
                    </div>
                    {/* Project two */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative pb-2/3">
                            <Image
                            src="/projek/afarush.jpg"
                            alt="Bahasa Bridge"
                            width={500}
                            height={500}
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
                            <p className="text-gray-600">Mobile apps for typing competition to more faster typing. Have to mode, solo and versus (matching match) and have rank system.</p>
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
                    {/* Project three */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative pb-2/3">
                            <Image
                            src="/projek/geofarezly.jpg"
                            alt="Bahasa Bridge"
                            width={500}
                            height={500}
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
                            <p className="text-gray-600">Mobile application to display your position and location on map. You can invite your friend to sharing location each other</p>
                            <Link
                                href="/project/geofarezly"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                                >
                                Detail App
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/1FcLYCvseIDw2djrOyRTj48dtF22O3u_M?usp=drive_link" target="_blanc"
                                className="mt-2 inline-block mr-2 text-white bg-purple-800 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-950 hover:border-purple-950 hover:text-white transform duration-200"
                                >
                                <div className="flex items-center gap-2">Try App <FaGoogleDrive /></div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex"><Link href={'/project'} className="bg-transparent hover:bg-purple-800 px-2 py-1 border-2 border-white text-white hover:border-purple-800 transform duration-200 font-semibold">Other project</Link>
            </div>
        </>
    )
}