import { Code, Cloud, Lightbulb, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Code className="w-8 h-8 text-blue-600" />,
        title: 'Software Engineering',
        description: 'We build robust, scalable applications that drive business value. From web platforms to mobile apps.',
        className: 'bg-gradient-to-br from-white to-blue-50/50',
        image: '/images/services/custom-software-new.png'
    },
    {
        icon: <Cloud className="w-8 h-8 text-indigo-600" />,
        title: 'Cloud Architecture',
        description: 'Native cloud solutions ensuring 99.9% availability and infinite scalability.',
        className: 'bg-white',
        image: '/images/services/cloud-arch-new.png'
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
        title: 'Consulting',
        description: 'Technology roadmaps aligned with business goals and digital transformation.',
        className: 'bg-white',
        image: '/images/services/consulting-new.png'
    },
    {
        icon: <Zap className="w-8 h-8 text-violet-600" />,
        title: 'AI Solutions',
        description: 'Intelligent workflows that reduce cognitive load and operation costs.',
        className: 'bg-gradient-to-br from-white to-violet-50/50',
        image: '/images/services/ai-automation-new.png'
    }
];

export default function CoreServices() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <span className="text-accent-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
                            Comprehensive<br />Technology Solutions.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-auto lg:h-[320px] flex flex-col ${service.className}`}
                        >
                            <div className="flex flex-col h-full bg-transparent relative z-10 w-full">
                                <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-4">
                                    {/* Left Column: Content */}
                                    <div className="p-8 flex flex-col justify-between h-full order-2 lg:order-1">
                                        <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-50 w-fit mb-4">
                                            {service.icon}
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-bold mb-3 text-text-primary text-balance">{service.title}</h3>
                                            <p className="text-text-secondary leading-relaxed text-sm md:text-base text-pretty">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Column: Image */}
                                    <div className="relative h-64 lg:h-full order-1 lg:order-2 flex items-center justify-center lg:items-end lg:justify-end overflow-hidden">
                                        <div className="relative w-full h-full lg:translate-x-4 lg:translate-y-4">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-contain filter drop-shadow-xl opacity-90 group-hover:opacity-100 transition-opacity transform scale-110 lg:scale-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
