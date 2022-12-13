export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GW = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-2 -3 12 6"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect x="-2" y="-3" width="4" height="6" fill="#ce1126" />
      <rect x="2" y="-3" width="8" height="3" fill="#fcd116" />
      <rect x="2" width="8" height="3" fill="#009e49" />
      <g id="c">
        <path
          id="t"
          d="M 0,-1 v 1 h .5"
          transform="rotate(18 0,-1)"
          fill="#000"
        />
        <use xlinkHref="#t" transform="scale(-1,1)" />
      </g>
      <use xlinkHref="#c" transform="rotate(72)" />
      <use xlinkHref="#c" transform="rotate(144)" />
      <use xlinkHref="#c" transform="rotate(216)" />
      <use xlinkHref="#c" transform="rotate(288)" />
    </svg>
  );
};
