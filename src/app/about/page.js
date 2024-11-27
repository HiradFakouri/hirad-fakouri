'use client';

//pages/about.js
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-8 py-16 flex flex-col items-center bg-gray-900 text-gray-100">
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
        <div className="max-w-3xl text-center space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello! I’m Hirad Fakouri, a passionate and dedicated individual with a deep love for technology, creativity, and problem-solving. Since moving to Scotland in 2017, I’ve been fortunate to immerse myself in a culture that values innovation and collaboration, which has significantly shaped my personal and professional journey.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            From an early age, I’ve been captivated by the power of computers to transform ideas into reality. This passion led me to explore computer science, a field where logic meets creativity. I’ve honed my skills through coursework and projects, including learning the intricacies of full-stack development to solve real-world problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            While technology is my career focus, music has always been my soul’s language. As a composer, guitarist, and band leader, I’ve spent years channeling emotions into melodies, leading ensembles, and mentoring fellow musicians. These experiences have taught me invaluable skills like teamwork, leadership, and creative problem-solving, which seamlessly complement my technical pursuits.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I’m driven to carve out a future where I can merge my technical expertise with my creative vision. I aspire to contribute to cutting-edge technologies that enhance lives, whether through designing intuitive user interfaces, developing machine learning models, or creating impactful software solutions.
           This website is a reflection of my journey—a place to share my projects, stories, and ideas. I hope it inspires you to connect, collaborate, and dream bigger.
          </motion.p>
        </div>
        

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-teal-500 rounded-md hover:bg-teal-400"
          >
            View My Projects
          </a>
        </motion.div>
        </div>
    </>
  );
}