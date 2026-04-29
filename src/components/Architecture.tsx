export const Architecture = () => {
  return (
    <section className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        How I Build Systems
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Frontend</h3>
          <p className="text-gray-400">
            React-based interfaces optimized for speed, scalability, and UX.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Backend & APIs</h3>
          <p className="text-gray-400">
            REST APIs designed for performance, efficient data flow, and reliability.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Performance</h3>
          <p className="text-gray-400">
            Focus on Core Web Vitals, caching strategies, and system optimization.
          </p>
        </div>
      </div>
    </section>
  );
};