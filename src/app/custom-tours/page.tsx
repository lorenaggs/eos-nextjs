import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Custom Tailor-Made Tours in Ecuador | Design Your Trip",
    description: "Create your dream vacation in Ecuador with EOS Ecuador. Fully customizable itineraries tailored to your interests, budget, and schedule.",
};

export default function CustomToursPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Tours Ecuador",
        "description": "Bespoke travel planning services for Ecuador and Galapagos.",
        "url": "https://example.com/custom-tours",
        "image": "https://example.com/hero.png"
    };

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.png" // Generic travel image
                        alt="Custom Travel Planning"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg tracking-wide">CUSTOM TOURS</h1>
                    <p className="text-xl md:text-2xl font-light tracking-widest uppercase">Your Journey, Your Way</p>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-20 bg-[var(--background)]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif text-[var(--color-secondary)] mb-6">Designed around you.</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                        We understand that every traveler is unique. Whether you want a romantic honeymoon, a family adventure, a photography tour, or a birdwatching expedition, our experts will craft the perfect itinerary just for you. Tell us your dreams, and we will handle the logistics.
                    </p>
                </div>
            </section>

            {/* Call to Action / Form Placeholder */}
            <section className="py-10 pb-24 bg-[var(--background)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:shadow-[0_4px_20px_0_rgba(255,255,255,0.08)] p-8 md:p-12 border border-transparent dark:border-white/5">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] mb-4">Start Planning Today</h3>
                            <p className="text-gray-600 dark:text-gray-400">Fill out our contact form or get in touch directly to start building your custom Ecuadorian adventure.</p>
                        </div>

                        <div className="flex justify-center">
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-dark)] text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
                            >
                                Contact Our Specialists
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
