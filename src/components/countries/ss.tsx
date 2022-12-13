export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const SS = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 10"
      className={className}
      width={width}
      height={height}
    >
      <path fill="#078930" d="M0 0h20v10H0z" />
      <path fill="#fff" d="M0 0h20v7H0z" />
      <path d="M0 0h20v3H0z" />
      <path fill="#da121a" d="M0 3.5h20v3H0z" />
      <path fill="#0f47af" d="M0 0l8.66 5L0 10z" />
      <path d="M1.22 5l3.015.98-1.863-2.565v3.17L4.235 4.02z" fill="#fcdd09" />
    </svg>
  );
};
