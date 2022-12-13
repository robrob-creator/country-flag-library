export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CN = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 30 20"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <defs>
        <path id="a" d="M0-1L.588.809-.952-.309H.952L-.588.809z" fill="#FF0" />
      </defs>
      <path fill="#EE1C25" d="M0 0h30v20H0z" />
      <use xlinkHref="#a" transform="matrix(3 0 0 3 5 5)" />
      <use xlinkHref="#a" transform="rotate(23.036 .093 25.536)" />
      <use xlinkHref="#a" transform="rotate(45.87 1.273 16.18)" />
      <use xlinkHref="#a" transform="rotate(69.945 .996 12.078)" />
      <use xlinkHref="#a" transform="rotate(20.66 -19.689 31.932)" />
    </svg>
  );
};
