import { useState } from "react";
import TopNav from "./components/layout/TopNav";
import BackgroundDecor from "./components/layout/BackgroundDecor";
import BearMascot from "./components/dashboard/BearMascot";
import Hero from "./components/dashboard/Hero";
import StudyRecordCard from "./components/dashboard/StudyRecordCard";
import ComingSoonPanel from "./components/dashboard/ComingSoonPanel";
import ChatWidget from "./components/chat/ChatWidget";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [revealed, setRevealed] = useState(false);

  function handleTabChange(id) {
    if (id !== "home") setRevealed(false);
    setActiveTab(id);
  }

  
   return (
  <div className="relative min-h-screen overflow-x-hidden">
    <BackgroundDecor />
    <BearMascot />

    <TopNav activeTab={activeTab} onTabChange={handleTabChange} />

    <main className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-8 px-4 pb-36 pt-8 sm:px-6 sm:pt-10 lg:gap-10 xl:max-w-[1680px] xl:px-10 xl:pt-12 2xl:max-w-[1880px]">
      {activeTab === "home" ? (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-10 xl:gap-16">
          <Hero onStartLearning={() => handleTabChange("ai-tutor")} onRevealed={() => setRevealed(true)} />
          <StudyRecordCard start={revealed} />
        </div>
      ) : (
        <ComingSoonPanel tabId={activeTab} />
      )}
    </main>

    <ChatWidget />
  </div>
);
}
