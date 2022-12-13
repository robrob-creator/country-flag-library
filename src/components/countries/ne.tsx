export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const NE = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 600"
      width={width}
      height={height}
      className={className}
    >
      <rect width="700" height="600" fill="#0DB02B" />
      <rect width="700" height="400" fill="#FFF" />
      <rect width="700" height="200" fill="#e05206" />
      <circle cx="350" cy="300" r="85" fill="#e05206" />
    </svg>
  );
};
