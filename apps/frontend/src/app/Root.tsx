"use client";

import { useEffect, useState } from "react";
import { IUser } from "@/interface/user.interface";
import { setAxiosAuthToken } from "@/service/auth.service";
import { setAuth } from "@/context/slice/auth.slice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useRouter } from "next/navigation";
import Loading from "./loading";

export default function Root({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const runAuth = () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      const userString = localStorage.getItem("user");

      if (accessToken) {
        setAxiosAuthToken(accessToken);
      }

      if (!accessToken || !refreshToken || !userString) {
        router.replace("/login");

        // force 2 sec delay
        setTimeout(() => {
          setChecking(false);
        }, 2000);
        return;
      }

      try {
        const user = JSON.parse(userString) as IUser;
        dispatch(setAuth({ accessToken, refreshToken, user }));
      } catch {
        router.replace("/login");
      } finally {
        setChecking(false);
      }
    };

    runAuth();
  }, [dispatch, router]);

  // block ui until check is done
  if (checking) {
    return <Loading />;
  }

  return <>{children}</>;
}
