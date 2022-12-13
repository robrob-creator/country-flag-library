export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CM = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 90 60"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="30" height="60" fill="#007a5e" />
      <rect x="30" width="30" height="60" fill="#ce1126" />
      <rect x="60" width="30" height="60" fill="#fcd116" />
      <g transform="translate(45,30)" fill="#fcd116">
        <g id="c">
          <path id="t" d="M 0,-8 v 8 h 4 z" transform="rotate(18 0,-8)" />
          <use xlinkHref="#t" transform="scale(-1,1)" />
        </g>
        <use xlinkHref="#c" transform="rotate(72)" />
        <use xlinkHref="#c" transform="rotate(144)" />
        <use xlinkHref="#c" transform="rotate(216)" />
        <use xlinkHref="#c" transform="rotate(288)" />
      </g>
    </svg>
  );
};
