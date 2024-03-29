export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MW = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-225 -114 450 300"
      width={width}
      height={height}
      className={className}
    >
      <title>Flag of Malawi</title>
      <rect x="-225" y="-114" width="450" height="300" />
      <g fill="#CE1126">
        <circle r="64.5" />
        <rect x="-225" y="-14" width="450" height="100" />
        <g id="r16">
          <g id="r8">
            <g id="r4">
              <g id="r2">
                <path
                  id="r"
                  d="M0-102c-2.2,0-3,3.3-3,6.5 0,8 1,12 3,23.5 2.04-11.5 3-15.6 3-23.5 0-3.3-1-6.5-3-6.5"
                />
                <use transform="rotate(5)" xlinkHref="#r" />
              </g>
              <use transform="rotate(10)" xlinkHref="#r2" />
            </g>
            <use transform="rotate(20)" xlinkHref="#r4" />
          </g>
          <use transform="rotate(40)" xlinkHref="#r8" />
        </g>
        <use transform="rotate(-80)" xlinkHref="#r16" />
      </g>
      <rect x="-225" y="-21.5" width="450" height="7.5" />
      <rect x="-225" y="86" width="450" height="100" fill="#339E35" />
    </svg>
  );
};
