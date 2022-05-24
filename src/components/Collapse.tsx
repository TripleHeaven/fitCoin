import clsx from "clsx";
import React from "react";

export interface CollapseProps {
  open: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  toHeight?: string;
  className?: string;
}

export const Collapse: React.FC<CollapseProps> = ({
  open,
  children,
  style,
  toHeight,
  className,
}) => {
  return (
    <div
      className={clsx(
        open ? "max-h-[1000px]" : toHeight ? toHeight : "max-h-[0px]",
        className
      )}
      style={{
        overflow: "hidden",
        transition: "max-height 0.25s ease-out",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
