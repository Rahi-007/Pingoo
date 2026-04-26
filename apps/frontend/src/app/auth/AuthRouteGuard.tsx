"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/reduxHooks";
import LoadingApp from "@/components/Common/LoadingApp";

/** Paths that do not require a session (auth screens). */
const PUBLIC_PATHS = new Set(["/login", "/register"]);

export function AuthRouteGuard() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isHydrated } = useAppSelector(s => s.auth);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isPublic = PUBLIC_PATHS.has(pathname);
  const authed = Boolean(user);
  const shouldAllow = mounted && isHydrated && (isPublic || authed);

  useEffect(() => {
    if (!mounted || !isHydrated) return;

    if (!isPublic && !authed) {
      router.replace("/login");
    }
  }, [mounted, isHydrated, isPublic, authed, router]);

  if (!shouldAllow) return <LoadingApp />;

  return null;
}
