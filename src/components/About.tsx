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
          Web Performance & <br className="hidden sm:block" />
          Optimization Focused.
        </h3>

        <div className="space-y-5 sm:space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed font-light">
          <p>
            I’m Nathan Louissaint, a Web Operations & Performance Manager focused on improving how websites actually perform. My work centers on optimizing speed, reliability, and user experience across high-traffic applications.
          </p>

          <p>
            I’ve worked in environments where performance directly impacts usability and outcomes—improving page load times, identifying user drop-off points, and shipping changes that reduce friction. At CSTE, I improved page performance by 40% by optimizing APIs and implementing caching strategies.
          </p>

          <p>
            My approach combines frontend development (React/Next.js), technical SEO, and analytics to understand how users interact with a product and where things break down. From there, I focus on fixing bottlenecks, improving flows, and making systems more efficient and scalable.
          </p>

          <p>
            I work closely with product, design, and engineering teams to turn insights into improvements—ensuring websites don’t just function, but perform at a high level.
          </p>
        </div>
      </div>

    </section>
  );
};