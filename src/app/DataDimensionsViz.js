'use client';

import React, { useState } from 'react';
import { Box, Layers, Grid3X3, Circle } from 'lucide-react';

export default function DataDimensionsViz() {
  const [activeType, setActiveType] = useState('scalar');

  const types = {
    scalar: {
      icon: Circle,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      title: 'Scalar',
      dimensions: '1×1',
      description: 'Just one number',
      example: 'a = 25',
      realWorld: 'The house costs $25k',
      visual: (
          <div className="flex items-center justify-center h-64">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300">
                25
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-purple-600 font-semibold">
                Single Value
              </div>
            </div>
          </div>
      )
    },
    vector: {
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      title: 'Vector',
      dimensions: '1×3',
      description: 'Features of one house',
      example: 'v = [1200, 3, 2]',
      realWorld: '1200 sqft, 3 bedrooms, 2 bathrooms',
      visual: (
          <div className="flex items-center justify-center h-64">
            <div className="flex gap-4">
              {[
                { value: '1200', label: 'sqft' },
                { value: '3', label: 'beds' },
                { value: '2', label: 'baths' }
              ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-24 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-3xl font-bold shadow-xl transform hover:scale-110 transition-transform duration-300">
                      {item.value}
                    </div>
                    <div className="mt-3 text-blue-600 font-semibold text-sm">{item.label}</div>
                  </div>
              ))}
            </div>
          </div>
      )
    },
    matrix: {
      icon: Grid3X3,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-300',
      title: 'Matrix',
      dimensions: '3×3',
      description: 'Data for several houses',
      example: 'X = [[1200, 3, 2], [1500, 4, 3], [900, 2, 1]]',
      realWorld: 'Each row = one house; each column = a feature',
      visual: (
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col gap-3">
              {[
                [1200, 3, 2],
                [1500, 4, 3],
                [900, 2, 1]
              ].map((row, i) => (
                  <div key={i} className="flex gap-3">
                    {row.map((val, j) => (
                        <div key={j} className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                          {val}
                        </div>
                    ))}
                  </div>
              ))}
            </div>
          </div>
      )
    },
    tensor: {
      icon: Box,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      title: 'Tensor',
      dimensions: '2×2×3',
      description: 'Multi-dimensional data',
      example: 'T = [[[1200, 3, 2], [1500, 4, 3]], [[900, 2, 1], [1300, 3, 2]]]',
      realWorld: 'Multiple datasets of houses, or images with height × width × color channels',
      visual: (
          <div className="flex items-center justify-center h-64">
            <div className="relative">
              <div className="absolute flex flex-col gap-2">
                {[[1200, 3, 2], [1500, 4, 3]].map((row, i) => (
                    <div key={i} className="flex gap-2">
                      {row.map((val, j) => (
                          <div key={j} className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-md flex items-center justify-center text-white text-sm font-bold shadow-lg">
                            {val}
                          </div>
                      ))}
                    </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 opacity-60 translate-x-5 translate-y-5">
                {[[900, 2, 1], [1300, 3, 2]].map((row, i) => (
                    <div key={i} className="flex gap-2">
                      {row.map((val, j) => (
                          <div key={j} className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center text-white text-sm font-bold shadow-lg">
                            {val}
                          </div>
                      ))}
                    </div>
                ))}
              </div>
            </div>
          </div>
      )
    }
  };

  const current = types[activeType];
  const IconComponent = current.icon;

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

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
              Data Demon
            </h1>
            <p className="text-slate-600 text-lg">
              Machine Learning Data Structures Visualiser
            </p>
            <p className="text-slate-600 text-lg">
              To help understand scalar, vector, matrix, and tensor data structures
            </p>
          </div>

          <div className="flex gap-4 mb-8 justify-center flex-wrap">
            {Object.entries(types).map(([key, type]) => {
              const Icon = type.icon;
              return (
                  <button
                      key={key}
                      onClick={() => setActiveType(key)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                          activeType === key
                              ? `bg-gradient-to-r ${type.color} text-white shadow-lg`
                              : 'bg-white text-slate-600 hover:shadow-md'
                      }`}
                  >
                    <Icon size={20} />
                    {type.title}
                  </button>
              );
            })}
          </div>

          <div className={`${current.bgColor} rounded-3xl shadow-2xl overflow-hidden border-2 ${current.borderColor} transition-all duration-500`}>
            <div className={`bg-gradient-to-r ${current.color} p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm">
                  <IconComponent size={40} />
                </div>
                <div>
                  <h2 className="text-4xl font-bold">{current.title}</h2>
                  <p className="text-xl opacity-90 mt-1">{current.dimensions}</p>
                </div>
              </div>
              <p className="text-lg opacity-90">{current.description}</p>
            </div>

            <div className="bg-white p-8">
              {current.visual}
            </div>

            <div className="p-8 border-t-2 border-slate-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <h3 className="font-bold text-slate-700 mb-3 text-lg">Code Example</h3>
                  <code className="text-sm bg-slate-100 p-3 rounded-lg block font-mono text-slate-800">
                    {current.example}
                  </code>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <h3 className="font-bold text-slate-700 mb-3 text-lg">Real-World Meaning</h3>
                  <p className="text-slate-600 leading-relaxed">{current.realWorld}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-slate-500 text-sm">
            Click on different data types to explore their structure and meaning
          </div>
        </div>
      </div>
  );
}
