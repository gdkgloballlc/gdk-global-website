import { motion } from 'framer-motion';

const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '100%', label: 'Delivery Rate' },
    { value: '24/7', label: 'Support Coverage' },
];

export default function About() {
    return (
        <section id="company" className="py-24 bg-white border-y border-gray-100">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-accent-primary font-semibold tracking-wider uppercase text-sm mb-4 block">About GDK</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight mb-6">
                            Trusted by industry leaders.
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed mb-8">
                            We are not just developers; we are strategic partners in your digital journey. We combine technical expertise with deep industry knowledge to deliver solutions that matter.
                        </p>
                        <div className="flex gap-4">
                            <img src="https://via.placeholder.com/100x40?text=Logo+1" alt="Client Logo" className="opacity-40 grayscale hover:grayscale-0 transition-all" />
                            <img src="https://via.placeholder.com/100x40?text=Logo+2" alt="Client Logo" className="opacity-40 grayscale hover:grayscale-0 transition-all" />
                            <img src="https://via.placeholder.com/100x40?text=Logo+3" alt="Client Logo" className="opacity-40 grayscale hover:grayscale-0 transition-all" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-bg-secondary rounded-2xl text-center border border-gray-50"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-accent-primary mb-2">{stat.value}</div>
                                <div className="text-sm font-semibold text-text-secondary uppercase tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
