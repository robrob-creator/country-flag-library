export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const UA = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      className={className}
      width={width}
      height={height}
    >
      <path fill="#0057B7" d="M0 0h3v2H0z" />
      <path fill="gold" d="M0 1h3v1H0z" />
    </svg>
  );
};
