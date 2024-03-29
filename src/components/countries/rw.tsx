export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const RW = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1080 720"
      width={width}
      height={height}
      className={className}
    >
      <rect width="1080" height="720" fill="#20603D" />
      <rect width="1080" height="540" fill="#FAD201" />
      <rect width="1080" height="360" fill="#00A1DE" />
      <g transform="translate(886.5,188.1)">
        <g id="h">
          <path
            id="q"
            fill="#E5BE01"
            d="M 116.10000,0.00000 L 35.69202,4.69894 112.14399,30.04889 33.25966,13.77660 100.54555,58.05000 28.56072,21.91541 82.09510,82.09510 21.91541,28.56072 58.05000,100.54555 13.77660,33.25966 30.04889,112.14399 4.69894,35.69202 0.00000,116.10000 -1,-1 z"
          />
          <use xlinkHref="#q" transform="scale(1,-1)" />
        </g>
        <use xlinkHref="#h" transform="scale(-1,1)" />
        <circle r="34.3" fill="#E5BE01" stroke="#00A1DE" stroke-width="3.4" />
      </g>
    </svg>
  );
};
