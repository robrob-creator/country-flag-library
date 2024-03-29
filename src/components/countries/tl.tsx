export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const TL = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      height={height}
      width={width}
      className={className}
    >
      <path d="M1200 600V0H0v600z" fill="#dc241f" />
      <path d="M0 0v600l600-300z" fill="#ffc726" />
      <path d="M0 0v600l400-300z" />
      <path
        d="M92.858 208.928l19.76 189.181 95.212-164.663-173.817 77.251 186.025 39.67-127.18-141.44"
        fill="#fff"
      />
    </svg>
  );
};
