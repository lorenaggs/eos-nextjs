import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Amazon Rainforest Tours | Ecuador Jungle Adventures",
    description: "Explore the Amazon Rainforest with EOS Ecuador. Discover unique wildlife, indigenous cultures, and stay in eco-friendly lodges.",
};

export default function AmazonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Amazon Rainforest",
        "description": "The world's largest tropical rainforest, home to unmatched biodiversity.",
        "url": "https://example.com/amazon",
        "image": "https://example.com/amazon.png"
    };

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/amazon.png"
                        alt="Amazon Rainforest"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg tracking-wide">AMAZON</h1>
                    <p className="text-xl md:text-2xl font-light tracking-widest uppercase">The Lungs of the Earth</p>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-20 bg-[var(--background)]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif text-[var(--color-secondary)] mb-6">Immerse yourself in the world's most biodiverse ecosystem.</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                        Discover the magic of the Ecuadorian Amazon. From deep jungle expeditions to comfortable eco-lodges, we offer experiences that connect you with nature and local cultures. Witness vibrant wildlife, canoe through winding rivers, and learn the secrets of the rainforest.
                    </p>
                </div>
            </section>

            {/* Categories Grid - Placeholder for Amazon sub-categories if needed, or just content */}
            <section className="py-10 pb-24 bg-[var(--background)]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">

                        {/* Lodges */}
                        <div className="group block bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:shadow-[0_4px_20px_0_rgba(255,255,255,0.08)] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-transparent dark:border-white/5">
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src="/amazon.png" // Using amazon image as placeholder for lodge
                                    alt="Amazon Lodges"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-serif font-bold text-white">Eco-Lodges</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">Stay in sustainable lodges deep in the jungle, offering comfort without compromising the environment.</p>
                                <span className="text-[var(--color-brand-green)] font-bold uppercase tracking-widest text-sm group-hover:underline cursor-pointer">View Lodges →</span>
                            </div>
                        </div>

                        {/* Cruises */}
                        <div className="group block bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg dark:shadow-[0_4px_20px_0_rgba(255,255,255,0.08)] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-transparent dark:border-white/5">
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src="/amazon.png" // Using amazon image as placeholder for river cruise
                                    alt="Amazon River Cruises"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-serif font-bold text-white">River Cruises</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">Navigate the majestic Amazon river in style, exploring remote areas accessible only by water.</p>
                                <span className="text-[var(--color-brand-green)] font-bold uppercase tracking-widest text-sm group-hover:underline cursor-pointer">View Cruises →</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
