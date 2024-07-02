import Head from 'next/head';
import { FaTools } from 'react-icons/fa';

export default function Project() {
    return (
        <>
            <head>
                <title>Abiyan - Project</title>
            </head>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
                <h1 className="text-5xl font-bold mb-4 text-purple-500">Coming Soon</h1>
                <p className="text-xl mb-8">All my project will put here soon!</p>
                <FaTools className="text-9xl text-purple-500" />
            </div>
        </>
    );
}
