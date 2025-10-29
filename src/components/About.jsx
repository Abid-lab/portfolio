// components/About/About.jsx
import React from 'react';

const About = () => {
  const stats = [
    { number: '13+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '9+', label: 'Happy Clients' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <svg className="w-20 h-20 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl shadow-xl flex items-center justify-center">
            <span className="text-white font-bold text-center text-sm">Passionate About Code</span>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              With over 2 years of experience in frontend development, I've had the privilege of working on 
              diverse projects ranging from enterprise e-commerce platforms to innovative startup applications. 
              My journey began with a simple curiosity about how websites work, which quickly evolved into a 
              passion for creating seamless, intuitive user experiences.
            </p>
            <p>
              I specialize in the React ecosystem and modern development tools. I believe that exceptional code 
              should not only function flawlessly but also be maintainable, scalable, and a joy to work with.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="rounded-xl bg-white p-6 text-center shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;