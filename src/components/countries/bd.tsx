export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const BD = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 12"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#006a4e" d="M0 0h20v12H0z" />
      <circle cx="9" cy="6" r="4" fill="#f42a41" />
    </svg>
  );
};
