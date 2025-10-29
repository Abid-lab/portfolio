// components/Projects/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    { 
      title: 'GitHub User Explorer', 
      desc: 'Advanced user search with profile analytics, repository insights, and contribution graphs.',
      tags: ['React', 'TypeScript', 'Tailwind', 'GitHub API'],
      gradient: 'from-blue-500 to-cyan-500',
      demo: 'https://github-profile-finder-azure-gamma.vercel.app/',
      code: 'https://github.com/Abid-lab/Github_profile_finder'
    },
    { 
      title: 'Weather Dashboard', 
      desc: 'Real-time weather data with interactive maps, forecasts, and beautiful data visualizations.',
      tags: ['React', 'Chart.js', 'API Integration', 'CSS'],
      gradient: 'from-green-500 to-teal-500',
      demo: '#',
      code: '#'
    },
    { 
      title: 'Country Info Hub', 
      desc: 'Comprehensive country database with maps, statistics, and cultural information.',
      tags: ['HTML', 'REST API', 'JavaScript', 'CSS'],
      gradient: 'from-purple-500 to-pink-500',
      demo: 'https://countryinformationfinder.vercel.app/',
      code: 'https://github.com/Abid-lab/countryinformationfinder'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity in action
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:scale-105"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-slate-600 leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <a 
                    href={project.demo}
                    className="flex-1 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800 transition-all duration-300 group/live"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4 ml-2 group-hover/live:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href={project.code}
                    className="flex-1 inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/"
            className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-8 py-3 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
          >
            View All Projects on GitHub
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;