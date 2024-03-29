export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const PR = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      fill="#FFF"
      width={width}
      height={height}
      className={className}
    >
      <path d="M0 0h900v600H0" />
      <path stroke="red" stroke-width="120" d="M0 60h900m0 240H0m0 240h900" />
      <path fill="#06F" d="M0 0v600l520-300" />
      <path d="M114 382l59-183 59 183L77 269h192" />
    </svg>
  );
};
