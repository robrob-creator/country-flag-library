export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const FM = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-19 -10 38 20"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect x="-19" y="-10" width="38" height="20" fill="#75b2dd" />
      <g id="star" transform="translate(0,-6)" fill="#fff">
        <g id="c">
          <path id="t" d="M 0,-2 V 0 H 1" transform="rotate(18 0,-2)" />
          <use xlinkHref="#t" transform="scale(-1,1)" />
        </g>
        <use xlinkHref="#c" transform="rotate(72)" />
        <use xlinkHref="#c" transform="rotate(144)" />
        <use xlinkHref="#c" transform="rotate(216)" />
        <use xlinkHref="#c" transform="rotate(288)" />
      </g>
      <use xlinkHref="#star" transform="rotate(90)" />
      <use xlinkHref="#star" transform="rotate(180)" />
      <use xlinkHref="#star" transform="rotate(270)" />
    </svg>
  );
};
