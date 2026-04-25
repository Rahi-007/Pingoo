"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Settings } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen py-4 ">
      {/* <div className="my-2 p-1.5 rounded-full hover: hover:bg-gray-700/30 transition-colors">
        <Image src="/profile.jpeg" alt="profile Image" height={100} width={100} className="h-8 w-8 rounded-full"/>
      </div> */}
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="my-2 p-1.5 rounded-full hover:bg-gray-700/30">
            <Image src="/profile.jpeg" alt="profile Image" height={100} width={100} className="h-8 w-8 rounded-full" />
          </div>
        </TooltipTrigger>

        <TooltipContent>Profile</TooltipContent>
      </Tooltip>
      <Settings className="w-8 h-8" />
    </div>
  );
};

export default Sidebar;
