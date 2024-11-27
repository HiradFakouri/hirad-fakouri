'use client';

import Image from 'next/image';
import { use } from 'react'

const projectData = {
  'project-one': {
    title: 'Filter GUI',
    description:
      'The filter program is a web application built with Next.js for the frontend and Express.js for the backend. This architecture allows for a seamless integration of server-side processing and client-side interactivity. Users can upload images of various file types, and the application processes these images with a range of filters.',
    images: [
      '/images/filterGUI/project-one-1.png',
      '/images/filterGUI/project-one-2.png',
      '/images/filterGUI/project-one-3.png',
    ],
    links: {
      github: 'https://github.com/HiradFakouri/filter-webGUI',
      liveDemo: 'https://www.youtube.com/watch?v=1CDwUclwCFs',
    },
  },
  'project-two': {
    title: 'Tic Tac Toe GUI',
    description:
      'A simple implementation of the classic Tic Tac Toe game, designed for two players or single-player mode with a basic AI opponent. Built for fun and learning, this project combines fundamental programming concepts with a user-friendly interface.',
    images: [
      '/images/Tic Tac Toe/project-two-1.png',
      '/images/Tic Tac Toe/project-two-2.png',
      '/images/Tic Tac Toe/project-two-3.png'
    ],
    links: {
      github: 'https://github.com/HiradFakouri/tictactoe2.0/tree/main',
    },
  },
  'project-three': {
    title: 'TodoApp',
    description:
      'A simple and efficient Todo Application built with Flask, designed to help you manage your tasks effectively. This app features user authentication for secure access and stores data persistently using MongoDB.',
    images: [
      '/images/TodoApp/project-three-1.png',
      '/images/TodoApp/project-three-2.png',
    ],
    links: {
      github: 'https://github.com/HiradFakouri/TodoApp',
    },
  },
  'project-four': {
    title: 'Timer',
    description:
      'A sleek and customizable Timer Application built with Next.js, designed for productivity and fun. This app features custom time settings, preset easy times, pause/resume functionality, and a delightful tune when the timer ends.',
    images: [
      '/images/Timer/project-four-1.png',
      '/images/Timer/project-four-2.png',
      '/images/Timer/project-four-3.png',
      '/images/Timer/project-four-4.png'
    ],
    links: {
      github: 'https://github.com/HiradFakouri/TodoApp',
      liveDemo: 'https://timer-9teo.vercel.app/'
    },
  },
  'project-five': {
    title: 'Internal and External Stakeholder Quiz Game',
    description:
      'A fun and interactive Quiz Game designed to help users learn about internal and external stakeholders in a business context. Built for National 5 Business Management',
    images: [
      '/images/IandE/project-five-1.png',
      '/images/IandE/project-five-2.png',
      '/images/IandE/project-five-3.png',
      '/images/IandE/project-five-4.png'
    ],
    links: {
    },
  },
  'project-six': {
    title: 'Calculator GUI',
    description:
      'A user-friendly Graphical User Interface (GUI) Calculator designed for simple and efficient arithmetic operations. Built as a fun and educational project, this calculator provides all the basic functionalities with a sleek, intuitive interface.',
    images: [
      '/images/Calculator/project-six-1.png',
      '/images/Calculator/project-six-2.png',
      '/images/Calculator/project-six-3.png',
    ],
    links: {
      github: 'https://github.com/HiradFakouri/GUIcalculator/',
    },
  },
};

export default function ProjectDetails({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const project = projectData[id];

  if (!project) {
    return <div className="text-center mt-20 text-gray-100">Project not found</div>;
  }

  return (
    <div className="min-h-screen px-8 py-16 bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <p className="mb-8">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {project.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            width={600}
            height={400}
            className="w-full h-200 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="flex space-x-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-500 rounded-md hover:bg-teal-400"
          >
            View on GitHub
          </a>
        )}
        {project.links.liveDemo && (
          <a
            href={project.links.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-500 rounded-md hover:bg-teal-400"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
