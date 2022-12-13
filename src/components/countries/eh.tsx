export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const EH = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 300"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="600" height="150" fill="#000" />
      <rect y="150" width="600" height="150" fill="#007a3d" />
      <rect y="100" width="600" height="100" fill="#fff" />
      <path d="M 0,0 200,150 0,300 z" fill="#c4111b" />
      <circle cx="300" cy="150" r="40" fill="#c4111b" />
      <circle cx="315" cy="150" r="40" fill="#fff" />
      <path
        d="m 289.26294,174.2204 17.05633,-12.19273 16.92296,12.37709 -6.32527,-19.98928 17.00081,-12.26999 -20.96556,-0.16131 -6.41591,-19.96036 -6.63215,19.88957 -20.96606,-0.0661 16.86669,12.45373 -6.54184,19.91946 z"
        fill="#c4111b"
      />
    </svg>
  );
};
