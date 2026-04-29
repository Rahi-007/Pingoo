"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

import { EllipsisVertical, LogOut, Users, Megaphone } from "lucide-react";

const MenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors">
          <EllipsisVertical className="w-6 h-6" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-42 bg-[#1d1f1f]">
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover-bg-effect">
          <Users className="w-4 h-4" />
          Create Group
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover-bg-effect">
          <Megaphone className="w-4 h-4" />
          Create Channel
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2 text-red-500 cursor-pointer hover-bg-effect">
          <LogOut className="w-4 h-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuButton;
