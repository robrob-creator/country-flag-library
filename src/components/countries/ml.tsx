export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const ML = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 300"
      width={width}
      height={height}
      className={className}
    >
      <rect fill="#CE1126" width="450" height="300" />
      <rect fill="#FCD116" width="300" height="300" />
      <rect fill="#14B53A" width="150" height="300" />
    </svg>
  );
};