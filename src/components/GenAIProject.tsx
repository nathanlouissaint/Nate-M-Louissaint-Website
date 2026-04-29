export const GenAIProject = () => {
  return (
    <section className="px-6 md:px-12 py-28 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
          Verizon · GenAI Initiative
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Leveraging GenAI to Enhance Customer Experience
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Contributed to an internal initiative exploring how Generative AI could 
          improve customer journeys across Verizon’s web platforms by reducing friction, 
          increasing personalization, and enabling more adaptive user experiences.
        </p>
      </div>

      {/* Problem + Solution */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        
        {/* Problem */}
        <div>
          <h3 className="text-lg font-semibold mb-3">The Problem</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Customer journeys across large-scale web platforms often involve complex 
            navigation, static content structures, and limited personalization. Users 
            frequently encounter friction when trying to find relevant information or 
            complete key actions efficiently.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-lg font-semibold mb-3">The Opportunity</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We explored how Generative AI could act as an adaptive layer within the 
            experience—analyzing user behavior in real time to dynamically guide, 
            personalize, and optimize interactions across key journeys.
          </p>
        </div>

      </div>

      {/* Image 1 (Main Visual) */}
      <div className="mb-20">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <img
             src={`/Nate-M-Louissaint-Website/verizon-slide.jpg`}
            alt="Verizon team collaboration"
            className="w-full h-[360px] md:h-[420px] object-cover"
          />
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Collaborating across digital teams to explore GenAI-driven CX improvements
        </p>
      </div>

      {/* Use Cases */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        
        <div>
          <h4 className="font-semibold mb-2">Smart Assistance</h4>
          <p className="text-sm text-gray-400">
            AI-assisted guidance helping users navigate complex flows such as plan 
            selection, upgrades, and support.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Personalized Content</h4>
          <p className="text-sm text-gray-400">
            Dynamically adapting content and recommendations based on user behavior, 
            intent signals, and browsing patterns.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Journey Optimization</h4>
          <p className="text-sm text-gray-400">
            Reducing drop-off by guiding users through decision-making processes with 
            context-aware suggestions.
          </p>
        </div>

      </div>

      {/* Image 2 (Context / Presentation) */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        
        <div>
          <div className="rounded-xl overflow-hidden border border-white/10">
            <img
              src={`/Nate-M-Louissaint-Website/verizon-team2.jpg`}
              alt="GenAI presentation"
              className="w-full h-[260px] md:h-[300px] object-cover"
            />
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Presenting GenAI-driven concepts focused on improving customer experience
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">My Contribution</h3>

          <ul className="text-sm text-gray-400 space-y-3">
            <li>• Analyzed user behavior and friction points across digital journeys</li>
            <li>• Identified opportunities where AI could reduce complexity</li>
            <li>• Contributed to ideation of GenAI-powered UX enhancements</li>
            <li>• Supported validation of experience concepts in real-world scenarios</li>
          </ul>
        </div>

      </div>

      {/* Impact */}
      <div className="max-w-2xl">
        <h3 className="text-lg font-semibold mb-3">Impact</h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          This initiative highlighted how integrating AI into web experiences can 
          shift platforms from static interfaces to adaptive systems—improving user 
          engagement, reducing friction, and enabling more personalized interactions 
          at scale.
        </p>
      </div>

    </section>
  );
};