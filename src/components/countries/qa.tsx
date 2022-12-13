export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const QA = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1400 550"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#8d1b3d" d="M0 0h1400v550H0z" />
      <path
        d="M400 550H0V0h400l100 30.556L400 61.11l100 30.556-100 30.555 100 30.556-100 30.555 100 30.556-100 30.555L500 275l-100 30.556 100 30.555-100 30.556 100 30.555-100 30.556 100 30.555-100 30.556 100 30.555z"
        fill="#fff"
      />
    </svg>
  );
};
