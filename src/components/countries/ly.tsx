export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const LY = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960 480"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="960" height="480" fill="#239e46" />
      <rect width="960" height="360" fill="#000" />
      <rect width="960" height="120" fill="#e70013" />
      <circle cx="480" cy="240" r="60" fill="#fff" />
      <circle cx="492.132034" cy="240" r="52.132034" fill="#000" />
      <path
        d="M509.175411,240 589.875233,213.779039 540,282.426407V197.573593L589.875233,266.220961z"
        fill="#fff"
      />
    </svg>
  );
};
