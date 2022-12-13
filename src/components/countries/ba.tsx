export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const BA = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 16 8"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 0h16v8H0z" />
        </clipPath>
      </defs>
      <g clip-path="url(#a)">
        <path fill="#002395" d="M0 0h16v8H0z" />
        <path d="M4.24 0h8v8z" fill="#fecb00" />
        <g id="c">
          <path
            d="M2.353.525L2.8-.85 3.247.525l-1.17-.85h1.446z"
            fill="#fff"
            id="b"
          />
          <use xlinkHref="#b" x="1" y="1" />
          <use xlinkHref="#b" x="2" y="2" />
        </g>
        <use xlinkHref="#c" x="3" y="3" />
        <use xlinkHref="#c" x="6" y="6" />
      </g>
    </svg>
  );
};
