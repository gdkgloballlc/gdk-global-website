import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function NeuralNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000 };

        // Configuration
        const particleCount = 70; // Slightly improved density for subtle background
        const connectionDistance = 190; // Increased reach for more connections
        const mouseDistance = 250;

        // Colors (Light Mode Palette)
        // Using deep indigo and blue for high contrast against white
        const colors = ['#4f46e5', '#3b82f6', '#2563eb', '#7c3aed']; // Indigo-600, Blue-500, Blue-600, Violet-600

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor(w: number, h: number) {
                const topOffset = 100; // Exclude header space
                this.x = Math.random() * w;
                this.y = Math.random() * (h - topOffset) + topOffset;
                const speed = 0.4;
                this.vx = (Math.random() - 0.5) * speed;
                this.vy = (Math.random() - 0.5) * speed;
                this.size = Math.random() * 2 + 1; // Slightly larger for visibility
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update(w: number, h: number) {
                const topOffset = 100; // Exclude header space

                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges (respecting topOffset)
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < topOffset || this.y > h) this.vy *= -1;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    // Gentle repulsion to keep it elegant
                    const strength = 0.8;
                    this.vx -= forceDirectionX * force * strength * 0.05;
                    this.vy -= forceDirectionY * force * strength * 0.05;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                // No blur/glow for crisp look on white
                ctx.globalAlpha = 0.8;
                ctx.fill();
                ctx.globalAlpha = 1.0;
            }
        }

        const init = () => {
            particles = [];
            if (!container) return;
            const { width, height } = container.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;

            const particleDensity = Math.floor((width * height) / 14000);
            const count = Math.min(particleCount * 1.5, particleDensity);

            for (let i = 0; i < count; i++) {
                particles.push(new Particle(width, height));
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const w = canvas.width;
            const h = canvas.height;

            for (let i = 0; i < particles.length; i++) {
                particles[i].update(w, h);
                particles[i].draw();

                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        // Darker indigo lines for visibility on white
                        // Alpha fades out with distance (Increased base opacity from 0.15 to 0.35)
                        const opacity = 0.35 * (1 - distance / connectionDistance);
                        ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`; // Indigo-600
                        ctx.lineWidth = 1.5; // Thicker lines
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        window.addEventListener('resize', handleResize);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto">
            <motion.canvas
                ref={canvasRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full"
            />
        </div>
    );
}
