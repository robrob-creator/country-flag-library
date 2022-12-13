export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const IE = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 3"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#009A44" d="M0 0h6v3H0z" />
      <path fill="#fff" d="M2 0h4v3H2z" />
      <path fill="#FF8200" d="M4 0h2v3H4z" />
    </svg>
  );
};
