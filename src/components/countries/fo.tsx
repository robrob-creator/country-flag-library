export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const FO = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 16"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect fill="#FFF" width="22" height="16" />
      <g fill="#0065BD">
        <rect x="6" width="4" height="16" />
        <rect y="6" width="22" height="4" />
      </g>
      <g fill="#ED2939">
        <rect x="7" width="2" height="16" />
        <rect y="7" width="22" height="2" />
      </g>
    </svg>
  );
};
