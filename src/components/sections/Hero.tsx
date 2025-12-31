import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
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

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a href="#contact" className="px-8 py-4 text-white bg-accent-primary rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2">
                            Get Started <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#work" className="px-8 py-4 text-text-primary bg-white border border-gray-200 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center">
                            View Case Studies
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
                    <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-2 border border-blue-100 backdrop-blur-sm bg-white/60">
                        <img
                            src="/hero-visual.png"
                            alt="Digital Data Flow"
                            className="rounded-xl w-full h-full object-cover mix-blend-multiply"
                        />


                    </div>
                </motion.div>
            </div>
        </section>
    );
}
