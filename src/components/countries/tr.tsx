export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const TT = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 8"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#E30A17" d="M0 0h12v8H0z" />
      <circle cx="4.25" cy="4" r="2" fill="#fff" />
      <circle cx="4.75" cy="4" r="1.6" fill="#e30a17" />
      <path
        fill="#fff"
        d="M5.83334 4l1.80901 .58779-1.11804-1.53885v1.90212l1.11804-1.53885z"
      />
    </svg>
  );
};
