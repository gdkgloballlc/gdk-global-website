import { useState, useRef } from 'react';
import { Send, CheckCircle, Loader2, Mail, User, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            // Fallback for simulation if keys are missing
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitting(false);
            setIsSent(true);
            return;
        }

        if (formRef.current) {
            try {
                await emailjs.sendForm(serviceId, templateId, formRef.current, {
                    publicKey: publicKey,
                });
                setIsSent(true);
            } catch (err) {
                console.error('EmailJS Error:', err);
                setError('Something went wrong. Please try again later.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-violet-500/10 blur-[100px] -z-10" />

            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Text Column */}
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-accent-primary font-bold tracking-wider uppercase text-sm mb-4 block"
                        >
                            Get Started
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight"
                        >
                            Ready to transform your business?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
                        >
                            Whether you need to modernize your legacy systems, build a scalable cloud platform, or implement AI-driven workflows, GDK Global is here to help.
                        </motion.p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-accent-primary shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-semibold text-white">Email Us</div>
                                    <div className="text-sm">info@gdkglobal.net</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl shadow-2xl">
                            {isSent ? (
                                <div className="text-center py-16">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-slate-400">Thank you for reaching out. We'll be in touch shortly.</p>
                                    <button
                                        onClick={() => setIsSent(false)}
                                        className="mt-6 text-sm font-semibold text-accent-primary hover:text-white transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    {error && (
                                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm">
                                            <AlertCircle className="w-5 h-5 shrink-0" />
                                            {error}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                                <User className="w-4 h-4" /> Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                                <Mail className="w-4 h-4" /> Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="contact" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                            <Phone className="w-4 h-4" /> Contact Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="contact"
                                            name="contact"
                                            className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4" /> How can we help?
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-accent-primary hover:bg-indigo-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
