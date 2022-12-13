export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const WS = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2880 1440"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <path id="a" d="M0 0l.309.951L-.5.363h1l-.809.588z" />
      </defs>
      <path fill="#ce1126" d="M0 0h2880v1440H0z" />
      <path fill="#002b7f" d="M0 0h1440v720H0z" />
      <g fill="#fff">
        <use xlinkHref="#a" transform="matrix(160 0 0 160 720 30)" />
        <use xlinkHref="#a" transform="matrix(160 0 0 160 500 210)" />
        <use xlinkHref="#a" transform="matrix(150 0 0 150 945 180)" />
        <use xlinkHref="#a" transform="matrix(100 0 0 100 830 364.894)" />
        <use xlinkHref="#a" transform="matrix(200 0 0 200 720 499.789)" />
      </g>
    </svg>
  );
};
