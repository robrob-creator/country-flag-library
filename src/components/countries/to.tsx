export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const TO = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 48"
      width={width}
      height={height}
      className={className}
    >
      <g fill="#C10000">
        <path d="M0 0h96v48H0z" />
        <path fill="#fff" d="M0 0h40v24H0z" />
        <path d="M17 3h6v18h-6z" />
        <path d="M11 9h18v6H11z" />
      </g>
    </svg>
  );
};
