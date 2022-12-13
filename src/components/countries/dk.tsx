export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const DK = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 370 280"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="370" height="280" fill="#c60c30" />
      <rect width="40" height="280" x="120" fill="#fff" />
      <rect width="370" height="40" y="120" fill="#fff" />
    </svg>
  );
};
