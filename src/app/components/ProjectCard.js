'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
      <a href={link} className="text-teal-400 mt-4 inline-block">
        Learn More &rarr;
      </a>
    </motion.div>
  );
}