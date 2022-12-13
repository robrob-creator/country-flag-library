export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const SN = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 900 600"
      width={width}
      className={className}
      height={height}
    >
      <path fill="#00853f" d="M0 0h300v600H0z" />
      <path fill="#fdef42" d="M300 0h300v600H300z" />
      <path fill="#e31b23" d="M600 0h300v600H600z" />
      <g transform="translate(450 300)" fill="#00853f">
        <g id="b">
          <path id="a" d="M0-100V0h50z" transform="rotate(18 0 -100)" />
          <use xlinkHref="#a" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#b" transform="rotate(72)" />
        <use xlinkHref="#b" transform="rotate(144)" />
        <use xlinkHref="#b" transform="rotate(216)" />
        <use xlinkHref="#b" transform="rotate(288)" />
      </g>
    </svg>
  );
};
