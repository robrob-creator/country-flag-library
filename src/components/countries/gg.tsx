export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const GG = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-18 -12 36 24"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect x="-18" y="-12" width="36" height="24" fill="white" />
      <path
        d="M 0,-12 v 24 M -18,0 h 36"
        stroke="#e8112d"
        stroke-width="6"
        fill="none"
      />
      <path id="arm" d="M -9,2 l 1,-1 h 9 v -2 h -9 l -1,-1 z" fill="#f9dd16" />
      <use xlinkHref="#arm" transform="rotate(90)" />
      <use xlinkHref="#arm" transform="rotate(-90)" />
      <use xlinkHref="#arm" transform="rotate(180)" />
    </svg>
  );
};
