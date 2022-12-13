export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const BI = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 300"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <defs>
        <g id="b" fill="#1eb53a">
          <g id="s">
            <g id="t">
              <g id="c">
                <path id="h" d="M0,-20V0H20" transform="rotate(30,0,-20)" />
                <use xlinkHref="#h" transform="scale(-1,1)" />
              </g>
              <use xlinkHref="#c" transform="rotate(120)" />
              <use xlinkHref="#c" transform="rotate(240)" />
            </g>
            <use xlinkHref="#t" transform="rotate(180)" />
          </g>
          <use xlinkHref="#s" fill="#ce1126" transform="scale(0.82)" />
        </g>
        <use id="star" xlinkHref="#b" x="250" y="106" />
      </defs>
      <path d="M0,0H500L0,300H500z" fill="#ce1126" />
      <path d="M0,0V300L500,0V300z" fill="#1eb53a" />
      <path d="M0,0 500,300M500,0 0,300" stroke="#fff" stroke-width="40" />
      <circle cx="250" cy="150" r="85" fill="#fff" />
      <use xlinkHref="#star" />
      <use xlinkHref="#star" transform="rotate(120,250,150)" />
      <use xlinkHref="#star" transform="rotate(240,250,150)" />
    </svg>
  );
};
