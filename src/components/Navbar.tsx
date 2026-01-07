
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Strategy', id: 'strategy' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Results', id: 'results' },
    { label: 'Credentials', id: 'credentials' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-8">
      <div className="glass-panel px-8 py-3.5 rounded-2xl flex items-center gap-10 shadow-2xl border border-white/5">
        <a href="#hero" className="font-black text-2xl tracking-tighter text-white hover:text-gold-500 transition-colors">
          NL<span className="text-gold-500">.</span>
        </a>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-white ${
                activeSection === item.id ? 'text-gold-500' : 'text-gray-500'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-black text-black text-[10px] uppercase tracking-tighter font-black px-5 py-2.5 rounded-lg hover:bg-gold-500 hover:text-black transition-all"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};
