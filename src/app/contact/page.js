'use client';

import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-700 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-gray-700 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea
              className="w-full px-3 py-2 bg-gray-700 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button className="w-full bg-teal-500 py-2 rounded-md hover:bg-teal-400">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}