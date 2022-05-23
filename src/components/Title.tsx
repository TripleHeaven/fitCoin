import React from "react";
import { ValueOf } from "utils";
import clsx from "clsx";

export const TitleVariant = {
  h1: "text-[44px] sm:text-[64px] uppercase",
  h2: "text-[32px] sm:text-[44px]  uppercase",
  h3: "text-[20px] sm:text-[32px]  uppercase",
  h4: "text-[16px] sm:text-[18px]  uppercase",
  h5: "text-[24px] sm:text-[32px]",
} as const;

export type TitleVariant = ValueOf<typeof TitleVariant>;

interface TitleProps {
  variant: TitleVariant;
  className?: string;
  children?: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({
  variant,
  className,
  children,
}) => <h1 className={clsx(variant, className)}>{children}</h1>;
