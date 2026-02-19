import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Sparkles, MessageSquare, Gift, Rocket } from "lucide-react";

const wishes = [
  "May your code compile on the first try! 🎉",
  "Wishing you infinite happiness and zero bugs! ✨",
  "Another year of amazing achievements! 🚀",
  "You're the main character in this simulation! 🌟",
  "Level up unlocked! Happy Birthday! 🎮"
];

export default function AIPanel({ onTriggerFireworks }: { onTriggerFireworks: () => void }) {
  const [currentWish, setCurrentWish] = useState("");
  const [showWish, setShowWish] = useState(false);

  const generateWish = () => {
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setCurrentWish(randomWish);
    setShowWish(true);
    setTimeout(() => setShowWish(false), 4000);
  };

  const showMemories = () => {
    setCurrentWish("📸 Accessing memory banks... Found 1,825 amazing moments!");
    setShowWish(true);
    setTimeout(() => setShowWish(false), 4000);
  };

  const surpriseMode = () => {
    setCurrentWish("🎁 Surprise package incoming... Prepare for awesomeness!");
    setShowWish(true);
    setTimeout(() => setShowWish(false), 4000);
  };

  return (
    <Card className="fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 w-72 md:w-80 max-h-96 overflow-y-auto bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 z-50">
      <div className="mb-4">
        <h2 className="text-purple-400 text-sm font-medium tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          AI CELEBRATION ASSISTANT
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-green-400">ONLINE</span>
        </div>
      </div>

      {/* Chat Bubble */}
      <div className="bg-slate-950/70 border border-cyan-400/30 rounded-xl p-4 mb-4 text-cyan-400 text-sm animate-fade-in">
        <p>Hello! I was created to celebrate this special day 🎂</p>
      </div>

      {/* Wish Display */}
      {showWish && (
        <div className="bg-purple-950/50 border border-purple-400/30 rounded-xl p-4 mb-4 text-purple-300 text-sm animate-fade-in">
          <p>{currentWish}</p>
        </div>
      )}

      {/* Interactive Buttons */}
      <div className="space-y-3">
        <Button
          onClick={generateWish}
          className="w-full bg-transparent border border-purple-400/40 rounded-xl px-4 py-3 text-sm text-purple-400 hover:border-purple-400/80 hover:bg-purple-400/10 transition-all duration-300 hover:shadow-[0_0_15px_#a855f7]"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Generate Wish
        </Button>
        
        <Button
          onClick={showMemories}
          className="w-full bg-transparent border border-purple-400/40 rounded-xl px-4 py-3 text-sm text-purple-400 hover:border-purple-400/80 hover:bg-purple-400/10 transition-all duration-300 hover:shadow-[0_0_15px_#a855f7]"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Show Memories
        </Button>
        
        <Button
          onClick={surpriseMode}
          className="w-full bg-transparent border border-purple-400/40 rounded-xl px-4 py-3 text-sm text-purple-400 hover:border-purple-400/80 hover:bg-purple-400/10 transition-all duration-300 hover:shadow-[0_0_15px_#a855f7]"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <Gift className="w-4 h-4 mr-2" />
          Surprise Mode
        </Button>
        
        <Button
          onClick={onTriggerFireworks}
          className="w-full bg-transparent border border-cyan-400/40 rounded-xl px-4 py-3 text-sm text-cyan-400 hover:border-cyan-400/80 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_15px_#22d3ee]"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <Rocket className="w-4 h-4 mr-2" />
          Launch Fireworks
        </Button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </Card>
  );
}