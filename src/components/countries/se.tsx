export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const SE = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 10"
      className={className}
      width={width}
      height={height}
    >
      <rect width="16" height="10" fill="#006aa7" />
      <rect width="2" height="10" x="5" fill="#fecc00" />
      <rect width="16" height="2" y="4" fill="#fecc00" />
    </svg>
  );
};
