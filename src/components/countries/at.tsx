export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const AT = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9 6"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#ed2939" d="M0 0h9v6H0z" />
      <path fill="#fff" d="M0 2h9v2H0z" />
    </svg>
  );
};
