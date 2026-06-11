"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import MainPanel from "@/components/layout/MainPanel";
import ControlBar from "@/components/layout/ControlBar";
import type { ViewType } from "@/components/layout/Sidebar";
import HomeCard from "@/components/Common/HomeCard";

export default function Home() {
  const [showHome, setShowHome] = useState(false);
  const [activeView, setActiveView] = useState<ViewType>("chat");
  if (showHome) {
    return <HomeCard />;
  } else {
    return (
      <div className="flex flex-col sm:flex-row w-full">
        <div className="hidden sm:block sm:w-22 md:w-25 lg:w-26 xl:w-26 xxl:w-50 sm:h-screen bg-[#1d1f1f]">
          <Sidebar onChange={setActiveView} />
        </div>
        <div className="w-full sm:w-150 md:w-160 lg:w-170 xl:w-177 xxl:w-7xl border-x min-h-screen">
          <ControlBar value={activeView} setShowHome={setShowHome} />
        </div>
        <div className="w-full">
          <MainPanel value={activeView} />
        </div>
      </div>
    );
  }
}
