export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MU = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 4"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#00A551" d="M0 0h6v4H0z" />
      <path fill="#FFD500" d="M0 0h6v3H0z" />
      <path fill="#1A206D" d="M0 0h6v2H0z" />
      <path fill="#EA2839" d="M0 0h6v1H0z" />
    </svg>
  );
};
