import React from "react";
import profile from "../assets/profile.png";

export const About: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center py-16 sm:py-20 md:py-24">
      
      {/* Image */}
      <div className="flex justify-center lg:justify-start order-1">
        <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
          <img
            src={profile}
            alt="Nathan Louissaint"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-2">
        <h2 className="text-xs sm:text-sm font-black text-gold-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">
          About
        </h2>

        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-tight">
          Product Engineer <br className="hidden sm:block" />
          Focused on Systems.
        </h3>

        <div className="space-y-5 sm:space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed font-light">
          <p>
            I'm Nathan Louissaint, a full-stack product engineer focused on
            building scalable web applications and analytics-driven systems.
            My work combines product development, performance optimization,
            and growth infrastructure to create digital products that perform
            reliably at scale.
          </p>

          <p>
            I have experience working on high-traffic platforms where
            engineering decisions directly impact usability, performance,
            and operational stability. My background spans front-end
            development, analytics systems, experimentation frameworks,
            and digital growth infrastructure.
          </p>

          <p>
            I enjoy solving complex product problems by building new
            applications, improving system performance, and designing
            data-driven workflows that help teams make better decisions.
          </p>
        </div>
      </div>

    </section>
  );
};