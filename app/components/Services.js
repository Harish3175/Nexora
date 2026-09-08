export default function Services() {
  const services = [
    {
      number: "01",
      icon: "✦",
      title: "UI/UX Design",
      description:
        "We create simple, intuitive, and engaging digital experiences.",
    },
    {
      number: "02",
      icon: "⌘",
      title: "Web Development",
      description:
        "We build fast, responsive, and modern websites for growing brands.",
    },
    {
      number: "03",
       icon: "◆",
      title: "Branding",
      description:
        "We create strong visual identities that make brands memorable.",
    },
    {
      number: "04",
       icon: "↗",
      title: "Digital Marketing",
      description:
        "We help brands reach the right audience through digital strategies.",
    },
  ];

  return (
    <section id="services" className="bg-white text-black px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl">
            Services that move brands forward.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border border-gray-200 rounded-2xl p-8 hover:bg-black hover:text-white hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-sm text-gray-400 group-hover:text-gray-500">
                  {service.number}
                </span>

                <span className="text-2xl">{service.icon}</span>
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-400 leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}