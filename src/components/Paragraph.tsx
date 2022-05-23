import React from "react";
import { ValueOf } from "utils";
import clsx from "clsx";

export const ParagraphVariant = {
  text: "text-[18px] sm:text-[24px] text-[#1D2124]",
} as const;

export type ParagraphVariant = ValueOf<typeof ParagraphVariant>;

interface ParagraphProps {
  variant?: ParagraphVariant;
  className?: string;
  children?: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  variant = ParagraphVariant.text,
  className,
  children,
}) => <p className={clsx(variant, className)}>{children}</p>;
