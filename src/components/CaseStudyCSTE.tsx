export const CaseStudyCSTE = () => {
  return (
    <section className="px-6 md:px-12 py-28 max-w-6xl mx-auto">

      {/* Section Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
          CDC · Public Health Infrastructure
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Architecting a Scalable WordPress Platform for Epidemiology Operations
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Led the development of a centralized WordPress platform enabling epidemiologists 
          to access, navigate, and operationalize critical public health resources—reducing 
          friction in high-stakes workflows and improving data accessibility at scale.
        </p>
      </div>

      {/* Problem + Opportunity */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">

        <div>
          <h3 className="text-lg font-semibold mb-3">The Problem</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Public health professionals relied on fragmented systems and static documentation, 
            resulting in inefficient navigation, duplicated effort, and delayed access to 
            time-sensitive surveillance data.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">The Opportunity</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Consolidate tools, guidance, and datasets into a unified platform with structured 
            content architecture—enabling faster retrieval, improved usability, and scalable 
            content management for evolving public health needs.
          </p>
        </div>

      </div>

      {/* Main Visual */}
      <div className="mb-20">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <img
            src={`/Nate-M-Louissaint-Website/CSTE.jpg`}
            alt="CDC WordPress platform"
            className="w-full h-auto object-contain"
          />
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Centralized platform improving access to epidemiology tools and surveillance resources
        </p>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">

        <div>
          <h4 className="font-semibold mb-2">Information Architecture</h4>
          <p className="text-sm text-gray-400">
            Re-structured 100+ pages of public health content into a streamlined system, 
            reducing time-to-resource discovery by ~35%.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Scalable CMS Implementation</h4>
          <p className="text-sm text-gray-400">
            Built a modular WordPress architecture (custom themes + reusable components) 
            enabling non-technical teams to manage and update content with minimal friction.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Performance & UX Optimization</h4>
          <p className="text-sm text-gray-400">
            Improved page load performance and navigation efficiency, contributing to a 
            ~25% reduction in user drop-off across key resource pages.
          </p>
        </div>

      </div>

      {/* Contribution (text only now) */}
      <div className="mb-20">
        <h3 className="text-lg font-semibold mb-3">My Contribution</h3>

        <ul className="text-sm text-gray-400 space-y-3">
          <li>• Owned end-to-end WordPress development and component architecture</li>
          <li>• Designed scalable content models using custom fields and reusable blocks</li>
          <li>• Translated complex epidemiology workflows into intuitive UI/UX systems</li>
          <li>• Optimized performance, accessibility, and cross-device responsiveness</li>
        </ul>
      </div>

      {/* Impact */}
      <div className="max-w-2xl">
        <h3 className="text-lg font-semibold mb-3">Impact</h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          Delivered a scalable digital infrastructure that improved resource accessibility, 
          reduced navigation friction, and enabled faster decision-making for epidemiologists— 
          positioning the platform as a reliable, long-term system for public health operations.
        </p>
      </div>

    </section>
  );
};