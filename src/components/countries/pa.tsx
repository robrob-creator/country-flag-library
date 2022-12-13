export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const PA = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      width={width}
      height={height}
      className={className}
    >
      <path d="M0 0h900v600H0z" fill="#fff" />
      <path d="M0 300h450v300H0z" fill="#002855" />
      <path d="M450 0h450v300H450z" fill="#A6192E" />
      <path
        d="M675 375l16.84 51.822 54.49.002-44.082 32.03 16.836 51.823L675 478.65l-44.084 32.027 16.836-51.823-44.081-32.03 54.489-.002z"
        fill="#A6192E"
        fill-rule="evenodd"
      />
      <path
        d="M225 75l16.84 51.822 54.49.002-44.082 32.03 16.836 51.823L225 178.65l-44.084 32.027 16.836-51.823-44.081-32.03 54.489-.002z"
        fill="#002855"
        fill-rule="evenodd"
      />
    </svg>
  );
};
