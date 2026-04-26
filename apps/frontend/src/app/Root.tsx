"use client";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { IUser } from "@/interface/user.interface";
import { setAxiosAuthToken } from "@/service/auth.service";
import { useEffect } from "react";
import { AuthRouteGuard } from "./auth/AuthRouteGuard";
import { setAuth, setHydrated } from "@/context/slice/auth.slice";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const USER_KEY = "user";

export default function Root({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    const userString = localStorage.getItem(USER_KEY);

    setAxiosAuthToken(accessToken);

    if (accessToken && refreshToken && userString) {
      const user = JSON.parse(userString) as IUser;
      dispatch(setAuth({ accessToken, refreshToken, user }));
    } else {
      dispatch(setHydrated());
    }
  }, [dispatch]);

  return (
    <>
      <AuthRouteGuard />
      {children}
    </>
  );
}
