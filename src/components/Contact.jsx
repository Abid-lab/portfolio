// components/Contact/Contact.jsx
import React from 'react';

const Contact = () => {
  const contactInfo = [
    { icon: '✉️', label: 'Email', value: 'abidahmadzai0888@gmail.com', href: 'mailto:alex.abidahmadzai0888@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+1 000000000', href: 'tel:+15551234567' },
    { icon: '📍', label: 'Location', value: 'Khybar Pakhtunkhwa', href: '#' }
  ];

  const socialLinks = ['GitHub', 'LinkedIn', 'Twitter'];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello. I'm always open to new opportunities and interesting conversations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="text-2xl">{contact.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500">{contact.label}</div>
                    <div className="font-semibold group-hover:text-blue-600 transition-colors">{contact.value}</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 px-4 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 font-medium"
                >
                  {social}
                </a>
              ))}
            </div>
            
            <a 
              href="/resume.pdf"
              className="inline-flex items-center justify-center w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
          
          <form className="rounded-2xl border border-slate-200 p-8 shadow-lg bg-white space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Name</label>
                <input 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300" 
                  placeholder="Your Name" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Email</label>
                <input 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300" 
                  placeholder="your@email.com" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Subject</label>
              <input 
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300" 
                placeholder="Project Discussion" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Message</label>
              <textarea 
                rows="6"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 resize-none" 
                placeholder="Tell me about your project, ideas, or how we can collaborate..." 
              />
            </div>
            
            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Send Message
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;