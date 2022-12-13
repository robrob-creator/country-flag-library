export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const ET = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 720 360"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#da121a" d="M0 0h720v360H0z" />
      <path fill="#fcdd09" d="M0 0h720v240H0z" />
      <path fill="#078930" d="M0 0h720v120H0z" />
      <g transform="translate(360 180)">
        <circle fill="#0f47af" r="120" />
        <g id="a">
          <path
            fill="#fcdd09"
            d="M0-96l-4.206 12.944 17.348 53.39h-23.13l-2.599 8h74.163l11.011-8H21.553z"
          />
          <path
            stroke="#fcdd09"
            stroke-width="4"
            d="M25.863-35.597l30.564-42.069"
          />
        </g>
        <use xlinkHref="#a" transform="rotate(72)" />
        <use xlinkHref="#a" transform="rotate(144)" />
        <use xlinkHref="#a" transform="rotate(216)" />
        <use xlinkHref="#a" transform="rotate(288)" />
      </g>
    </svg>
  );
};
