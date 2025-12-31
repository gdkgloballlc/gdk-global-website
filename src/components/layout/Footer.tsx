export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-24 pb-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="text-2xl font-bold font-heading tracking-tight mb-6 block">
                            GDK Global<span className="text-indigo-400">.</span>
                        </a>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Engineering the future of enterprise technology with precision and passion.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-indigo-100">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-indigo-100">Services</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Software Engineering</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cloud Architecture</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-indigo-100">Connect</h4>
                        <p className="text-sm text-slate-400 mb-4">
                            Ready to start your next project?
                        </p>
                        <a href="mailto:hello@gdkglobal.com" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} GDK Global LLC. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
