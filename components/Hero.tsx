import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      {/* Background decoration */}
      <img
        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
        alt="Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900 via-slate-900/40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-400 ring-1 ring-white/10 hover:ring-white/20">
              New: AI-Powered Study Assistant. <a href="#" className="font-semibold text-indigo-400"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Unlock Your Potential with <span className="text-indigo-400">Knowledge</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Access thousands of interactive courses, subject expert guides, and a world-class library. 
            Empower your learning journey with Lumina.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={onStart}
              className="group flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all"
            >
              Start Learning
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a href="#featured-books" className="text-sm font-semibold leading-6 text-white flex items-center gap-2">
              Browse Books <Sparkles size={16} className="text-amber-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
