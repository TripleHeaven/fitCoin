import clsx from "clsx";
import React from "react";

export interface CollapseProps {
  open: boolean;
  children?: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({ open, children }) => {
  return (
    <div
      className={clsx(open ? "max-h-[500px]" : "max-h-[0px]")}
      style={{ overflow: "hidden", transition: "max-height 0.25s ease-out" }}
    >
      {children}
    </div>
  );
};
