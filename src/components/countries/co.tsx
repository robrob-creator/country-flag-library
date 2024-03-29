export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CO = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 4"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect fill="#CE1126" width="6" height="4" />
      <rect fill="#003893" width="6" height="3" />
      <rect fill="#FCD116" width="6" height="2" />
    </svg>
  );
};
