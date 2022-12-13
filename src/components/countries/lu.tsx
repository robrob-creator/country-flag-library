export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const LU = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 6"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#00A3E0" d="M0 3h10v3H0z" />
      <path fill="#EF3340" d="M0 0h10v3H0z" />
      <path fill="#fff" d="M0 2h10v2H0z" />
    </svg>
  );
};
