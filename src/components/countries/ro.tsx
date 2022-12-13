export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const RO = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width={width}
      className={className}
      height={height}
    >
      <path fill="#002B7F" d="M0 0h1v2H0z" />
      <path fill="#FCD116" d="M1 0h1v2H1z" />
      <path fill="#CE1126" d="M2 0h1v2H2z" />
    </svg>
  );
};
