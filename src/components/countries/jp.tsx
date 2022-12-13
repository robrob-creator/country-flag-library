export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const JP = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect fill="#fff" height="600" width="900" />
      <circle fill="#bc002d" cx="450" cy="300" r="180" />
    </svg>
  );
};
