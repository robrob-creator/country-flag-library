export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const NG = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 3"
      width={width}
      height={height}
      className={className}
    >
      <rect width="6" height="3" fill="#008751" />
      <rect x="2" width="2" height="3" fill="#FFF" />
    </svg>
  );
};
