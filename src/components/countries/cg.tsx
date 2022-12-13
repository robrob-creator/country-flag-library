export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CG = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect id="green_area" width="3" height="2" fill="#009543" />
      <path id="yellow_area" d="M 0 2 L 2 0 h 1 v 2 z" fill="#FBDE4A" />
      <path id="red_area" d="M 3 0 v 2 h -2 z" fill="#DC241F" />
    </svg>
  );
};
