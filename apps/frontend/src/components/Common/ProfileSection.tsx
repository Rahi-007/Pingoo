"use client";

import Image from "next/image";
import { useEffect } from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { logout } from "@/service/auth.service";
import { getUserById } from "@/service/user.service";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { clearAuth } from "@/context/slice/auth.slice";
import useAsyncAction from "@/hooks/useAsyncAction";

const ProfileSection = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userId = useAppSelector(state => state.auth.user?.id);
  const fnLoadProfile = useAsyncAction(getUserById);
  const data = fnLoadProfile.data?.data;

  useEffect(() => {
    fnLoadProfile.action(Number(userId));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl">
        {data?.firstName || "User name"} {data?.lastName || ""}
      </h1>
      {/* search bar */}
      <div className="p-4 flex justify-center items-center">
        <div className="p-1.5 rounded-full hover:bg-gray-700/30 transition-colors group">
          <Image
            src={data?.avatar || "/profile.jpeg"}
            alt="profile Image"
            height={100}
            width={100}
            className="h-36 w-36 rounded-full group-hover:scale-105"
          />
        </div>
      </div>

      {/* profile more info */}
      {/* accounts info */}

      <div
        onClick={() => {
          logout();
          dispatch(clearAuth());
          router.replace("/login");
          console.log("You are logged out");
        }}
        className="flex items-center gap-2 text-red-500 cursor-pointer transition-colors delay-75 hover:bg-[#252828] rounded-sm px-2 py-2.5"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </div>
    </div>
  );
};

export default ProfileSection;
