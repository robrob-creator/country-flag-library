export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const JO = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 840 420"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="840" height="420" fill="#007a3d" />
      <rect width="840" height="280" fill="#fff" />
      <rect width="840" height="140" fill="#000" />
      <path d="M0,0V420L420,210z" fill="#ce1126" />
      <path
        d="M129.787138,180 136.295394,196.485467 153.242082,191.295306 144.411056,206.662186 159.034975,216.675628 141.51461,219.352347 142.80365,237.029066 129.787138,225 116.770625,237.029066 118.059665,219.352347 100.5393,216.675628 115.163219,206.662186 106.332193,191.295306 123.278882,196.485467 129.787138,180z"
        fill="#fff"
      />
    </svg>
  );
};
