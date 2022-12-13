export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const HU = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 3"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#477050" d="M0 0h6v3H0z" />
      <path fill="#FFF" d="M0 0h6v2H0z" />
      <path fill="#CE2939" d="M0 0h6v1H0z" />
    </svg>
  );
};
