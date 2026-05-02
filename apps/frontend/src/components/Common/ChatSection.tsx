"use client";
import Link from "next/link";
import MenuButton from "./Menu";
import { UserPlus } from "lucide-react";
import { SearchBar } from "./SearchBar";

const ChatSection = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl">Pingoo</h1>
        </Link>
        <div className="flex gap-2">
          <Link href="/" className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors">
            <UserPlus className="w-6 h-6" />
          </Link>
          <MenuButton />
        </div>
      </div>
      <div className="py-3">
        <SearchBar />
      </div>
    </div>
  );
};

export default ChatSection;
