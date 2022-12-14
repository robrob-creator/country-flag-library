export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const IS = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 18"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path d="M0 0h25v18H0z" fill="#003087" />
      <path d="M0 9h25M9 0v18" stroke-width="4" stroke="#FFF" />
      <path d="M0 9h25M9 0v18" stroke-width="2" stroke="#D50032" />
    </svg>
  );
};