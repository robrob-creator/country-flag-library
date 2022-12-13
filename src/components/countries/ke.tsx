export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const KE = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-120 -80 240 160"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <defs>
        <path
          id="spearshape"
          d="M -1,55.4256258422040733928782829281879157421699 h 2 V -38 C 3,-40 3,-43 3,-46 C 3,-48 3,-56 0,-64.6632301492380856250246634162192350325315 C -3,-56 -3,-48 -3,-46 C -3,-43 -3,-40 -1,-38 z"
          stroke-miterlimit="10"
          transform="rotate(30)"
        />
      </defs>
      <rect x="-120" y="-80" width="240" height="160" fill="#fff" />
      <rect x="-120" y="-80" width="240" height="48" />
      <rect x="-120" y="32" width="240" height="48" fill="#060" />
      <g id="spear">
        <use xlinkHref="#spearshape" stroke="#000" />
        <use xlinkHref="#spearshape" fill="#fff" />
      </g>
      <use xlinkHref="#spear" transform="scale(-1,1)" />
      <path
        fill="#b00"
        d="M -120,-24 V 24 H -19 c 3,8 13,24 19,24 s 16,-16 19,-24 H 120 V -24 H 19 c -3,-8 -13,-24 -19,-24 s -16,16 -19,24 z"
      />
      <path
        id="deco_r"
        d="M 19,24 c 3,-8 5,-16 5,-24 s -2,-16 -5,-24 c -3,8 -5,16 -5,24 s 2,16 5,24"
      />
      <use xlinkHref="#deco_r" transform="scale(-1,1)" />
      <g fill="#fff">
        <ellipse rx="4" ry="6" />
        <path id="deco_br" d="M 1,5.85 c 0,0 4,8 4,21 s -4,21 -4,21 z" />
        <use xlinkHref="#deco_br" transform="scale(-1)" />
        <use xlinkHref="#deco_br" transform="scale(-1,1)" />
        <use xlinkHref="#deco_br" transform="scale(1,-1)" />
      </g>
    </svg>
  );
};
