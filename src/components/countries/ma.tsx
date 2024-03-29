export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MA = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9 6"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#B7312C" d="M0 0h9v6H0z" />
      <path
        fill="none"
        stroke="#006341"
        stroke-width=".143"
        d="M4.5 1.73l.746 2.297-1.953-1.42h2.414l-1.953 1.42z"
      />
    </svg>
  );
};
