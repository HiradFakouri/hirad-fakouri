"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Name */}
        <motion.div
          className="text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hirad Fakouri
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-4 flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a
            href="https://github.com/hiradfakouri" // Replace with your GitHub URL
            className="text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.486 2 12c0 4.419 2.865 8.166 6.839 9.49.5.09.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.166-1.111-1.477-1.111-1.477-.909-.623.07-.61.07-.61 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.092.39-1.986 1.029-2.683-.103-.253-.446-1.27.099-2.646 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 5.005 0C16.65 6.41 17.49 6.68 17.49 6.68c.545 1.377.202 2.393.099 2.646.639.697 1.028 1.591 1.028 2.683 0 3.842-2.338 4.688-4.566 4.938.36.311.682.926.682 1.867 0 1.348-.013 2.436-.013 2.769 0 .268.18.578.688.48A10.015 10.015 0 0 0 22 12c0-5.514-4.486-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/hirad-fakouri-78ba032b2/"
            className="text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.227.791 24 1.771 24h20.451C23.204 24 24 23.227 24 22.271V1.729C24 .774 23.204 0 22.225 0zM7.119 20.454H3.584V9.004h3.535v11.45zM5.35 7.483c-1.13 0-2.046-.932-2.046-2.08a2.048 2.048 0 0 1 4.092 0c0 1.148-.916 2.08-2.046 2.08zm14.405 12.971h-3.535V14.72c0-1.367-.027-3.126-1.909-3.126-1.91 0-2.204 1.493-2.204 3.02v5.84H8.571V9.004h3.394v1.563h.049c.472-.897 1.623-1.84 3.342-1.84 3.571 0 4.23 2.351 4.23 5.414v6.313z" />
            </svg>
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-6 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          © {new Date().getFullYear()} Hirad Fakouri. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}