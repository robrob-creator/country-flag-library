/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Size } from "../types";

export interface TextProps {
  text?: string;
  color?: string;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
  style?: object;
  fontStyle?: string;
  onClick?: () => void;
}

function getHeaderBySize(type: Size) {
  switch (type) {
    case "xl":
      return "text-5xl";
    case "lg":
      return "text-4xl";
    case "md":
      return "text-3xl";
    case "sm":
      return "text-2xl";
    default:
      return "text-2xl";
  }
}
function getTextBySize(type: Size) {
  switch (type) {
    case "xl":
      return "sm:text-xl text:base";
    case "lg":
      return "text-lg";
    case "md":
      return "text-base";
    case "sm":
      return "text-sm";
    default:
      return "text-sm";
  }
}
export const Text = ({
  color = "white",
  text,
  size = "md",
  className,
  children,
  style,
  onClick,
}: TextProps) => {
  const stylesBySize = getTextBySize(size);
  return (
    <p
      className={`${stylesBySize}  tracking-wider text-${color} ${className}`}
      style={style}
      onClick={onClick}
    >
      {text && text}
      {children}
    </p>
  );
};

export const HeaderText = ({
  color,
  text,
  size = "lg",
  className,
  children,
  fontStyle = "font-bold",
  onClick,
}: TextProps) => {
  const stylesBySize = getHeaderBySize(size);
  return (
    <p
      className={`${stylesBySize} ${fontStyle} tracking-wider text-${color} ${className}`}
      onClick={onClick}
    >
      {text && text}
      {children}
    </p>
  );
};
