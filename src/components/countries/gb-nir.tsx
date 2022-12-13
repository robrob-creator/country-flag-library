export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GB_NIR = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <clipPath id="a">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id="b">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clip-path="url(#a)">
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6" />
        <path
          d="M0 0l60 30m0-30L0 30"
          clip-path="url(#b)"
          stroke="#C8102E"
          stroke-width="4"
        />
        <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6" />
      </g>
    </svg>
  );
};
