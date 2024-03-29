export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const BE = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 39"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#ED2939" d="M0 0h45v39H0z" />
      <path fill="#FAE042" d="M0 0h30v39H0z" />
      <path d="M0 0h15v39H0z" />
    </svg>
  );
};
