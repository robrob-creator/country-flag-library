export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const NU = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 120 60"
      width={width}
      height={height}
      className={className}
    >
      <clipPath id="a">
        <path d="M0 0v15h70v15H60zm0 30v10h30V0h30z" />
      </clipPath>
      <path fill="#012169" d="M0 0h120v60H0z" />
      <g stroke="#c8102e" stroke-width="6">
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" />
        <path d="M0 0l60 30m0-30L0 30" clip-path="url(#a)" stroke-width="4" />
        <path d="M30 0v40M0 15h70" stroke="#fff" stroke-width="10" />
        <path d="M30 0v40M0 15h70" />
      </g>
      <path d="M60 0h60v60H0V30h60z" fill="#fedd00" />
      <g transform="translate(30 15)">
        <g transform="scale(5.1039)">
          <circle r="1" fill="#012169" />
          <path
            id="b"
            d="M0-513674l301930 929245-790463-574305h977066l-790463 574305"
            fill="#fedd00"
            transform="scale(0.00000194676)"
          />
        </g>
        <use xlinkHref="#b" transform="matrix(3 0 0 3 -17.5 .29)" />
        <use xlinkHref="#b" transform="matrix(3 0 0 3 17.5 .29)" />
        <use xlinkHref="#b" transform="matrix(3 0 0 3 0 10.29)" />
        <use xlinkHref="#b" transform="matrix(3 0 0 3 0 -9.71)" />
      </g>
    </svg>
  );
};