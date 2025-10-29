// components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  const socialLinks = ['GitHub', 'LinkedIn', 'Twitter'];

  return (
    <footer className="border-t border-slate-200 py-12 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
         Abid Ullah
        </div>
        <p className="text-slate-600 max-w-md mx-auto">
          Frontend Developer passionate about creating beautiful, functional, and user-friendly web experiences.
        </p>
        <div className="flex justify-center gap-6 text-slate-500">
          {socialLinks.map((social) => (
            <a key={social} href='https://github.com/Abid-lab/' className="hover:text-blue-600 transition-colors">
              {social}
            </a>
          ))}
        </div>
        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} Abid Ullah. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;