export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MC = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5 4"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#FFF" d="M0 0h5v4H0z" />
      <path fill="#CE1126" d="M0 0h5v2H0z" />
    </svg>
  );
};
