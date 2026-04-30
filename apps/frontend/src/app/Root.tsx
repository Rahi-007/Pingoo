"use client";

import { useEffect } from "react";
import { IUser } from "@/interface/user.interface";
import { setAxiosAuthToken } from "@/service/auth.service";
import { setAuth } from "@/context/slice/auth.slice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useRouter } from "next/navigation";

export default function Root({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const route = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const userString = localStorage.getItem("user");

    setAxiosAuthToken(accessToken);

    if (accessToken && refreshToken && userString) {
      const user = JSON.parse(userString) as IUser;
      dispatch(setAuth({ accessToken, refreshToken, user }));
    } else {
      route.push("/login");
    }
  }, [dispatch]);

  return (
    <>
      {children}
    </>
  );
}
