export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const BW = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 24"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#6DA9D2" d="M0 0h36v24H0z" />
      <path fill="#fff" d="M0 9h36v6H0z" />
      <path d="M0 10h36v4H0z" />
    </svg>
  );
};
