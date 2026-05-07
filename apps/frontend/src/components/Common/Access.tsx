"use client";

import { useAppSelector } from "@/hooks/reduxHooks";
import React from "react";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Access = ({ children, className }: IProps) => {
  const role = useAppSelector(state => state.auth.user?.role);
  const isAdmin = role === "admin";

  if (!isAdmin) return null;

  return <div className={className}>{children}</div>;
};

export default Access;
