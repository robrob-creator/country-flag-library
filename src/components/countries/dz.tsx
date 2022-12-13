export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const DZ = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect fill="#fff" width="900" height="600" />
      <rect fill="#006233" width="450" height="600" />
      <path
        fill="#d21034"
        d="M580,225a150,150 0 1,0 0,150 120,120 0 1,1 0-150m5,75-135-44 84,115v-142l-84,115z"
      />
    </svg>
  );
};
