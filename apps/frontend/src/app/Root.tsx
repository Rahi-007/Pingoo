"use client";

import { setAuth } from "@/context/slice/auth.slice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { IUser } from "@/interface/user.interface";
import { setAxiosAuthToken } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";
import HomeCard from "@/components/Common/HomeCard";

export default function Root({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const runAuth = () => {
      const accessToken = localStorage.getItem("accessToken");
      const userString = localStorage.getItem("user");

      if (accessToken) {
        setAxiosAuthToken(accessToken);
      }

      if (!accessToken || !userString) {
        // force 2 sec delay
        setTimeout(() => {
          setChecking(false);
        }, 2000);
        return <HomeCard />;
      }

      try {
        const user = JSON.parse(userString) as IUser;
        dispatch(setAuth({ accessToken, user }));
      } catch {
        return <HomeCard />;
      } finally {
        setChecking(false);
      }
    };

    runAuth();
  }, [dispatch]);

  // block ui until check is done
  if (checking) {
    return <Loading />;
  } else {
    return <>{children}</>;
  }
}
