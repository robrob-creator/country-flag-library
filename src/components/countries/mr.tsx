export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MR = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3000 2000"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#d01c1f" d="M0 0h3000v2000H0z" />
      <path fill="#00a95c" d="M0 400h3000v1200H0z" />
      <path
        fill="gold"
        d="M1299 744h153l48-144 48 144h153l-126 92 51 146-126-90-126 90 51-146zm-549-74a760.093 628 0 001500 0 750 730 0 01-1500 0z"
      />
    </svg>
  );
};