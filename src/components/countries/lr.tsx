export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const LR = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 209 110"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect fill="#bf0a30" width="209" height="110" />
      <path
        d="M0,15H209 M0,35H209 M0,55H209 M0,75H209 M0,95H209"
        stroke="#fff"
        stroke-width="10"
      />
      <rect fill="#002868" width="50" height="50" />
      <g transform="translate(25,25) scale(15)">
        <g id="B">
          <polygon
            id="A"
            fill="#fff"
            points="0,0 0,1 .5,1"
            transform="translate(0,-1) rotate(18)"
          />
          <use xlinkHref="#A" transform="scale(-1,1)" />
        </g>
        <use xlinkHref="#B" transform="rotate(72)" />
        <use xlinkHref="#B" transform="rotate(-72)" />
        <use xlinkHref="#B" transform="rotate(144)" />
        <use xlinkHref="#B" transform="rotate(-144)" />
      </g>
    </svg>
  );
};
