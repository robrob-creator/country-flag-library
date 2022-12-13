export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const IT = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#008C45" d="M0 0h1v2H0z" />
      <path fill="#fff" d="M1 0h1v2H1z" />
      <path fill="#CD212A" d="M2 0h1v2H2z" />
    </svg>
  );
};
