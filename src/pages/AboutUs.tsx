import aboutHero from '../assets/images/about-hero.png';

export default function AboutUs() {
    return (
        <div className="pt-20">
            <section className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
                            About <span className="text-blue-600">GDK Global</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Building the future with technology and innovation. We help businesses modernize and scale through intelligent solutions.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-blue-600/10 rounded-2xl -z-10 transform translate-x-2 translate-y-2"></div>
                        <img
                            src={aboutHero}
                            alt="GDK Global Office"
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <p className="text-xl leading-relaxed text-text-secondary">
                            <span className="font-bold text-text-primary">GDK Global LLC</span> is a technology consulting and digital solutions company focused on helping businesses build, modernize, and scale their technology platforms. We specialize in software development, cloud solutions, artificial intelligence (AI), automation, and IT consulting, delivering practical and scalable solutions for small and mid-sized organizations.
                        </p>
                        <p className="text-xl leading-relaxed text-text-secondary">
                            We apply modern engineering practices and AI-enabled technologies to improve operational efficiency, enhance decision-making, and automate business processes. Our work includes developing intelligent applications, implementing AI-driven automation, and designing cloud-native systems aligned with business objectives.
                        </p>
                        <p className="text-xl leading-relaxed text-text-secondary">
                            At GDK Global LLC, we believe technology—including AI—should be responsible, secure, and outcome-driven. We collaborate closely with clients to understand their challenges and deliver solutions that support digital transformation, innovation, and long-term growth.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
