'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submission would go here! (This is a demo)');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
      <div className="w-full min-h-screen p-8 bg-gradient-to-br from-slate-50 to-indigo-50">
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

        <Navigation />

        <div className="max-w-4xl mx-auto pt-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h1>
            <p className="text-slate-600 text-xl">
              Have questions or feedback? We&apos;d love to hear from you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Name</label>
                  <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Email</label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                      required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Subject</label>
                  <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="What&apos;s this about?"
                      required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Message</label>
                  <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                      required
                  ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl p-8 border-2 border-purple-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Connect With Us</h2>
                <div className="space-y-4">
                  <a href="https://github.com/TechAngelX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <Github size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">GitHub</h3>
                      <p className="text-slate-600 text-sm">View our projects</p>
                    </div>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Linkedin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">LinkedIn</h3>
                      <p className="text-slate-600 text-sm">Connect professionally</p>
                    </div>
                  </a>
                  <a href="mailto:contact@techangelx.com" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="bg-red-500 p-3 rounded-lg">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Email</h3>
                      <p className="text-slate-600 text-sm">Drop us a line</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-2xl p-8 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Info</h3>
                <div className="space-y-3 text-slate-600">
                  <p>Response time: Usually within 24 hours</p>
                  <p>Based in: London, UK</p>
                  <p>Open to: Collaborations, feedback, and questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
