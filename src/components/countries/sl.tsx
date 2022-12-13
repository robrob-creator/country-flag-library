export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const SL = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9 6"
      className={className}
      width={width}
      height={height}
    >
      <path fill="#0072C6" d="M0 0h9v6H0z" />
      <path fill="#FFF" d="M0 0h9v4H0z" />
      <path fill="#1EB53A" d="M0 0h9v2H0z" />
    </svg>
  );
};
