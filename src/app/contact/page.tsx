import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | EOS Ecuador Travel Agency",
    description: "Get in touch with EOS Ecuador to plan your trip. Contact us via phone, email, or visit our office in Quito.",
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "EOS Ecuador Travel",
        "image": "https://example.com/logo-eos.svg",
        "telephone": "+593 98 694 5555",
        "email": "eos@eosecuador.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Jerónimo Carrion E8-132",
            "addressLocality": "Quito",
            "addressCountry": "EC"
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="Contact EOS Ecuador"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg tracking-wide">CONTACT US</h1>
                    <p className="text-xl md:text-2xl font-light tracking-widest uppercase">Let's Plan Your Trip</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-[var(--background)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">

                        {/* Information Column */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-serif text-[var(--color-secondary)] mb-6">Get in Touch</h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                    We are here to help you plan the perfect trip to Ecuador and the Galapagos Islands. Whether you have questions about our tours, need a custom itinerary, or just want to say hello, we'd love to hear from you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-full text-[var(--color-brand-green)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-secondary)]">Phone / WhatsApp</h3>
                                        <a
                                            href="https://wa.me/593986945555"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 mt-1 hover:text-[var(--color-brand-green)] transition-colors block"
                                        >
                                            +593 98 694 5555
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-full text-[var(--color-brand-green)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-secondary)]">Email</h3>
                                        <a
                                            href="mailto:eos@eosecuador.com"
                                            className="text-gray-600 dark:text-gray-400 mt-1 hover:text-[var(--color-brand-green)] transition-colors block"
                                        >
                                            eos@eosecuador.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-full text-[var(--color-brand-green)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-secondary)]">Address</h3>
                                        <p className="text-gray-600 dark:text-gray-400 mt-1">Av. Jerónimo Carrion E8-132, Quito - Ecuador</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map / Placeholder for Form */}
                        <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg h-96 relative">
                            {/* Placeholder for map or contact form */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                                <span className="uppercase tracking-widest font-bold">Map / Contact Form Area</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
