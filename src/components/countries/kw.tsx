export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const KW = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 6"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="12" height="2" fill="#007a3d" />
      <rect width="12" height="2" y="2" fill="#fff" />
      <rect width="12" height="2" y="4" fill="#ce1126" />
      <polygon points="0,0 3,2 3,4 0,6" />
    </svg>
  );
};
