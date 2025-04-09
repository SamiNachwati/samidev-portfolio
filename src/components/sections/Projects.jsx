import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { RevealOnScroll } from '../RevealOnScroll';
import nodechat from '../icons/nodechat.png';
import smartchip from '../icons/smartchip.png';
import petsphere from '../icons/petsphere.png';
export const Projects = () => {
    return (
        <section id="projects"
        className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                    Featured Projects
                </h2>
                <div className='max-w-5xl mx-auto px-4 flex flex-wrap gap-5'>
                <div className="flex flex-col lg:flex-row p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <img
                            className="w-full lg:w-1/2 object-cover rounded-lg border-1 border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-border"
                            src={petsphere}
                            alt="PetSphere"
                        />
                        <div className="flex flex-col justify-between p-4 lg:w-1/2">
                            <h3 className="text-xl font-bold mb-2">
                                <strong>PetSphere</strong>
                            </h3>
                            <p className="mb-4">
                            Pet inventory management application designed for store efficiency
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1 pb-3">
                                {["React", "Vite", "Tailwind CSS", "Node.js", "SQLlite", "Express.js"].map((item, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className='p-2'>
                                View Project
                                <a href="https://github.com/SamiNachwati/petsphere" target="_blank" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                    <FontAwesomeIcon icon={faUpRightFromSquare} className='ml-3'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <img
                            className="w-full lg:w-1/2 object-cover rounded-lg border-1 border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-border"
                            src={nodechat}
                            alt="Node Chat"
                        />
                        <div className="flex flex-col justify-between p-4 lg:w-1/2">
                            <h3 className="text-xl font-bold mb-2">
                                <strong>NodeChat</strong>
                            </h3>
                            <p className="mb-4">
                                Dynamic chat app enabling real-time user communication
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1 pb-3">
                                {["C#", "ASP.NET", "SQL Server", "JavaScript", "HTML", "CSS"].map((item, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className='p-2'>
                                View Project
                                <a href="https://github.com/SamiNachwati/nodechat" target="_blank" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                    <FontAwesomeIcon icon={faUpRightFromSquare} className='ml-3'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <img
                        className="w-full lg:w-1/2 object-cover rounded-lg border-1 border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-border"
                        src={smartchip}
                        alt="Smart Chip"
                        />

                        <div className="flex flex-col justify-between p-4 lg:w-1/2">
                            <h3 className="text-xl font-bold mb-2">
                                <strong>Smart Chip</strong>
                            </h3>
                            <p className="mb-4">
                                Analytical tool that analyzes the best CPU based on user needs
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1 pb-3">
                                {["Python", "matplot", "Streamlit"].map((item, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className='p-2'>
                                View Project
                                <a href="https://github.com/SamiNachwati/smart-chip" target="_blank" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                    <FontAwesomeIcon icon={faUpRightFromSquare} className='ml-3'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}