'use client';
// pages/index.js
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
     
   
      <Navbar />
      <div className="flex flex-col bg-cover bg-center  items-center justify-center min-h-screen px-4 text-center"
      style={{
        backgroundImage: "url('/images/Me/Me.jpg')",
      }}
      >
        
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My World
        </motion.h1>

        
        <p className="mt-4 text-lg text-gray-100">
          I am a passionate developer, musician, and creative problem solver.
        </p>
        <div className="mt-8 flex space-x-4">
          <a href="/projects" className="px-4 py-2 bg-teal-500 rounded-md hover:bg-teal-400">View Projects</a>
          <a href="/about" className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">About Me</a>
        </div>
      </div>
      <div>
      {/* Your main content here */}
      <Footer />
    </div>

    
    
    </>
  );
}