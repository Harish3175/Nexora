export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-700 text-white px-6">
      <div className="max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
          Creative Design Agency
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-pulse">
          We create digital experiences
          <span className="text-gray-400"> that make brands stand out.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          We design and build modern digital products that connect brands
          with their audience.
        </p>

        <a
          href="#contact"
          className="inline-block bg-white text-black px-7 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}