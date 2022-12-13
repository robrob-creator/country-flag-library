export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const TF = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 600 400"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <path
          id="a"
          transform="scale(21)"
          fill="#fff"
          d="M0-1L.588.809-.952-.309H.952L-.588.809z"
        />
      </defs>
      <path fill="#002395" d="M0 0h600v400H0z" />
      <path fill="#fff" d="M0 0h244v164H0z" />
      <path fill="#002395" d="M0 0h80v160H0z" />
      <path fill="#ED2939" d="M160 0h80v160h-80z" />
      <path
        fill="#fff"
        d="M355 183l12.875 20.5H404.5V275L377 232l-37 59h18l19-34 39 70 39-70 19 34h18l-37-59-27.5 43v-39.5H444l12.25-19.5H427.5v-12.5h36.625L477 183H355zm43 87.5h-40v14h40zm76 0h-40v14h40z"
      />
      <use xlinkHref="#a" x="416" y="362" />
      <use xlinkHref="#a" x="371" y="328" />
      <use xlinkHref="#a" x="461" y="328" />
      <use xlinkHref="#a" x="333" y="227" />
      <use xlinkHref="#a" x="499" y="227" />
    </svg>
  );
};
