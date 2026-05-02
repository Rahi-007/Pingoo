"use client";

import { Archive, MessageCircleHeart, Settings } from "lucide-react";
import GToolTip from "../feature/Tooltip";
import Image from "next/image";

export type ViewType = "chat" | "archive" | "settings" | "profile";
interface IProps {
  onChange: React.Dispatch<React.SetStateAction<ViewType>>;
}

const Sidebar = ({ onChange }: IProps) => {
  return (
    <div className="flex flex-col justify-between items-center h-screen py-4">
      <div className="border-b-3 pb-1">
        <GToolTip title="Chat">
          <div
            className="p-2 rounded-full hover:bg-gray-700/30 transition-colors group"
            onClick={() => {
              onChange("chat");
            }}
          >
            <MessageCircleHeart className="w-7 h-7 transition-transform duration-300 group-hover:scale-105" />
          </div>
        </GToolTip>
        <GToolTip title="Archive">
          <div
            className="p-2 rounded-full hover:bg-gray-700/30 transition-colors group"
            onClick={() => {
              onChange("archive");
            }}
          >
            <Archive className="w-7 h-7 transition-transform duration-300 group-hover:scale-105" />
          </div>
        </GToolTip>
      </div>
      <div className="">
        <GToolTip title="Settings">
          <div
            className="mb-2 p-1.5 rounded-full hover:bg-gray-700/30 transition-colors group"
            onClick={() => {
              onChange("settings");
            }}
          >
            <Settings className="w-8 h-8 transition-transform duration-300 hover:rotate-90 group-hover:scale-105" />
          </div>
        </GToolTip>
        <GToolTip title="Profile">
          <div
            className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors group"
            onClick={() => {
              onChange("profile");
            }}
          >
            <Image src="/profile.jpeg" alt="profile Image" height={100} width={100} className="h-8 w-8 rounded-full group-hover:scale-105" />
          </div>
        </GToolTip>
      </div>
    </div>
  );
};

export default Sidebar;
