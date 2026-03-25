import React from 'react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Approach', id: 'strategy' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Impact', id: 'results' },
    { label: 'Experience', id: 'credentials' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-5 sm:py-8">
      <div className="glass-panel w-full max-w-fit px-5 sm:px-8 py-3 sm:py-3.5 rounded-2xl flex items-center gap-4 sm:gap-10 shadow-2xl border border-white/5">
        <a
          href="#hero"
          className="font-black text-2xl tracking-tighter text-white hover:text-gold-500 transition-colors shrink-0"
        >
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
          className="shrink-0 px-5 sm:px-6 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-[10px] sm:text-xs uppercase tracking-[0.14em] font-black hover:bg-white/10 transition-all"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};