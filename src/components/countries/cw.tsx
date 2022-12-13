export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CW = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 54 36"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="54" height="36" fill="#002b7f" />
      <path d="M0,22.5H54V27H0z" fill="#f9e814" />
      <g fill="#fff" id="s">
        <g id="f">
          <g id="t">
            <path d="m12,8v4h2z" transform="rotate(18,12,8)" id="o" />
            <use xlinkHref="#o" x="-24" transform="scale(-1,1)" />
          </g>
          <use xlinkHref="#t" transform="rotate(72,12,12)" />
        </g>
        <use xlinkHref="#t" transform="rotate(-72,12,12)" />
        <use xlinkHref="#f" transform="rotate(144,12,12)" />
      </g>
      <use xlinkHref="#s" x="-4" y="-4" transform="scale(0.75)" />
    </svg>
  );
};
