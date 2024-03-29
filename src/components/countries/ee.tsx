export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const EE = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 21"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#FFF" d="M0 0h33v21H0z" />
      <path d="M0 0h33v14H0z" />
      <path fill="#0072CE" d="M0 0h33v7H0z" />
    </svg>
  );
};
