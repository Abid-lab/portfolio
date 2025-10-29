// components/Skills/Skills.jsx
import React from 'react';

const Skills = () => {
  const skillCategories = [
    { 
      title: 'Frontend', 
      icon: '💻',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Next.js'] 
    },
    { 
      title: 'Tools & DevOps', 
      icon: '🛠️',
      items: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools', 'Webpack', 'Jest', 'Testing Library'] 
    },
    { 
      title: 'Design & UX', 
      icon: '🎨',
      items: ['Figma', 'UI/UX Design', 'Responsive Design', 'Prototyping', 'Design Systems'] 
    },
    { 
      title: 'Core Skills', 
      icon: '⭐',
      items: ['Performance', 'Accessibility', 'API Integration', 'Debugging', 'Code Review', 'Agile'] 
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/50 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-bold text-lg text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;