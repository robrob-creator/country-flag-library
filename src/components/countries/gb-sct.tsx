export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GB_SCT = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5 3"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 0h5v3H0z" />
        </clipPath>
      </defs>
      <g clip-path="url(#a)">
        <rect width="100%" height="100%" fill="#005EB8" />
        <path d="M0 0l5 3M0 3L5 0" stroke="#fff" stroke-width="0.6" />
      </g>
    </svg>
  );
};
