"use client";

import Loading from "./loading";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HomeCard from "@/components/Common/HomeCard";

export default function Root({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    if (accessToken && userId) {
      setAuthenticated(true);
    }

    setChecking(false);
  }, []);

  const publicRoutes = ["/login", "/register"];
  const isPublicRoute = publicRoutes.includes(pathname);

  if (checking) {
    return <Loading />;
  }

  if (isPublicRoute) {
    return <>{children}</>;
  }

  if (!authenticated) {
    return <HomeCard />;
  }

  return <>{children}</>;
}
