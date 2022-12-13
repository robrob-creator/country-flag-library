export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GE = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 200"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <defs>
        <g id="c">
          <clipPath id="a">
            <path d="M-109 104a104 104 0 000-208h218a104 104 0 000 208z" />
          </clipPath>
          <path
            id="b"
            d="M-55 74a55 55 0 01110 0V-74a55 55 0 01-110 0z"
            clip-path="url(#a)"
          />
          <use xlinkHref="#b" transform="rotate(90)" />
        </g>
      </defs>
      <path fill="#fff" d="M0 0h300v200H0z" />
      <path d="M130 0v80H0v40h130v80h40v-80h130V80H170V0h-40z" fill="red" />
      <use xlinkHref="#c" transform="translate(64.45 39.45)" fill="red" />
      <use xlinkHref="#c" transform="translate(235.55 160.55)" fill="red" />
      <use xlinkHref="#c" transform="translate(235.55 39.45)" fill="red" />
      <use xlinkHref="#c" transform="translate(64.45 160.55)" fill="red" />
    </svg>
  );
};
