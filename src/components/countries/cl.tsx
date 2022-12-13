export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CL = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-4 -4 24 16"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path d="M20,12H-4V-4H20z" fill="#d52b1e" />
      <path d="M4,4H20V-4H-4z" fill="#fff" />
      <path d="M4,4H-4V-4H4z" fill="#0039a6" />
      <g id="f">
        <g id="t">
          <path d="M0,-2V0H1z" fill="#fff" transform="rotate(18,0,-2)" id="o" />
          <use xlinkHref="#o" transform="scale(-1,1)" />
        </g>
        <use xlinkHref="#t" transform="rotate(72)" />
      </g>
      <use xlinkHref="#t" transform="rotate(-72)" />
      <use xlinkHref="#f" transform="rotate(144)" />
    </svg>
  );
};
