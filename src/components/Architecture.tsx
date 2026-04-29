export const Architecture = () => {
  return (
    <section className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
       How I Build Full-Stack Applications
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
       <div>
  <h3 className="font-semibold mb-2">Frontend</h3>
  <p className="text-gray-400">
    React and Next.js development, Shopify and WordPress implementations, and performance-focused UI systems. 
    Experienced in building responsive, SEO-optimized interfaces, improving Core Web Vitals, and designing 
    conversion-driven user flows backed by analytics and user behavior data.
  </p>
</div>

  <div>
  <h3 className="font-semibold mb-2">Backend & APIs</h3>
  <p className="text-gray-400">
    Backend systems and API architecture using REST and Supabase, designed for scalability, reliability, and performance. 
    Focused on system design principles including data modeling, caching strategies, authentication flows, and efficient 
    service communication to support high-traffic applications.
  </p>
</div>
<div>
  <h3 className="font-semibold mb-2">Performance</h3>
  <p className="text-gray-400">
    Performance optimization across frontend and backend systems, with focus on Core Web Vitals (LCP, CLS, INP), 
    caching strategies, and reducing latency. Experienced in diagnosing bottlenecks, optimizing API response times, 
    and improving load performance for high-traffic applications through data-driven analysis and monitoring tools.
  </p>
</div>

      </div>
    </section>
  );
};