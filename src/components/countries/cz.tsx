export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CZ = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="900" height="600" fill="#d7141a" />
      <rect width="900" height="300" fill="#fff" />
      <path d="M 450,300 0,0 V 600 z" fill="#11457e" />
    </svg>
  );
};
