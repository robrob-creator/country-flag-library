export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MH = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 57 30"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#003087" d="M0 0h57v30H0z" />
      <path d="M0 29.52V28.8L57 3.5v8.74z" fill="#fff" />
      <path d="M0 29.04v-.48L57 .48v5.88z" fill="#E57200" />
      <g fill="#fff" transform="translate(10.9536 10.9536)">
        <g id="b">
          <path d="M0-9.3L.559 0H-.559z" />
          <path id="a" d="M0-6.6588L.6824 0H-.6824z" transform="rotate(15)" />
          <use xlinkHref="#a" transform="rotate(15)" />
          <use xlinkHref="#a" transform="rotate(30)" />
          <use xlinkHref="#a" transform="rotate(45)" />
          <use xlinkHref="#a" transform="rotate(60)" />
        </g>
        <use xlinkHref="#b" transform="rotate(90)" />
        <use xlinkHref="#b" transform="rotate(180)" />
        <use xlinkHref="#b" transform="rotate(270)" />
      </g>
    </svg>
  );
};
