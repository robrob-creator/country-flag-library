export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const ZA = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 9 6"
      className={className}
      height={height}
      width={width}
    >
      <clipPath id="c">
        <path d="M0 0l4.5 3L0 6" id="b" />
      </clipPath>
      <clipPath id="a">
        <path d="M0 0h9v6H0z" />
      </clipPath>
      <g clip-path="url(#a)">
        <path d="M0 0v6h9V0z" fill="#001489" />
        <path d="M0 0v3h9V0z" fill="#e03c31" />
        <g stroke-width="2" stroke="#fff">
          <path d="M0 0l4.5 3L0 6m4.5-3H9" id="d" />
          <use xlinkHref="#b" stroke="#ffb81c" clip-path="url(#c)" />
        </g>
        <use xlinkHref="#d" fill="none" stroke="#007749" stroke-width="1.2" />
      </g>
    </svg>
  );
};
