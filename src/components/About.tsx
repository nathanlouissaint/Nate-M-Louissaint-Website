import React from "react";
import profile from "../assets/profile.png";

export const About: React.FC = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-20 items-center py-24">

      {/* Image */}
      <div className="flex justify-center lg:justify-start">
        <div className="relative w-[320px] h-[400px] rounded-2xl overflow-hidden border border-white/10">
          <img
            src={profile}
            alt="Nathan Louissaint"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="max-w-xl">
        <h2 className="text-xs font-black text-gold-500 uppercase tracking-[0.4em] mb-6">
          About
        </h2>

        <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
          Product Engineer <br />Focused on Systems.
        </h3>

        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
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
            I enjoy solving complex product problems — whether that means
            building new applications, improving system performance, or
            designing data-driven workflows that help teams make better
            decisions.
          </p>
        </div>
      </div>

    </section>
  );
};