import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Climbing & Trekking Tours in Ecuador | Andes Adventures",
    description: "Summit the majestic volcanoes of the Andes with EOS Ecuador. Guided climbing and trekking tours for all skill levels.",
};

export default function ClimbingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Ecuadorian Andes",
        "description": "A climber's paradise featuring the Avenue of the Volcanoes.",
        "url": "https://example.com/climbing",
        "image": "https://example.com/hero.jpg"
    };

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg" // Using generic hero as placeholder for mountains
                        alt="Andes Mountains Climbing"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg tracking-wide">CLIMBING & TREKKING</h1>
                    <p className="text-xl md:text-2xl font-light tracking-widest uppercase">Conquer the Avenue of the Volcanoes</p>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-20 bg-[var(--background)]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif text-[var(--color-secondary)] mb-6">Reach new heights in the heart of the Andes.</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                        Ecuador offers some of the most accessible and stunning high-altitude climbing in the world. Whether you are an experienced mountaineer looking to summit Cotopaxi or Chimborazo, or a trekker wanting to explore the crater lakes and highland paramos, we have the perfect adventure for you.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-10 pb-24 bg-[var(--background)]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">

                        {/* High Altitude Climbing */}
                        <div className="group block bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:shadow-[0_4px_20px_0_rgba(255,255,255,0.08)] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-transparent dark:border-white/5">
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src="/hero.jpg" // Placeholder
                                    alt="High Altitude Climbing"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-serif font-bold text-white">Expeditions</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">Challenge yourself on Ecuador's iconic peaks like Cotopaxi, Cayambe, and Chimborazo with expert guides.</p>
                                <span className="text-[var(--color-brand-green)] font-bold uppercase tracking-widest text-sm group-hover:underline cursor-pointer">View Expeditions →</span>
                            </div>
                        </div>

                        {/* Trekking */}
                        <div className="group block bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:shadow-[0_4px_20px_0_rgba(255,255,255,0.08)] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-transparent dark:border-white/5">
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src="/hero.jpg" // Placeholder
                                    alt="Trekking Tours"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-serif font-bold text-white">Trekking</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">Explore scenic trails through national parks, crater lakes, and indigenous trails without technical climbing.</p>
                                <span className="text-[var(--color-brand-green)] font-bold uppercase tracking-widest text-sm group-hover:underline cursor-pointer">View Treks →</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
