export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const PH = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 180 90"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#0038a8" d="M0 0h180v90H0z" />
      <path fill="#ce1126" d="M0 45h180v45H0z" />
      <path d="M77.942 45L0 90V0" fill="#fff" />
      <g transform="translate(28 45)" fill="#fcd116">
        <circle r="9" />
        <g id="d">
          <g id="c">
            <g id="b">
              <path d="M-1 0l.062.062L0 0l-.938-.062z" transform="scale(19)" />
              <path
                id="a"
                d="M-.884.116l.05.05L0 0z"
                transform="scale(19.2381)"
              />
              <use xlinkHref="#a" transform="scale(1 -1)" />
            </g>
            <use xlinkHref="#b" transform="rotate(45)" />
          </g>
          <use xlinkHref="#c" transform="rotate(90)" />
        </g>
        <use xlinkHref="#d" transform="rotate(180)" />
        <g transform="translate(-2.02)">
          <g id="f" transform="translate(37.962)">
            <path
              id="e"
              d="M5 0L1.618 1.176l-.073 3.58-2.163-2.854-3.427 1.037L-2 0z"
            />
            <use xlinkHref="#e" transform="scale(1 -1)" />
          </g>
          <use xlinkHref="#f" transform="rotate(120)" />
          <use xlinkHref="#f" transform="rotate(-120)" />
        </g>
      </g>
    </svg>
  );
};
