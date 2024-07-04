import Image from "next/image"
import Link from "next/link"

export default function ProjectHome() {
    return (
        <>
            <div className="text-3xl font-bold mb-4 text-white">My Projects</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Project One */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative pb-2/3">
                            <Image
                            src="/projek/emporium.jpeg"
                            alt="Emporium Petshop"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-extrabold text-purple-800 mb-1">Emporium Petshop</h3>
                            <p className="text-gray-600">Simple E-Commerce website with payment gateway and cost delivery calculate</p>
                            <Link
                            href="https://emporium-petshop.vercel.app/" target="_blanc"
                            className="mt-2 inline-block text-purple-600 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-800 hover:text-white transform duration-200"
                            >
                            View Project
                            </Link>
                        </div>
                    </div>

                    {/* Project Two */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative pb-2/3">
                            <Image
                            src="/projek/agriculture.jpeg"
                            alt="Smart Agriculture"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-extrabold text-purple-800 mb-1">Smart Agriculture</h3>
                            <p className="text-gray-600">Simple informative static website for information about Smart Agriculture, small project IoT.</p>
                            <Link
                            href="https://smart-agriculture-nine.vercel.app/" target="_black"
                            className="mt-2 inline-block text-purple-600 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-800 hover:text-white transform duration-200"
                            >
                            View Project
                            </Link>
                        </div>
                    </div>

                    {/* Project Three */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative pb-2/3">
                            <Image
                            src="/projek/echo.jpeg"
                            alt="Echo Pines Estate"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-extrabold text-purple-800 mb-1">Echo Pines Estate</h3>
                            <p className="text-gray-600">Simple company profile for housing area business and modern static website</p>
                            <Link
                            href="https://echo-pines-estate.vercel.app/" target="_black"
                            className="mt-2 inline-block text-purple-600 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-800 hover:text-white transform duration-200"
                            >
                            View Project
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex">
                    <Link href={'/project'} className="bg-transparent hover:bg-purple-600 px-2 py-1 border-2 border-white text-white hover:border-purple-600 transform duration-200 font-semibold">Other project</Link>
            </div>
        </>
    )
}