export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const SB = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 400"
      height={height}
      className={className}
      width={width}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 0h800v400H0z" />
        </clipPath>
      </defs>
      <g clip-path="url(#a)">
        <path d="M0 400V0h800z" fill="#0051ba" />
        <path d="M0 400h800V0z" fill="#215b33" />
        <path d="M0 400L800 0" stroke="#fcd116" stroke-width="36" />
        <g transform="translate(140 120)">
          <g id="e" fill="#fff">
            <g id="d">
              <g id="c">
                <path id="b" d="M0-40V0h20z" transform="rotate(18 0 -40)" />
                <use xlinkHref="#b" transform="scale(-1 1)" />
              </g>
              <use xlinkHref="#c" transform="rotate(72)" />
            </g>
            <use xlinkHref="#c" transform="rotate(-72)" />
            <use xlinkHref="#d" transform="rotate(144)" />
          </g>
          <g id="g" transform="rotate(40.6)">
            <use
              id="f"
              xlinkHref="#e"
              x="-104"
              transform="rotate(-40.6 -104 0)"
            />
            <use xlinkHref="#f" x="208" />
          </g>
          <use xlinkHref="#g" transform="scale(-1 1)" />
        </g>
      </g>
    </svg>
  );
};
