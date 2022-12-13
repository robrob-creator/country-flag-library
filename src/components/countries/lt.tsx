export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const LT = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5 3"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#BE3A34" d="M0 0h5v3H0z" />
      <path fill="#046A38" d="M0 0h5v2H0z" />
      <path fill="#FFB81C" d="M0 0h5v1H0z" />
    </svg>
  );
};
