export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const BS = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 3"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#00778B" d="M0 0h6v3H0z" />
      <path fill="#FFC72C" d="M0 1h6v1H0z" />
      <path d="M0 0v3l2.59808-1.5z" />
    </svg>
  );
};
