export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const PS = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 3"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#007A3D" d="M0 0h6v3H0z" />
      <path fill="#FFF" d="M0 0h6v2H0z" />
      <path d="M0 0h6v1H0z" />
      <path fill="#CE1126" d="M0 0l2 1.5L0 3z" />
    </svg>
  );
};
