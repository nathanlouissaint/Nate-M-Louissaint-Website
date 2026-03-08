import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xpqywvrq', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel rounded-[3rem] p-16 md:p-24 overflow-hidden relative border border-gold-500/10">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {!submitted ? (
          <>
            <h2 className="text-xs font-black text-gold-500 uppercase tracking-[0.5em] mb-6">
              Contact
            </h2>

            <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight leading-none">
              Let&apos;s Work Together
            </h3>

            <p className="text-gray-400 mb-14 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Have a project in mind? Send a message and I&apos;ll get back to you soon.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left"
            >
              <div className="group">
                <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] mb-2 block px-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full bg-white/2 border border-white/5 rounded-xl px-6 py-5 focus:outline-none focus:border-gold-500 focus:bg-white/5 transition-all text-white text-sm"
                />
              </div>

              <div className="group">
                <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] mb-2 block px-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  className="w-full bg-white/2 border border-white/5 rounded-xl px-6 py-5 focus:outline-none focus:border-gold-500 focus:bg-white/5 transition-all text-white text-sm"
                />
              </div>

              <div className="md:col-span-2 group">
                <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] mb-2 block px-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about what you need..."
                  required
                  className="w-full bg-white/2 border border-white/5 rounded-xl px-6 py-5 focus:outline-none focus:border-gold-500 focus:bg-white/5 transition-all text-white text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 bg-white text-black font-black text-xs uppercase tracking-[0.2em] py-6 rounded-xl hover:bg-gold-500 transition-all shadow-2xl hover:scale-[1.01] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </>
        ) : (
          <div className="py-16">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Thank You
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              I&apos;ll be in touch shortly. Thank you for your patience.
            </p>
          </div>
        )}

        <div className="mt-20 flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
          <a
            href="mailto:nathan.louissaint.work@gmail.com"
            className="text-gray-500 hover:text-white transition-all flex items-center gap-2"
          >
            <span className="w-4 h-[1px] bg-gold-500/30"></span>
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/nathan-louissaint-3a17a3387/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-all flex items-center gap-2"
          >
            <span className="w-4 h-[1px] bg-gold-500/30"></span>
            LinkedIn
          </a>
          <a
            href="https://github.com/nathanlouissaint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-all flex items-center gap-2"
          >
            <span className="w-4 h-[1px] bg-gold-500/30"></span>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};