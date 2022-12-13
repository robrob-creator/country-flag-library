export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MY = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13440 6720"
      width={width}
      height={height}
      className={className}
    >
      <g transform="scale(480)">
        <path fill="#fff" d="m0 0h28v14H0z" />
        <path stroke="#c00" d="m1 .5h27m0 2H1m0 2h27m0 2H1" />
        <path fill="#006" d="m0 0h14v8.5H0z" />
        <path stroke="#c00" d="m0 8.5h28m0 2H0m0 2h28" />
      </g>
      <path
        fill="#fc0"
        d="m4200 720 107 732 414-613-222 706 639-373-506 540 738-59-690 267 690 267-738-59 506 540-639-373 222 706-414-613-107 732-107-732-414 613 222-706-639 373 506-540-738 59 690-267-690-267 738 59-506-540 639 373-222-706 414 613zm-600 30a1280 1280 0 1 0 0 2340 1440 1440 0 1 1 0-2340z"
      />
    </svg>
  );
};
