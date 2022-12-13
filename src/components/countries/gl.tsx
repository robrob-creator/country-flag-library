export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GL = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 12"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="18" height="12" fill="#fff" />
      <path fill="#d00c33" d="m0,6h18v6H0zm3,0a4,4 0 0,0 8,0a4,4 0 0,0-8,0" />
    </svg>
  );
};
