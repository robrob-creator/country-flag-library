export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const SD = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 6"
      className={className}
      height={height}
      width={width}
    >
      <rect width="12" height="6" />
      <rect fill="#FFF" width="12" height="4" />
      <rect fill="#D21034" width="12" height="2" />
      <polygon fill="#007229" points="0,0 4,3 0,6" />
    </svg>
  );
};
