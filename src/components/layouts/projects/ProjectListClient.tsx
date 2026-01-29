'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGoogleDrive, FaLock, FaGlobe, FaSearch } from 'react-icons/fa';
import { BiLogoPlayStore } from 'react-icons/bi';
import { projects } from '@/lib/projects/allProject';

export default function ProjectListClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const types = ['All', 'Web App', 'Mobile App'];

  // Logic Filtering
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter berdasarkan tag 'Mobile App' atau 'Web App'
      const matchesType = selectedType === 'All' || project.tags.includes(selectedType);
      
      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const getLinkContent = (type?: string) => {
    switch (type) {
      case 'drive':
        return { label: 'Try App', icon: <FaGoogleDrive className="text-green-400" /> };
      case 'playstore':
        return { label: 'Get on PlayStore', icon: <BiLogoPlayStore className="text-blue-400" /> };
      case 'web':
        return { label: 'Visit Web', icon: <FaGlobe className="text-cyan-400" /> };
      default:
        return { label: 'Try App', icon: <FaGlobe className="text-gray-400" /> };
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-purple-500/30 pb-20">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[0%] w-[30%] h-[30%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 lg:pt-24">
        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-gradient-to-r text-white text-center md:text-left">
            Featured Projects
          </h1>
          
          {/* Search Bar - Full Width */}
          <div className="relative mt-8 w-full group">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
            <input 
              type="text"
              placeholder="Search projects by name or description..."
              className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl py-4 pl-14 pr-4 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all text-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        <div className="flex flex-col-reverse lg:flex-row gap-10">
          {/* Main Content: Project Grid (Left) */}
          <div className="flex-grow lg:w-3/4">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((item) => (
                  <div 
                    key={item.id} 
                    className="group bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/5 flex flex-col"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[10px] uppercase tracking-tighter font-bold px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-6 leading-relaxed">{item.description}</p>
                      
                      <div className="mt-auto flex gap-3">
                        <Link href={item.detailLink} className="flex-[1.5] text-center py-2.5 bg-white text-black font-bold rounded-xl text-xs hover:bg-purple-50 transition-colors">
                          View Details
                        </Link>
                        {item.isPrivate ? (
                          <button className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-gray-800/50 text-gray-500 rounded-xl text-xs cursor-not-allowed border border-gray-700/50">
                            <FaLock size={10} /> Private
                          </button>
                        ) : (
                          <Link href={item.externalLink || "#"} target="_blank" className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 border border-gray-700 rounded-xl text-xs hover:bg-gray-800 hover:border-gray-600 transition-all">
                            {getLinkContent(item.linkType).icon}
                            <span>Try</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-gray-900/20 border border-dashed border-gray-800 rounded-3xl">
                <p className="text-gray-500 font-medium">No projects match your search.</p>
              </div>
            )}
          </div>

          {/* Sidebar: Filter (Right) */}
          <aside className="lg:w-1/4 flex-shrink-0">
            <div className="sticky top-28 bg-gray-900/40 border border-gray-800 rounded-3xl p-6 backdrop-blur-sm">
              <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-gray-500 mb-6">Filter By Type</h4>
              <div className="flex flex-col gap-3">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`text-left px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                      selectedType === type 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40 translate-x-1' 
                      : 'bg-gray-800/30 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-gray-800">
                <p className="text-xs text-gray-500 leading-relaxed italic">
                  Showing {filteredProjects.length} projects in this category.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}