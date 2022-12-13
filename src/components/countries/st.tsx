export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const ST = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2800 1400"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#12ad2b" d="M0 0h2800v1400H0z" />
      <path fill="#ffce00" d="M0 400h2800v600H0z" />
      <path d="M0 0v1400l700-700" fill="#d21034" />
      <g id="c" transform="translate(1400 700)" fill="#000">
        <g id="b">
          <path id="a" d="M0-200V0h100" transform="rotate(18 0 -200)" />
          <use xlinkHref="#a" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#b" transform="rotate(72)" />
        <use xlinkHref="#b" transform="rotate(144)" />
        <use xlinkHref="#b" transform="rotate(216)" />
        <use xlinkHref="#b" transform="rotate(288)" />
      </g>
      <use xlinkHref="#c" x="700" />
    </svg>
  );
};
