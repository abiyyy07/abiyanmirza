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
                            src="/projek/bb.jpg"
                            alt="Bahasa Bridge"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-extrabold text-purple-800 mb-1">Bahasa Bridge</h3>
                            <p className="text-gray-600">Mobile apps for increase and learning English skills</p>
                            <Link
                            href="https://drive.google.com/drive/folders/1FO1fm-M3j6wJAOPTr6SrNSufJmLyIe2T?usp=drive_link" target="_blanc"
                            className="mt-2 inline-block text-purple-600 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-800 hover:text-white transform duration-200"
                            >
                            View Project
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
                            <p className="text-gray-600">Mobile apps for typing competition and solo typing</p>
                            <Link
                            href="https://drive.google.com/drive/folders/1OiHnBpRHBTK7T2bnPCAJLdVZtBd5B1k-?usp=drive_link" target="_blanc"
                            className="mt-2 inline-block text-purple-600 font-semibold bg-tranparant border-2 border-purple-800 px-2 py-1 rounded-md hover:bg-purple-800 hover:text-white transform duration-200"
                            >
                            View Project
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex"><Link href={'/project'} className="bg-transparent hover:bg-purple-600 px-2 py-1 border-2 border-white text-white hover:border-purple-600 transform duration-200 font-semibold">Other project</Link>
            </div>
        </>
    )
}