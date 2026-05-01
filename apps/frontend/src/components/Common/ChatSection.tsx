"use client";
import Link from "next/link";
import MenuButton from "./Menu";
import { UserPlus } from "lucide-react";

const ChatSection = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl">Pingoo</h1>
      </Link>
      <div className="pr-1 flex gap-2">
        <Link href="/" className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors">
          <UserPlus className="w-6 h-6" />
        </Link>
        <MenuButton />
      </div>
      {/* search bar  */}
      {/* short cut */}
      {/* archived chats */}
      {/* all inbox */}
    </div>
  );
};

export default ChatSection;
