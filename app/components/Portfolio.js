export default function Portfolio() {
    const projects = [
        {
            title: "Nova Finance",
            category: "Web Design",
            image:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Aura Studio",
            category: "Branding",
            image:
                "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Urban Spaces",
            category: "Digital Experience",
            image:
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Mono Fashion",
            category: "E-Commerce",
            image:
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
        },
    ];

    return (
        <section id="portfolio" className="bg-gray-950 text-white px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between mb-14">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
                            Selected Work
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold">
                            Projects we&apos;re proud of.
                        </h2>
                    </div>

                    <span className="hidden md:block text-sm text-gray-500">
                        04 Projects
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {projects.map((project) => (
                        <div key={project.title} className="group hover:-translate-y-2 transition duration-300">
                            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-gray-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="flex items-center justify-between mt-5">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {project.category}
                                    </p>
                                </div>

                                <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                                    ↗
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}