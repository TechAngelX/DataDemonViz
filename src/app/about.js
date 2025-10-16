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
          <p className="font-bold text-gray-800">Tech Angel X</p>
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
