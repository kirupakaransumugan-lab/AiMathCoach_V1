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

      <main className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-10 px-4 pb-40 pt-8 sm:px-6 sm:pt-10 lg:pb-16">
        {activeTab === "home" ? (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-6">
            <Hero onStartLearning={() => handleTabChange("ai-tutor")} onRevealed={() => setRevealed(true)} />
            <StudyRecordCard start={revealed} />
          </div>
        ) : (
          <ComingSoonPanel tabId={activeTab} />
        )}

        <ChatWidget />
      </main>
    </div>
  );
}
