export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const VC = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 192 128"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
    >
      <path d="M0 0h192v128H0z" fill="#fcd022" />
      <path d="M144 0h48v128h-48z" fill="#007c2e" />
      <path d="M0 0h48v128H0z" fill="#002674" />
      <path
        d="M83.911 92.44L96 115.196l12.089-22.756L96 69.685zM68.267 64l12.089 22.755L92.444 64 80.356 41.244zm31.289 0l12.088 22.756L123.734 64l-12.09-22.756z"
        fill="#007c2e"
      />
    </svg>
  );
};
