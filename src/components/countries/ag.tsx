export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const AG = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 138 92"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#fff" d="M0 0h138v92H0z" />
      <path d="M0 0h138v46H0z" />
      <g transform="translate(69 36)">
        <g id="b">
          <path id="a" d="M-30 0L0-5.742V5.742z" fill="#fcd116" />
          <use xlinkHref="#a" transform="rotate(22.5)" />
          <use xlinkHref="#a" transform="rotate(45)" />
        </g>
        <use xlinkHref="#b" transform="rotate(67.5)" />
        <use xlinkHref="#b" transform="rotate(135)" />
      </g>
      <path fill="#0072c6" d="M0 36h138v20H0z" />
      <path d="M0 0v92h138V0L69 92z" fill="#ce1126" />
    </svg>
  );
};
