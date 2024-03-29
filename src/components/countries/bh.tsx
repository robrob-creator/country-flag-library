export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const BH = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1500 900"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path d="M0 0h1500v900H0" fill="#fff" />
      <path
        d="M1500 0H375l225 90-225 90 225 90-225 90 225 90-225 90 225 90-225 90 225 90-225 90h1125"
        fill="#ce1126"
      />
    </svg>
  );
};
