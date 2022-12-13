export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GY = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 300"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="500" height="300" fill="#009e49" />
      <path d="M 0,0 L 500,150 L 0,300 z" fill="#fff" />
      <path d="M 0,13.05 L 456,150 L 0,286.95 z" fill="#fcd116" />
      <path d="M 0,0 L 250,150 L 0,300 z" fill="#000" />
      <path d="M 0,17.5 L 220.85,150 L 0,282.5 z" fill="#ce1126" />
    </svg>
  );
};
