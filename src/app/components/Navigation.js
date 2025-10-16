'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Info, BookOpen, Mail } from 'lucide-react';

export default function Navigation() {
    return (
        <nav className="absolute top-4 right-4 flex gap-3">
            <Link href="/">
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Home size={18} />
                    <span className="hidden sm:inline">Home</span>
                </button>
            </Link>
            <Link href="/about">
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Info size={18} />
                    <span className="hidden sm:inline">About</span>
                </button>
            </Link>
            <Link href="/learn">
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <BookOpen size={18} />
                    <span className="hidden sm:inline">Learn</span>
                </button>
            </Link>
            <Link href="/contact">
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Mail size={18} />
                    <span className="hidden sm:inline">Contact</span>
                </button>
            </Link>
        </nav>
    );
}
