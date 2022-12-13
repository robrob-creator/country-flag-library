export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CU = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 400"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path d="M0,0h800v400H0z" fill="#002a8f" />
      <path d="M0,80h800v80H0v80h800v80H0z" fill="#fff" />
      <path d="M346.4,200L0,0v400z" fill="#cf142b" />
      <path d="M115.5,140l35.35,108.5 l-92.5-67h114.2l-92.5,67z" fill="#fff" />
    </svg>
  );
};
