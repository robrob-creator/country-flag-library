export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const TN = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-60 -40 120 80"
      width={width}
      height={height}
      className={className}
    >
      <g fill="#E70013">
        <rect x="-60" y="-40" width="120" height="80" />
        <circle fill="#FFF" r="20" />
        <circle r="15" />
        <circle fill="#FFF" cx="4" r="12" />
        <path
          transform="translate(4)scale(9)rotate(-90)"
          d="M0,-1 L0.58779,0.80902 L-0.95106,-0.30902 L0.95106,-0.30902 L-0.58779,0.80902z"
        />
      </g>
    </svg>
  );
};
