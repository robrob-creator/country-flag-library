export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GH = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 300"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="450" height="300" fill="#006b3f" />
      <rect width="450" height="200" fill="#fcd116" />
      <rect width="450" height="100" fill="#ce1126" />
      <path
        d="M225,100 257.492,200 172.427,138.197H277.573L192.508,200z"
        fill="#000"
      />
    </svg>
  );
};
