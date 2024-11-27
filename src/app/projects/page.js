'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 'project-one',
      title: 'Filter GUI',
      description: 'A website that can filter any image',
      thumbnail: '/images/filterGUI/project-one-1.png',
    },
    {
      id: 'project-two',
      title: 'Tic Tac Toe GUI',
      description: 'A fun tic tac toe game made with pyGame',
      thumbnail: '/images/Tic Tac Toe/project-two-3.png',
    },
    {
      id: 'project-three',
      title: 'TodoAPP',
      description: 'A website that you can create an accout and store your daily tasks',
      thumbnail: '/images/TodoApp/project-three-1.png',
    },
    {
      id: 'project-four',
      title: 'Timer',
      description: 'A professional online timer application with a fun song at the end.',
      thumbnail: '/images/Timer/project-four-1.png',
    },
    {
      id: 'project-five',
      title: 'Internal and External Stakeholder Quiz Game',
      description: 'A quiz game made for national 5 bussiness managment',
      thumbnail: '/images/IandE/project-five-1.png',
    },
    {
      id: 'project-six',
      title: 'Calculator GUI',
      description: 'A calculator with a very easy to use GUI',
      thumbnail: '/images/Calculator/project-six-1.png',
    },
  ];

  return (
    <div className="min-h-screen px-8 py-16 bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-200 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
              <Link href={`/projects/${project.id}`}>
                <button className="mt-4 px-4 py-2 bg-teal-500 rounded-md hover:bg-teal-400">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
  );
}