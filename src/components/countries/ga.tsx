export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GA = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect fill="#3a75c4" width="400" height="300" />
      <rect fill="#fcd116" width="400" height="200" />
      <rect fill="#009e60" width="400" height="100" />
    </svg>
  );
};
