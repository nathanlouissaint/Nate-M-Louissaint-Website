import { motion } from "framer-motion";

export const HeroV2 = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 max-w-7xl mx-auto text-white">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-pattern opacity-40"></div>

      {/* Content Grid */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-white"
        >
          <p className="text-xs uppercase tracking-widest text-white mb-4">
            Full-Stack Engineer • Performance Optimization
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I’m Nate.
            <br />
            I build scalable
            <br />
            full-stack web apps.
          </h1>

          <p className="text-white mb-8">
            Focused on improving speed, scalability, and user experience across high-traffic React/Next.js platforms.
          </p>

          <div className="flex gap-4">
            <a
              href="https://docs.google.com/document/d/14NTZ_83kHSZEMS0DO_mkvL4ebp6XN0zEVK2fKzoRBeM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg"
            >
              View Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/nathan-louissaint-3a17a3387/"
              target="_blank"
              rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 rounded-lg text-white">
              Linked In
              
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[280px] md:w-[360px] aspect-square rounded-full overflow-hidden border border-white/10">
            <img
              src={`/Nate-M-Louissaint-Website/Nate.jpg`}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};