export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const HN = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 1260 630"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path d="M1260 0H0v630h1260z" fill="#0d3b99" />
      <path d="M1260 210H0v210h1260z" fill="#fff" />
      <path
        id="a"
        d="M630 280l20.572 63.315-53.859-39.131h66.573l-53.859 39.131z"
        fill="#0d3b99"
      />
      <g id="b">
        <use transform="translate(-175 -52.465)" xlinkHref="#a" />
        <use transform="translate(-175 52.534)" xlinkHref="#a" />
      </g>
      <use transform="translate(350)" xlinkHref="#b" />
    </svg>
  );
};
