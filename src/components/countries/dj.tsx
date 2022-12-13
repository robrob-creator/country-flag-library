export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const DJ = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 10"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#6ab2e7" d="M0 0h15v10H0z" />
      <path fill="#12ad2b" d="M0 5h15v5H0z" />
      <path d="M0 0v10l4.33-2.5L8.66 5 4.33 2.5 0 0z" fill="#fff" />
      <path
        d="M3.314 3.75l.31.955H4.63l-.813.59.31.955-.812-.59-.812.59.31-.955L2 4.705h1.004l.31-.955z"
        fill="#d7141a"
      />
    </svg>
  );
};
