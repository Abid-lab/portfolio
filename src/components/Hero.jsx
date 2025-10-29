// components/Hero/Hero.jsx
import React from 'react';

const Hero = ({ scrollToSection }) => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/Abid-lab/', 
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/', 
      icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' 
    },
    { 
      name: 'Twitter', 
      href: '#', 
      icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' 
    }
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center py-20 sm:py-24">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Available for new projects
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Abid Ullah
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Frontend Developer crafting exceptional digital experiences with modern technologies. 
              Specializing in React and building user-friendly interfaces that drive results.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View My Work
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-8 py-3.5 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
          
          <div className="flex gap-6 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group p-3 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300"
                aria-label={social.name}
              >
                <svg className="w-5 h-5 text-slate-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50 transform hover:scale-105 transition-transform duration-500">
            <div className="aspect-[4/5] w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-center space-y-4">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">Frontend Developer</div>
                  <div className="text-sm opacity-90">Creating digital experiences</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl rotate-12 shadow-lg flex items-center justify-center">
            <span className="text-sm font-bold text-slate-900">2+ Years</span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-2xl -rotate-12 shadow-lg flex items-center justify-center">
            <span className="text-xs font-bold text-white">13+ Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;