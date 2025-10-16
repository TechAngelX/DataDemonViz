'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Github, Linkedin, Mail, Brain, Code, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full min-h-screen p-8 bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Logo and Branding */}
      <div className="absolute top-4 left-4 flex items-center gap-3">
        <img
          src="/images/logo.png"
          alt="Tech Angel X Logo"
          className="w-16 h-16 rounded-full shadow-lg border-2 border-white"
        />
        <div className="text-sm">
          <p className="font-bold text-gray-800">TechAngel X</p>
          <p className="text-gray-600 text-xs">by Ricki Angel</p>
        </div>
      </div>

      {/* Home Button */}
      <Link href="/">
        <button className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <Home size={20} />
          Home
        </button>
      </Link>

      <div className="max-w-4xl mx-auto pt-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
            About Data Demon
          </h1>
          <p className="text-slate-600 text-xl">
            Making machine learning concepts accessible to everyone
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-indigo-400 to-purple-500 p-3 rounded-xl">
              <Brain size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Our Mission</h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Data Demon was created to help students, educators, and ML enthusiasts understand the fundamental building blocks of machine learning and data science. We believe that complex concepts should be accessible through clear, interactive visualisations.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Whether you're just starting your journey in data science or teaching others, Data Demon provides an intuitive way to grasp how scalars, vectors, matrices, and tensors work in real-world applications.
          </p>
        </div>

        {/* What You'll Learn Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl p-8 mb-8 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-xl">
              <Sparkles size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">What You'll Learn</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-purple-600 mb-2 text-lg">Scalars</h3>
              <p className="text-slate-600">Single numerical values - the foundation of all data structures</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-blue-600 mb-2 text-lg">Vectors</h3>
              <p className="text-slate-600">One-dimensional arrays representing features and attributes</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-emerald-600 mb-2 text-lg">Matrices</h3>
              <p className="text-slate-600">Two-dimensional grids used in datasets and transformations</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-orange-600 mb-2 text-lg">Tensors</h3>
              <p className="text-slate-600">Multi-dimensional data structures powering deep learning</p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-2xl p-8 mb-8 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-3 rounded-xl">
              <Code size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Built With</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js 15', 'React 19', 'Tailwind CSS', 'Lucide Icons'].map((tech, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center shadow-md">
                <p className="font-semibold text-slate-700">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Creator Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-2 border-slate-200">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Created By</h2>
          <div className="flex flex-col items-center">
            <img
              src="/images/logo.png"
              alt="Ricki Angel"
              className="w-32 h-32 rounded-full shadow-xl border-4 border-indigo-200 mb-4"
            />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Ricki Angel</h3>
            <p className="text-slate-600 text-center mb-6 max-w-2xl">
              Tech Angel X is dedicated to creating educational tools that make complex technical concepts accessible and engaging for learners worldwide.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/TechAngelX" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-400 transition-all duration-300 transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm mb-8">
          <p>Open source and available on GitHub</p>
          <p className="mt-2">© 2024 Tech Angel X. Making learning accessible.</p>
        </div>
      </div>
    </div>
  );
}
