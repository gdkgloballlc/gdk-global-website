import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    '/hero-visual-backup.png',
    '/hero-visual.png'
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent -z-10 opacity-60" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-50" />

            <div className="container grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                        Available for new partnerships
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-[1.1] mb-8 text-text-primary tracking-tight">
                        Building the <br />
                        <span className="text-accent-primary">Digital Future</span> <br />
                        for Enterprise.
                    </h1>

                    <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-lg">
                        We engineer high-performance software and cloud infrastructure that scales with your business logic, not just your user base.
                    </p>

                    <div className="flex mb-12">
                        <a href="#contact" className="px-8 py-4 text-white bg-accent-primary rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2">
                            Get Started <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="flex flex-col gap-3 text-sm text-text-secondary font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                            <span>Enterprise-grade security standards</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                            <span>Cloud-native architecture experts</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-2 border border-blue-100 backdrop-blur-sm bg-white/60 aspect-[4/3] sm:aspect-square lg:aspect-[4/3]">
                        <div className="relative w-full h-full overflow-hidden rounded-xl">
                            <AnimatePresence mode="popLayout">
                                <motion.img
                                    key={currentImage}
                                    src={heroImages[currentImage]}
                                    alt="Digital Data Flow"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
