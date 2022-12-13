export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const IR = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 630 360"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <rect width="630" height="360" fill="#da0000" />
      <rect width="630" height="240" fill="#fff" />
      <rect width="630" height="120" fill="#239f40" />
      <g transform="translate(8.4,100.4)">
        <g id="tb4">
          <g id="tb1" fill="none" stroke="#fff" stroke-width="2">
            <path
              id="tbp1"
              d="M0,1H26M1,10V5H9V9H17V5H12M4,9H6M26,9H21V5H29M29,0V9H37V0M33,0V9"
              transform="scale(1.4)"
            />
            <path id="tbp2" d="M0,7H9M10,7H19" transform="scale(2.8)" />
            <use xlinkHref="#tbp2" y="120" />
            <use xlinkHref="#tbp1" y="145.2" />
          </g>
          <g id="tb3">
            <use xlinkHref="#tb1" x="56" />
            <use xlinkHref="#tb1" x="112" />
            <use xlinkHref="#tb1" x="168" />
          </g>
        </g>
        <use xlinkHref="#tb3" x="168" />
        <use xlinkHref="#tb4" x="392" />
      </g>
      <g fill="#da0000" transform="matrix(45,0,0,45,315,180)">
        <g id="emblem_half">
          <path d="M-0.54815,0.83638A0.912046,0.912046 0 0,0 0.328544,-0.722384A1,1 0 0,1 -0.54815,0.83638" />
          <path d="M0.618339,0.661409A0.763932,0.763932 0 0,0 0.421644,-0.741049A1,1 0 0,1 0.618339,0.661409" />
          <path d="M0,1 -0.05,0 0,-0.787278A0.309995,0.309995 0 0,0 0.118034,-0.688191V-0.100406L0.077809,0.892905z" />
          <path d="M-0.02,-0.85 0,-0.831217A0.14431,0.14431 0 0,0 0.252075,-0.967708A0.136408,0.136408 0 0,1 0,-0.924634" />
        </g>
        <use xlinkHref="#emblem_half" transform="scale(-1,1)" />
      </g>
    </svg>
  );
};
