export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const AE = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 3"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#00843D" d="M0 0h6v3H0z" />
      <path fill="#fff" d="M0 1h6v2H0z" />
      <path d="M0 2h6v1H0z" />
      <path fill="#C8102E" d="M0 0h1.5v3H0z" />
    </svg>
  );
};
