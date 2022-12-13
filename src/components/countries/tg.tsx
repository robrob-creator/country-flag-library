export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const TG = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 809 500"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#006a4e" d="M0 0h809v500H0z" />
      <path fill="#ffce00" d="M0 100h809v100H0zm0 200h809v100H0z" />
      <path fill="#d21034" d="M0 0h300v300H0z" />
      <g transform="translate(150 150)" fill="#fff">
        <g id="b">
          <path id="a" d="M0-95V0h50" transform="rotate(18 0 -95)" />
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
