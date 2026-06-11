"use client";

import { logout } from "@/service/auth.service";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { EllipsisVertical, LogOut, Users, Megaphone } from "lucide-react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { clearAuth } from "@/context/slice/auth.slice";

interface IProps {
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton = ({ setValue }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors">
          <EllipsisVertical className="w-6 h-6" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-42 bg-[#1d1f1f]" align="start">
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover-bg-effect">
          <Users className="w-4 h-4" />
          Create Group
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover-bg-effect">
          <Megaphone className="w-4 h-4" />
          Create Channel
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-2 text-red-500 cursor-pointer hover-bg-effect"
          onClick={() => {
            logout();
            dispatch(clearAuth());
            setValue(true);
          }}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuButton;
