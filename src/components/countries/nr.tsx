export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const NR = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 300"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#002b7f" d="M0 0h600v300H0z" />
      <path fill="#ffc61e" d="M0 137.5h600v25H0z" />
      <path
        fill="#fff"
        d="M150 262.5l-6.47-25.852L125 255.801l7.322-25.623L106.7 237.5l19.153-18.53L100 212.5l25.852-6.47-19.153-18.53 25.623 7.322L125 169.2l18.53 19.153L150 162.5l6.47 25.852L175 169.199l-7.322 25.623L193.3 187.5l-19.153 18.53L200 212.5l-25.852 6.47 19.153 18.53-25.623-7.322L175 255.8l-18.53-19.153L150 262.5z"
      />
    </svg>
  );
};
