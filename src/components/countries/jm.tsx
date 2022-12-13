export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const JM = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 6"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 0h12v6H0z" />
        </clipPath>
      </defs>
      <path fill="#007749" d="M0 0h12v6H0z" />
      <path
        fill="#2d2926"
        stroke="#ffb81c"
        clip-path="url(#a)"
        d="M-2-1v8l16-8v8z"
      />
    </svg>
  );
};
