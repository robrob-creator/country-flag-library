export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const TT = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 18"
      width={width}
      height={height}
      className={className}
    >
      <rect fill="#CE1126" width="30" height="18" />
      <polygon fill="#FFF" points="0,0 20.824734,18 30,18 9.175266,0" />
      <polygon points="1.52921,0 22.353945,18 28.470789,18 7.646055,0" />
    </svg>
  );
};
