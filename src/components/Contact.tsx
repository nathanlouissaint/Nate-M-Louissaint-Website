
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="glass-panel rounded-[3rem] p-16 md:p-24 overflow-hidden relative border border-gold-500/10">
      {/* Dynamic ambient lights */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-xs font-black text-gold-500 uppercase tracking-[0.5em] mb-8">Strategic Intake</h2>
        <h3 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">Let's Talk <br/> Growth Outcomes.</h3>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Currently optimizing platforms for scale. If you require executive-grade 
          technical strategy or organic growth operations, reach out below.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="group">
            <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] mb-2 block px-2">Principal Name</label>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-white/2 border border-white/5 rounded-xl px-6 py-5 focus:outline-none focus:border-gold-500 focus:bg-white/5 transition-all text-white text-sm"
            />
          </div>
          <div className="group">
            <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] mb-2 block px-2">Corporate Email</label>
            <input 
              type="email" 
              placeholder="email@company.com" 
              className="w-full bg-white/2 border border-white/5 rounded-xl px-6 py-5 focus:outline-none focus:border-gold-500 focus:bg-white/5 transition-all text-white text-sm"
            />
          </div>
          <div className="md:col-span-2 group">
            <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] mb-2 block px-2">Project Brief / Growth Goals</label>
            <textarea 
              placeholder="Describe your current platform challenges and desired outcomes..." 
              rows={5}
              className="w-full bg-white/2 border border-white/5 rounded-xl px-6 py-5 focus:outline-none focus:border-gold-500 focus:bg-white/5 transition-all text-white text-sm resize-none"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="md:col-span-2 bg-white text-black font-black text-xs uppercase tracking-[0.2em] py-6 rounded-xl hover:bg-gold-500 transition-all shadow-2xl hover:scale-[1.01] active:scale-95"
          >
            Send Message
          </button>
        </form>

        <div className="mt-20 flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
          <a href="mailto:nathan.louissaint.work@gmail.com" className="text-gray-500 hover:text-white transition-all flex items-center gap-2">
            <span className="w-4 h-[1px] bg-gold-500/30"></span>
            Email
          </a>
          <a href="https://www.linkedin.com/in/nathan-louissaint-3a17a3387/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all flex items-center gap-2">
            <span className="w-4 h-[1px] bg-gold-500/30"></span>
            LinkedIn
          </a>
          <a href="https://github.com/nathanlouissaint" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all flex items-center gap-2">
            <span className="w-4 h-[1px] bg-gold-500/30"></span>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
