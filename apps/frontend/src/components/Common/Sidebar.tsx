"use client";

import { Settings } from "lucide-react";
import GToolTip from "../feature/Tooltip";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen py-4">
      <GToolTip title="Profile">
        <Link href="/profile" className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors">
          <Image src="/profile.jpeg" alt="profile Image" height={100} width={100} className="h-8 w-8 rounded-full" />
        </Link>
      </GToolTip>
      <GToolTip title="Settings">
        <div className="mb-2 p-1.5 rounded-full hover:bg-gray-700/30 transition-colors">
          <Settings className="w-8 h-8 transition-transform duration-300 hover:rotate-90" />
        </div>
      </GToolTip>
    </div>
  );
};

export default Sidebar;

// <Link href="/" className="">
//   <CircleDot className="w-6 h-6" />
// </Link>
// <Link href="/" className="">
//   <Users className="w-6 h-6" />
// </Link>
// <Link href="/" className="">
//   <Radio className="w-6 h-6" />
// </Link>
// <Link href="/" className="">
//   <Archive className="w-6 h-6" />
// </Link>
