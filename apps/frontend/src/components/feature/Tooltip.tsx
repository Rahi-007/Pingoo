import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface IProps {
  title: string;
  children: React.ReactNode;
  side?: "right" | "top" | "bottom" | "left" | undefined;
}

const GToolTip = ({ title, children, side }: IProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side ?? `right`}>{title}</TooltipContent>
    </Tooltip>
  );
};

export default GToolTip;
