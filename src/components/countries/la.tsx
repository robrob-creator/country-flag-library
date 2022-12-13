export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const LA = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 4"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#ce1126" d="M0 0h6v4H0z" />
      <path fill="#002868" d="M0 1h6v2H0z" />
      <circle fill="#fff" cx="3" cy="2" r=".8" />
    </svg>
  );
};
