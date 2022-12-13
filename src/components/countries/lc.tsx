export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const LC = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 300"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect fill="#6Cf" width="600" height="300" />
      <polygon fill="#FFF" points="200,274 300,260 400,274 300,27" />
      <polygon points="213.5,274 300,260 386.5,274 300,60" />
      <polygon fill="#FCD116" points="200,274 400,274 300,150" />
    </svg>
  );
};
