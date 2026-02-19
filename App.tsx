import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AIPanel from "./components/AIPanel";
import CakeSection from "./components/CakeSection";

function App() {
  const [fireworksTriggered, setFireworksTriggered] = useState(false);

  const handleScrollToCake = () => {
    document.getElementById("cake-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const triggerFireworks = () => {
    setFireworksTriggered(true);
    setTimeout(() => setFireworksTriggered(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <HeroSection onScrollToCake={handleScrollToCake} />
      <div className="relative">
        <CakeSection fireworksTriggered={fireworksTriggered} />
        <AIPanel onTriggerFireworks={triggerFireworks} />
      </div>
    </div>
  );
}

export default App;