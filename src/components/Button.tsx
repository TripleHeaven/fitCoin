import React, { forwardRef } from "react";
import clsx from "clsx";
import { ValueOf } from "../utils";

export const ButtonVariants = {
  primary:
    "focus:outline-none font-[microgrammaRegular]  hover:bg-primary-light focus:bg-primary-light active:shadow-none disabled:bg-gray-500 disabled:text-gray-800",
  secondary:
    "focus:outline-none font-[microgrammaRegular]  text-gray-800 bg-gray-100 hover:text-primary-main active:shadow-none",
  success:
    "focus:outline-none font-[microgrammaRegular] hover:bg-success-400 active:shadow-none  disabled:text-gray-800",
  danger:
    "focus:outline-none font-[microgrammaRegular]  bg-danger-700 hover:bg-danger-500 focus:bg-danger-500 active:shadow-none ",
  text: "text-primary-main font-[microgrammaRegular]",
  gradient:
    "focus:outline-none font-[microgrammaRegular] hover:bg-success-400 active:shadow-none  text-[white] [gradientNormal] rounded-[8px]",
} as const;

export const ButtonVariantsMap = typeof ButtonVariants;

export type ButtonVariants = ValueOf<typeof ButtonVariants>;

const ButtonSizes = {
  lg: "px-8 py-3 rounded-lg text-xl",
  md: "px-4 py-2 rounded-md",
  sm: "px-4 py-2 rounded-sm text-sm",
  xs: "px-3 py-1.5 rounded-sm text-xs font-medium",
  mobile: "w-full px-4 py-3 flex justify-center rounded-lg",
  inline: "font-medium",
  iconTop: "flex-col space-y-1 items-center px-3 py-2 rounded-md text-sm",
} as const;

export const ButtonSizesMap = ButtonSizes;

export type ButtonSizes = ValueOf<typeof ButtonVariants>;

export interface ButtonProps {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = ButtonVariants.primary,
      size = ButtonSizesMap.mobile,
      children,
      className,
      disabled = false,
      ...other
    } = props;

    return (
      <button
        disabled={disabled}
        className={clsx(
          "transition inline-flex items-center relative font-medium disabled:cursor-not-allowed disabled:opacity-50",
          variant,
          variant === ButtonVariants.gradient && "gradientNormal",
          size,
          className
        )}
        ref={ref}
        {...other}
      >
        <span className="mx-2">{children}</span>
      </button>
    );
  }
);
