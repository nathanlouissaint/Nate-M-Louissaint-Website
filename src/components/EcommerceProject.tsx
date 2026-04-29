export const EcommerceProject = () => {
  return (
    <section className="px-6 md:px-12 py-28 max-w-6xl mx-auto">

      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
          Founder Project · E-commerce
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Building and Scaling a DTC E-commerce Brand
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Built and operated a direct-to-consumer e-commerce brand from the ground up, 
          owning everything from UX design and site performance to paid acquisition 
          and conversion optimization.
        </p>
      </div>

      {/* Image (Dashboard Proof) */}
      <div className="mb-20">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <img
            src={`/Nate-M-Louissaint-Website/Ecommerce.jpg`}
            alt="E-commerce analytics dashboard"
            className="w-full h-[360px] md:h-[420px] object-cover"
          />
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Tracking performance, revenue trends, and user behavior across the store
        </p>
      </div>

      {/* Metrics */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div>
          <p className="text-3xl font-bold mb-2">+28%</p>
          <p className="text-sm text-gray-400">Conversion Rate Increase</p>
        </div>

        <div>
          <p className="text-3xl font-bold mb-2">-32%</p>
          <p className="text-sm text-gray-400">Cost Per Acquisition</p>
        </div>

        <div>
          <p className="text-3xl font-bold mb-2">$10K+</p>
          <p className="text-sm text-gray-400">Revenue Generated</p>
        </div>
      </div>

      {/* What You Did */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        
        <div>
          <h3 className="text-lg font-semibold mb-3">What I Built</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Designed and optimized the full e-commerce experience, focusing on 
            performance, usability, and conversion. Built product pages, refined 
            checkout flows, and implemented data-driven improvements based on 
            real user behavior.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Optimization Strategy</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Continuously tested layouts, messaging, and creative assets to identify 
            what drove conversions. Used analytics and user behavior data to guide 
            decisions and improve both on-site experience and paid acquisition performance.
          </p>
        </div>

      </div>

      {/* Key Learnings */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">

        <div>
          <h3 className="text-lg font-semibold mb-3">Key Learnings</h3>

          <ul className="text-sm text-gray-400 space-y-3">
            <li>• Trust signals significantly impact conversion behavior</li>
            <li>• Small UX improvements compound into meaningful gains</li>
            <li>• Site speed directly affects revenue performance</li>
            <li>• Data-driven decisions outperform assumptions</li>
            <li>• Simplifying user flows increases purchase completion</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Growth Execution</h3>

          <ul className="text-sm text-gray-400 space-y-3">
            <li>• Managed paid acquisition across Meta and Google Ads</li>
            <li>• Tested multiple ad creatives to reduce CPA</li>
            <li>• Optimized funnels from landing page to checkout</li>
            <li>• Analyzed user behavior to identify drop-off points</li>
            <li>• Iterated continuously based on performance data</li>
          </ul>
        </div>

      </div>

      {/* Closing */}
      <div className="max-w-2xl">
        <h3 className="text-lg font-semibold mb-3">Outcome</h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          This project reinforced the importance of combining technical execution 
          with data-driven decision making. By continuously removing friction and 
          optimizing key touchpoints, I was able to improve both user experience 
          and business performance at scale.
        </p>
      </div>

    </section>
  );
};