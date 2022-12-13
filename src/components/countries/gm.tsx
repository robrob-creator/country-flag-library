export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GM = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 18"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <title>Flag of The Gambia</title>
      <path d="m0,0h27v18H0" fill="#3A7728" />
      <path d="m0,0h27v11H0" fill="#0C1C8C" />
      <path d="m0,0h27v6H0" fill="#CE1126" />
      <path d="m0,6.5h27m0,5H0" stroke="#FFF" />
    </svg>
  );
};
