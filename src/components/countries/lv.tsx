export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const LV = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 3"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#9D2235" d="M0 0h6v3H0" />
      <path fill="#FFF" d="M0 1.2h6v.6H0" />
    </svg>
  );
};
