export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const FI = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1800 1100"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="1800" height="1100" fill="#fff" />
      <rect width="1800" height="300" y="400" fill="#003580" />
      <rect width="300" height="1100" x="500" fill="#003580" />
    </svg>
  );
};
