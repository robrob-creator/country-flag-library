export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const SR = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      className={className}
      height={height}
      width={width}
    >
      <path fill="#007A33" d="M0 0h900v600H0z" />
      <path fill="#fff" d="M0 120h900v360H0z" />
      <path fill="#C8102E" d="M0 180h900v240H0z" />
      <path
        d="M450 191.459l70.534 217.082-184.661-134.164h228.254L379.466 408.541z"
        fill="#FFCD00"
      />
    </svg>
  );
};
