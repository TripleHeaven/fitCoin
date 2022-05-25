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
  custom:
    "focus:outline-none  hover:bg-success-400 active:shadow-none rounded-[8px]",
  gradient:
    "focus:outline-none font-[microgrammaRegular] hover:bg-success-400 active:shadow-none  text-[white] rounded-[8px]",
  gradientInverted:
    "focus:outline-none font-[microgrammaRegular] hover:bg-success-400 active:shadow-none  text-[white] [gradientNormal] rounded-[8px]",
} as const;

export const ButtonVariantsMap = typeof ButtonVariants;

export type ButtonVariants = ValueOf<typeof ButtonVariants>;

const ButtonSizes = {
  lg: "px-8 py-3 rounded-lg text-xl",
  md: "px-4 py-2 rounded-md",
  sm: "px-4 py-2 rounded-sm text-sm",
  xs: "  rounded-sm text-xs font-medium",
  mobile:
    "px-[32px] py-[17.5px] sm:px-[29.5px] sm:py-[13.5px] flex justify-center rounded-lg",
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
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = ButtonVariants.primary,
      size = ButtonSizesMap.mobile,
      children,
      className,
      disabled = false,
      onClick,
      ...other
    } = props;

    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          "transition inline-flex items-center relative font-medium disabled:cursor-not-allowed disabled:opacity-50",
          variant,
          variant === ButtonVariants.gradient && "gradientNormal",
          variant === ButtonVariants.gradientInverted && "gradientInverted",
          size,
          className
        )}
        ref={ref}
        {...other}
      >
        <span
          className="mx-2"
          style={
            variant === ButtonVariants.gradientInverted
              ? {
                  background:
                    "-webkit-linear-gradient(1deg, #30CFD0 12.12% ,#330867 95.64%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
              : {}
          }
        >
          {children}
        </span>
      </button>
    );
  }
);
