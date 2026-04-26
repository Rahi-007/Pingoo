"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/reduxHooks";
import Loading from "../loading";

/** Paths that do not require a session (auth screens). */
const PUBLIC_PATHS = new Set(["/login", "/register"]);

export function AuthRouteGuard() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isHydrated } = useAppSelector(s => s.auth);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || !isHydrated) return;

    if (PUBLIC_PATHS.has(pathname)) return;

    const authed = Boolean(user);
    if (!authed) {
      router.replace("/login");
    }
  }, [mounted, isHydrated, pathname, user, router]);

  if (!mounted || !isHydrated) return <Loading />;

  return null;
}
