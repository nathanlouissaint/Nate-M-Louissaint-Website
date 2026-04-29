export const Experience = () => {
  return (
    <section className="px-6 md:px-12 py-28 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">
        Experience
      </h2>

      {/* Verizon Block */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-24">
        
        {/* LEFT SIDE (Content) */}
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            2020 — 2022
          </p>

          <h3 className="text-2xl font-semibold mb-3">
            Verizon — Digital Optimization
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Contributed to performance optimization and experimentation across 
            customer-facing web systems, working directly within live production 
            environments to improve reliability and user experience.
          </p>

          <ul className="space-y-3 text-sm text-gray-500">
            <li>• Identified user friction points through behavioral and funnel analysis</li>
            <li>• Supported A/B testing across production environments without performance regressions</li>
            <li>• Validated system performance and stability during deployments</li>
            <li>• Collaborated cross-functionally with engineering and UX teams</li>
          </ul>
        </div>

        {/* RIGHT SIDE (Image) */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden border border-white/10">
           <img
  src="/Nate-M-Louissaint-Website/verizon-team.jpg"
  alt="Verizon team"
  className="w-full h-[320px] md:h-[380px] object-cover"
/>
          </div>

          {/* Caption */}
          <p className="text-xs text-gray-500 mt-3">
            Supporting live systems and real-time environments at Verizon
          </p>

          {/* subtle depth */}
          <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-white/5 blur-3xl rounded-full"></div>
        </div>
      </div>

      {/* Optional: Add CSTE block after this later */}
    </section>
  );
};