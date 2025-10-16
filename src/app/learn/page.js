'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import { Brain, TrendingUp, Database, Zap } from 'lucide-react';

export default function Learn() {
  const resources = [
    {
      icon: Brain,
      title: 'Linear Algebra Basics',
      description: 'Understanding vectors, matrices, and their operations',
      color: 'from-purple-500 to-pink-500',
      topics: ['Vector addition', 'Matrix multiplication', 'Dot products', 'Transformations']
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning Fundamentals',
      description: 'How data structures power ML algorithms',
      color: 'from-blue-500 to-cyan-500',
      topics: ['Feature vectors', 'Training datasets', 'Weight matrices', 'Neural networks']
    },
    {
      icon: Database,
      title: 'Data Representation',
      description: 'Real-world applications of tensors',
      color: 'from-emerald-500 to-teal-500',
      topics: ['Image data (RGB)', 'Time series', 'Batch processing', 'Multi-dimensional arrays']
    },
    {
      icon: Zap,
      title: 'Deep Learning',
      description: 'Tensors in neural networks',
      color: 'from-orange-500 to-red-500',
      topics: ['Tensor operations', 'Backpropagation', 'Gradient descent', 'PyTorch & TensorFlow']
    }
  ];

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

        <div className="max-w-6xl mx-auto pt-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
              Learning Resources
            </h1>
            <p className="text-slate-600 text-xl">
              Dive deeper into data structures and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                  <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-200 transform hover:scale-105 transition-all duration-300">
                    <div className={`bg-gradient-to-r ${resource.color} p-6 text-white`}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-white bg-opacity-20 p-3 rounded-xl backdrop-blur-sm">
                          <Icon size={32} />
                        </div>
                        <h2 className="text-2xl font-bold">{resource.title}</h2>
                      </div>
                      <p className="text-lg opacity-90">{resource.description}</p>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-slate-700 mb-3">Key Topics:</h3>
                      <ul className="space-y-2">
                        {resource.topics.map((topic, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-600">
                              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                              {topic}
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl shadow-2xl p-8 border-2 border-indigo-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Recommended Learning Path</h2>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Start with Scalars', desc: 'Understand single values and basic operations' },
                { step: 2, title: 'Move to Vectors', desc: 'Learn about one-dimensional arrays and feature representation' },
                { step: 3, title: 'Explore Matrices', desc: 'Understand two-dimensional data and transformations' },
                { step: 4, title: 'Master Tensors', desc: 'Tackle multi-dimensional data in deep learning' }
              ].map((item) => (
                  <div key={item.step} className="bg-white rounded-xl p-5 shadow-md flex items-start gap-4">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
