"use client";

import { useGetUserByNameQuery } from "@/context/rtk-query";
import { clearAuth } from "@/context/slice/auth.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { timeAgo } from "@/lib/utils";
import { logout } from "@/service/auth.service";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchBar } from "./SearchBar";

const ProfileSection = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userName = useAppSelector(state => state.auth.user?.userName);
  const { data } = useGetUserByNameQuery(`${userName}`);

  return (
    <div className="p-4 relative min-h-screen">
      <h1 className="text-2xl">
        {data?.firstName || "User name"} {data?.lastName || ""}
      </h1>
      <div className="py-4">
        <SearchBar />
      </div>
      <div className="p-4 flex justify-center items-center">
        <div className="p-1 rounded-full bg-gray-700/40 transition-colors">
          <Image src={data?.avatar || "/profile.jpeg"} alt="profile Image" height={100} width={100} className="h-36 w-36 rounded-full" />
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-2">
          <p className="text-muted-foreground">Email</p>
          <p>{data?.email || "-"}</p>

          <p className="text-muted-foreground">Phone</p>
          <p>{data?.phone || "-"}</p>

          <p className="text-muted-foreground">Address</p>
          <p>{data?.address || "-"}</p>

          <p className="text-muted-foreground">Gender</p>
          <p>{data?.gender || "-"}</p>

          <p className="text-muted-foreground">Blood Group</p>
          <p>{data?.bloodGroup || "-"}</p>

          <p className="text-muted-foreground">Role</p>
          <p className="capitalize">{data?.role || "-"}</p>
        </div>
      </div>
      <div className="mt-6 space-y-3 text-sm border-t pt-4">
        <div className="grid grid-cols-2 gap-2">
          <p className="text-muted-foreground">Verified</p>
          <p>{data?.isVerified ? "Yes" : "No"}</p>

          <p className="text-muted-foreground">Blocked</p>
          <p>{data?.isBlocked ? "Yes" : "No"}</p>

          <p className="text-muted-foreground">Last Login</p>
          <p>{timeAgo(data?.lastLoggedIn)}</p>

          <p className="text-muted-foreground">Joined</p>
          <p>{data?.createdAt ? new Date(data.createdAt).toLocaleDateString() : "-"}</p>
        </div>
      </div>

      <div
        onClick={() => {
          logout();
          dispatch(clearAuth());
          router.replace("/login");
          console.log("You are logged out");
        }}
        className="absolute bottom-1 mb-2 w-[93%] flex items-center gap-2 text-red-500 cursor-pointer transition-colors delay-75 hover:bg-[#252828] rounded-sm px-2 py-2.5"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </div>
    </div>
  );
};

export default ProfileSection;
