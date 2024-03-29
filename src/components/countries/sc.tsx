export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const SC = ({ width, height, className }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 450" width={width} height={height} className={className}>
      <path d="M0,450H900V0H0z" fill="#d62828" />
      <path d="M0,450V0H600z" fill="#fcd856" />
      <path d="M0,450V0H300z" fill="#003f87" />
      <path d="M0,450H900V150z" fill="#fff" />
      <path d="M0,450H900V300z" fill="#007a3d" />
    </svg>
  );
};
