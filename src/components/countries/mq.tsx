export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MQ = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#EC1920" d="M0 0h3v2H0z" />
      <path fill="#fff" d="M0 0h2v2H0z" />
      <path fill="#051440" d="M0 0h1v2H0z" />
    </svg>
  );
};
