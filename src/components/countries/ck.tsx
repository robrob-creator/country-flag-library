export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CK = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 9600 4800"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 0h12v6H0z" />
        </clipPath>
        <clipPath id="b">
          <path d="M0 0v1.5h8V4zm6 0H3v4h-5z" />
        </clipPath>
      </defs>
      <g
        transform="scale(800)"
        stroke-width=".6"
        fill="#012169"
        clip-path="url(#a)"
      >
        <path d="M0 0h12v6H0z" />
        <path stroke="#fff" d="M0 0l6 3M0 3l6-3" />
        <path
          stroke="#c8102e"
          stroke-width=".4"
          clip-path="url(#b)"
          d="M0 0l6 3M0 3l6-3"
        />
        <path stroke="#fff" stroke-width="1" d="M3 0v4M0 1.5h7" />
        <path stroke="#c8102e" d="M3 0v4M0 1.5h7" />
        <path d="M0 3h6V0h6v6H0z" />
      </g>
      <g transform="translate(7200 2400)">
        <g id="d">
          <path
            id="c"
            fill="#fff"
            d="M0-1992l81 249h261l-211 153 81 249L0-1494l-212 153 81-249-211-153h261z"
          />
          <use transform="rotate(24)" xlinkHref="#c" />
          <use transform="rotate(48)" xlinkHref="#c" />
        </g>
        <use transform="rotate(72)" xlinkHref="#d" />
        <use transform="rotate(144)" xlinkHref="#d" />
        <use transform="rotate(216)" xlinkHref="#d" />
        <use transform="rotate(288)" xlinkHref="#d" />
      </g>
    </svg>
  );
};
