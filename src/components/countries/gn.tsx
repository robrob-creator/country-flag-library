export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GN = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="1" height="2" fill="#ce1126" />
      <rect width="1" height="2" x="1" fill="#fcd116" />
      <rect width="1" height="2" x="2" fill="#009460" />
    </svg>
  );
};
