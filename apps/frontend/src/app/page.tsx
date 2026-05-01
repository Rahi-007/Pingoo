"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import MainPanel from "@/components/layout/MainPanel";
import ControlBar from "@/components/layout/ControlBar";
import type { ViewType } from "@/components/layout/Sidebar";

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>("chat");

  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="hidden sm:block sm:w-22 md:w-25 lg:w-26 xl:w-26 xxl:w-50 sm:h-screen bg-[#1d1f1f]">
        <Sidebar onChange={setActiveView} />
      </div>
      <div className="w-full sm:w-150 md:w-160 lg:w-170 xl:w-177 xxl:w-7xl border-x min-h-screen">
        <ControlBar value={activeView} />
      </div>
      <div className="hidden sm:flex justify-center items-center w-full min-h-screen">
        <MainPanel value={activeView} />
      </div>
    </div>
  );
}
