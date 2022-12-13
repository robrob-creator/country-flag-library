export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const PL = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 10"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#fff" d="M0 0h16v10H0z" />
      <path fill="#dc143c" d="M0 5h16v5H0z" />
    </svg>
  );
};
