import { useState, useEffect } from "react";
import { useConfetti } from "../utils/useConfetti";

export default function CakeSection({ fireworksTriggered }: { fireworksTriggered: boolean }) {
  const [litCandles, setLitCandles] = useState<number[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  const confetti = useConfetti(fireworksTriggered || litCandles.length === 5);

  const toggleCandle = (index: number) => {
    if (!litCandles.includes(index)) {
      const newLit = [...litCandles, index];
      setLitCandles(newLit);
      
      if (newLit.length === 5) {
        setTimeout(() => setShowMessage(true), 1500);
      }
    }
  };

  return (
    <section id="cake-section" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Confetti */}
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            animation: `confetti-fall ${particle.duration}s ease-out forwards`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* 3D Cake Container */}
      <div className="relative" style={{ perspective: '1000px' }}>
        <div className="relative animate-float" style={{ animationDuration: '4s' }}>
          {/* Bottom Layer */}
          <div className="w-64 h-24 bg-gradient-to-t from-pink-600 to-pink-400 rounded-lg relative mx-auto shadow-2xl">
            <div className="absolute inset-0 bg-pink-300/30 rounded-lg" />
          </div>
          
          {/* Middle Layer */}
          <div className="w-48 h-20 bg-gradient-to-t from-pink-500 to-pink-300 rounded-lg relative mx-auto -mt-2 shadow-2xl">
            <div className="absolute inset-0 bg-pink-200/30 rounded-lg" />
          </div>
          
          {/* Top Layer */}
          <div className="w-32 h-16 bg-gradient-to-t from-pink-400 to-pink-200 rounded-lg relative mx-auto -mt-2 shadow-2xl">
            {/* Frosting */}
            <div className="absolute -top-4 left-0 right-0 h-8 bg-white rounded-t-full shadow-lg" />
          </div>

          {/* Candles */}
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="absolute w-2 h-10 bg-gradient-to-t from-pink-600 to-pink-400 rounded-t-lg cursor-pointer transition-transform hover:scale-110"
              style={{
                left: `${20 + index * 15}%`,
                top: '-3.5rem'
              }}
              onClick={() => toggleCandle(index)}
            >
              {/* Flame */}
              {litCandles.includes(index) && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-5 bg-gradient-to-t from-yellow-400 to-yellow-200 rounded-full animate-pulse" style={{
                  boxShadow: '0 0 10px #fbbf24, 0 0 20px #f59e0b'
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Emotional Message */}
      {showMessage && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center max-w-lg animate-fade-in-up">
          <div className="bg-black/30 backdrop-blur-lg p-6 rounded-2xl border border-pink-400/20">
            <p className="text-pink-400 text-xl font-medium" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              You make every moment brighter than a supernova. Happy Birthday! 💫
            </p>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!showMessage && litCandles.length < 5 && (
        <p className="absolute bottom-10 text-cyan-400/60 text-sm animate-pulse" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Click the candles to light them all ✨
        </p>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}