import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { useTypewriter } from "../utils/useTypewriter";

export default function HeroSection({ onScrollToCake }: { onScrollToCake: () => void }) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [isGlitching, setIsGlitching] = useState(false);
  const mainText = useTypewriter("Happy Birthday, Star Voyager 🚀✨", 50);
  const subText = useTypewriter("Initializing Celebration Protocol...", 30);

  useEffect(() => {
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const handleClick = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setIsGlitching(false);
      onScrollToCake();
    }, 500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950" />
      
      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${3 + particle.delay}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/20 backdrop-blur-lg border border-cyan-400/40 rounded-full animate-bounce" style={{ animationDelay: '0s', boxShadow: '0 0 20px #22d3ee, 0 0 40px #9333ea' }} />
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-purple-400/20 backdrop-blur-lg border border-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s', boxShadow: '0 0 20px #a855f7, 0 0 40px #22d3ee' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-400/20 backdrop-blur-lg border border-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s', boxShadow: '0 0 20px #ec4899, 0 0 40px #22d3ee' }} />

      {/* 3D Rotating Sphere */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 animate-spin-slow" style={{
        boxShadow: 'inset 0 0 30px rgba(34, 211, 238, 0.5)',
        animation: 'rotate3d 10s linear infinite'
      }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent ${isGlitching ? 'animate-glitch' : ''}`} style={{
          textShadow: '0 0 10px #22d3ee, 0 0 20px #9333ea',
          fontFamily: 'Orbitron, sans-serif'
        }}>
          {mainText}
        </h1>
        <p className="text-xl md:text-2xl text-cyan-300 mb-12 animate-pulse" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {subText}
        </p>
        
        <Button
          onClick={handleClick}
          className="bg-transparent border-2 border-cyan-400/60 rounded-2xl px-8 py-4 text-cyan-400 font-bold text-lg backdrop-blur-lg hover:scale-[1.03] hover:shadow-[0_0_30px_#22d3ee] hover:rotate-1 transition-all duration-400"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Start the Celebration
        </Button>
      </div>

      <style>{`
        @keyframes rotate3d {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes glitch {
          0% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
          100% { transform: translateX(0); }
        }
        .animate-glitch {
          animation: glitch 0.1s infinite;
        }
      `}</style>
    </section>
  );
}