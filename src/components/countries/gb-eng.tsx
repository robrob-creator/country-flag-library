export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GB_ENG = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 15"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="25" height="15" fill="#FFF" />
      <g fill="#CE1124">
        <rect width="3" height="15" x="11" />
        <rect width="25" height="3" y="6" />
      </g>
    </svg>
  );
};
