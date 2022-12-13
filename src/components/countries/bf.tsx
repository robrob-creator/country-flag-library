export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const BF = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 900 600"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#009e49" d="M0 0h900v600H0z" />
      <path fill="#ef2b2d" d="M0 0h900v300H0z" />
      <g transform="translate(450 300)" fill="#fcd116">
        <g id="b">
          <path id="a" d="M0-100V0h50" transform="rotate(18 0 -100)" />
          <use xlinkHref="#a" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#b" transform="rotate(72)" />
        <use xlinkHref="#b" transform="rotate(144)" />
        <use xlinkHref="#b" transform="rotate(216)" />
        <use xlinkHref="#b" transform="rotate(288)" />
      </g>
    </svg>
  );
};
