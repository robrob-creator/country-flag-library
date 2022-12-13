export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const DE = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5 3"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path d="M0 0h5v3H0z" />
      <path fill="#D00" d="M0 1h5v2H0z" />
      <path fill="#FFCE00" d="M0 2h5v1H0z" />
    </svg>
  );
};
