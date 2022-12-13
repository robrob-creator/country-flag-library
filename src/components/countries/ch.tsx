export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CH = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path d="M0 0h32v32H0z" fill="#da291c" />
      <path d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z" fill="#fff" />
    </svg>
  );
};
