export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CV = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 510 300"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="510" height="300" fill="#003893" />
      <rect width="510" height="75" y="150" fill="#fff" />
      <rect width="510" height="25" y="175" fill="#cf2027" />
      <g fill="#f7d116" transform="translate(191.25,187.5)">
        <g id="s2">
          <g id="s" transform="translate(0,-75)">
            <g id="c">
              <path id="t" d="M0,-15V0H7.5" transform="rotate(18,0,-15)" />
              <use xlinkHref="#t" transform="scale(-1,1)" />
            </g>
            <use xlinkHref="#c" transform="rotate(72)" />
            <use xlinkHref="#c" transform="rotate(144)" />
            <use xlinkHref="#c" transform="rotate(216)" />
            <use xlinkHref="#c" transform="rotate(288)" />
          </g>
          <use xlinkHref="#s" y="150" />
        </g>
        <use xlinkHref="#s2" transform="rotate(72)" />
        <use xlinkHref="#s2" transform="rotate(144)" />
        <use xlinkHref="#s2" transform="rotate(216)" />
        <use xlinkHref="#s2" transform="rotate(288)" />
      </g>
    </svg>
  );
};
