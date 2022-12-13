export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const SO = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 81 54"
      className={className}
      width={width}
      height={height}
    >
      <path fill="#4189DD" d="M0 0h81v54H0z" />
      <g transform="matrix(13 0 0 13 40.5 27)">
        <g id="b">
          <path
            id="a"
            fill="#FFF"
            transform="rotate(18 3.157 -.5)"
            d="M0 0v1h.5z"
          />
          <use xlinkHref="#a" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#b" transform="rotate(72)" />
        <use xlinkHref="#b" transform="rotate(-72)" />
        <use xlinkHref="#b" transform="rotate(144)" />
        <use xlinkHref="#b" transform="rotate(-144)" />
      </g>
    </svg>
  );
};
