export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const KP = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 72 36"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect fill="#024FA2" width="72" height="36" />
      <rect fill="#fff" y="6" width="72" height="24" />
      <rect fill="#ED1C27" y="7" width="72" height="22" />
      <circle fill="#fff" cx="24" cy="18" r="8" />
      <g id="star" transform="translate(24,18) scale(7.75)" fill="#ED1C27">
        <g id="cone">
          <polygon
            id="triangle"
            points="0,0 0,1 .5,1"
            transform="translate(0,-1) rotate(18)"
          />
          <use xlinkHref="#triangle" transform="scale(-1,1)" id="use12" />
        </g>
        <use xlinkHref="#cone" transform="rotate(72)" id="use14" />
        <use xlinkHref="#cone" transform="rotate(-72)" id="use16" />
        <use xlinkHref="#cone" transform="rotate(144)" id="use18" />
        <use xlinkHref="#cone" transform="rotate(-144)" id="use20" />
      </g>
    </svg>
  );
};
