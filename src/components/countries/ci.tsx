export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CI = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#009e60" d="M0 0h3v2H0z" />
      <path fill="#fff" d="M0 0h2v2H0z" />
      <path fill="#f77f00" d="M0 0h1v2H0z" />
    </svg>
  );
};
