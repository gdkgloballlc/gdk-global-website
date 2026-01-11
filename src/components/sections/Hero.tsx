import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import NeuralNetwork from '../visuals/NeuralNetwork';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
            {/* Dynamic Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Subtle base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50" />

                {/* Neural Network Visualization */}
                <NeuralNetwork />

                {/* Fade overlay to ensure text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-[1.1] mb-8 text-slate-900 tracking-tight">
                            Building the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-indigo-600">
                                Digital Future
                            </span> <br />
                            for Enterprise.
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                            We engineer high-performance software and cloud infrastructure that scales with your business logic, not just your user base.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <a href="#contact" className="px-8 py-4 text-white bg-accent-primary rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 flex items-center gap-2 group">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-600 font-medium">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-indigo-50 text-accent-primary">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <span>Enterprise-grade security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-blue-50 text-blue-600">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <span>Cloud-native architecture</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
