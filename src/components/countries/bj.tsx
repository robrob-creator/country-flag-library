export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const BJ = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#E8112D" d="M0 0h3v2H0z" />
      <path fill="#FCD116" d="M0 0h3v1H0z" />
      <path fill="#008751" d="M0 0h1.2v2H0z" />
    </svg>
  );
};
