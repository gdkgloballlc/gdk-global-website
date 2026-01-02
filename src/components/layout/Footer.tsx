import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-6">
            <div className="container flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <p>&copy; GDK Global LLC. All rights reserved.</p>
                <div className="flex gap-6 mt-2 md:mt-0">
                    <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                </div>
            </div>
        </footer>
    );
}
