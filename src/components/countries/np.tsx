export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const NP = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-17.582 -4.664 71.571 87.246"
      width={width}
      height={height}
      className={className}
    >
      <title>Flag of Nepal</title>
      <desc>
        Coding according to the official construction in "Constitution of the
        Kingdom of Nepal, Article 5, Shedule 1", adopted in November 1990
      </desc>
      <use xlinkHref="#b" stroke="#003893" stroke-width="5.1646754223" />
      <path
        id="b"
        d="M -15,37.5735931288 h 60 L -15,0 v 80 h 60 L -15,20 z"
        fill="#DC143C"
      />
      <g fill="#fff">
        <path d="M -11.9502769431,23.4834957055 A 12.8400974233,12.8400974233 0 0,0 11.9502769431,23.4834957055 A 11.9502769431 11.9502769431 0 0,1 -11.9502769431,23.4834957055" />
        <g transform="translate(0,29.0445562765) scale(5.5610605710)">
          <circle r="1" />
          <g id="jags6">
            <g id="jags3">
              <path
                id="jag"
                d="M 0.195090322016,-0.980785280403 L 0,-1.388784109750 L -0.195090322016,-0.980785280403"
                transform="rotate(11.25)"
              />
              <use xlinkHref="#jag" transform="rotate(22.5)" />
              <use xlinkHref="#jag" transform="rotate(45)" />
            </g>
            <use xlinkHref="#jags3" transform="rotate(67.5)" />
          </g>
          <use xlinkHref="#jags6" transform="scale(-1, 1)" />
        </g>
        <g transform="translate(0,58.7867965644) scale(8.1433982822)">
          <circle r="1" />
          <g id="rays4">
            <g id="rays2">
              <path
                id="ray"
                d="M 0.258819045103,0.965925826289 L 0,1.576749285537 L -0.258819045103,0.965925826289"
              />
              <use xlinkHref="#ray" transform="rotate(180)" />
            </g>
            <use xlinkHref="#rays2" transform="rotate(90)" />
          </g>
          <use xlinkHref="#rays4" transform="rotate(30)" />
          <use xlinkHref="#rays4" transform="rotate(60)" />
        </g>
      </g>
    </svg>
  );
};
