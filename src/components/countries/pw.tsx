export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const PW = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 10"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#09F" d="M0 0h16v10H0z" />
      <circle fill="#FF0" cx="7" cy="5" r="3" />
    </svg>
  );
};
