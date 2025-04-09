import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import makLogo from '../icons/mak_logo.jpeg';
import goLogo from '../icons/go_integrations_logo.jpeg';
import mohawkLogo from '../icons/mohawkcollege_logo.jpeg';
import arbelos from '../icons/arbelos.jpeg'
import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {

    const frontendSkills = ["React", "Angular", "Tailwind CSS", "TypeScript", "JavaScript"]
    const backendSkills = ["C#", "Java", "Python", "Node.js", ".NET", "MySQL", "SQL Server", "PostgreSQL", "MongoDB"]

    return (
        <section id="about" 
        className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className='max-w-3xl mx-auto px-4'>
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                        About Me
                    </h2>

                    <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition all'>
                        <p className='text-gray-300 mb-6'>
                            Innovative developer with a passion for building real impactful software solutions with a flavor of creativity. 
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='rounded-xl p-6 hover:translate-y-1 transition all'>
                                <h3 className='text-xl font-bold mb-4'>
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((skill, index) => (
                                        <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='rounded-xl p-6 hover:translate-y-1 transition all'>
                                <h3 className='text-xl font-bold mb-4'>
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((skill, index) => (
                                        <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-6 mt-8'>
                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition all'>
                            <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faGraduationCap} />
                                Education
                            </h3>
                            <ul className='list-disc list-inside text-gray-300 space-y-3'> 
                                <li>
                                    <strong>Advanced Diploma in Software Development</strong> - Mohawk College (2022 - 2025)
                                </li>
                                <li>
                                    <strong>Relevant Coursework</strong>: Data Structures & Algorithms, Client Side Web Programming, Software Quality & Testing, Database Theory, Mobile Web Programming 
                                </li>
                            </ul>
                        </div>
                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition all'>
                            <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                Work Experience
                            </h3>
                            <div className='space-y-8 text-gray-300'>
                                <div>
                                    <div className='flex justify-between items-top mb-2'>
                                        <div className='flex items-center gap-5'>
                                            <img src={arbelos} alt="Arbelos Interactive" className='w-10 h-10 mr-2' />
                                            <div>
                                                <h4 className='font-bold text-lg'>
                                                    Software Developer
                                                </h4>
                                                <h4>
                                                    Arbelos Interactive
                                                </h4>
                                            </div>
                                        </div>
                                        <p className='text-sm'>
                                            (Jan 2025 - April 2025)
                                        </p>
                                    </div>
                                    <p className='text-sm'>
                                    Designed and delivered a robust room booking system for a podcast studio, featuring role-based access for users and admins.
                                    </p>
                                </div>

                                <div>
                                    <div className='flex justify-between items-top mb-2'>
                                        <div className='flex items-center gap-5'>
                                            <img src={makLogo} alt="MAK Consulting Group" className='w-10 h-10 mr-2' />
                                            <div>
                                                <h4 className='font-bold text-lg'>
                                                    Software Developer Intern
                                                </h4>
                                                <h4>
                                                    Mak Consulting Group
                                                </h4>
                                            </div>
                                        </div>
                                        <p className='text-sm'>
                                            (Sept 2024 - Dec 2024)
                                        </p>
                                    </div>
                                    <p className='text-sm'>
                                        Developed and maintained web applications for Manufacturing Execution Systems (MES)
                                    </p>
                                </div>

                                <div>
                                    <div className='flex justify-between items-top mb-2'>
                                        <div className='flex items-center gap-5'>
                                            <img src={goLogo} alt="Go Integrations" className='w-10 h-10 mr-2' />
                                            <div>
                                                <h4 className='font-bold text-lg'>
                                                    Software Developer Intern
                                                </h4>
                                                <h4>
                                                    Go Integrations
                                                </h4>
                                            </div>
                                        </div>
                                        <p className='text-sm'>
                                            (May 2024 - Aug 2024)
                                        </p>
                                    </div>
                                    <p className='text-sm'>
                                        Designed, developed, and deployed powerful software integration several e-commerce clients  
                                    </p>
                                </div>

                                <div>
                                    <div className='flex justify-between items-top mb-2'>
                                        <div className='flex items-center gap-5'>
                                            <img src={mohawkLogo} alt="Mohawk College" className='w-10 h-10 mr-2' />
                                            <div>
                                                <h4 className='font-bold text-lg'>
                                                    Python Developer
                                                </h4>
                                                <h4>
                                                    Mohawk College
                                                </h4>
                                            </div>
                                        </div>
                                        <p className='text-sm'>
                                            (May 2023 - Aug 2023)
                                        </p>
                                    </div>
                                    <p className='text-sm'>
                                        Tested, designed, and enhanced Python scripts for verifying discrete math solutions for college students
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}