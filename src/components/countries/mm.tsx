export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MM = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 18 12"
      width={width}
      height={height}
      className={className}
    >
      <rect width="18" height="6" fill="#FECB00" />
      <rect width="18" height="6" y="6" fill="#EA2839" />
      <rect width="18" height="4" y="4" fill="#34B233" />
      <g transform="translate(9,6.422)scale(4.422)">
        <polygon
          id="pt"
          points="-0.3249196962329062,0 0,-1 0.3249196962329062,0"
          fill="#FFF"
        />
        <use xlinkHref="#pt" transform="rotate(-144)" />
        <use xlinkHref="#pt" transform="rotate(-72)" />
        <use xlinkHref="#pt" transform="rotate(72)" />
        <use xlinkHref="#pt" transform="rotate(144)" />
      </g>
    </svg>
  );
};
