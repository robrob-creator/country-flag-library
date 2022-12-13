export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const NA = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 60"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 0h90v60H0z" />
        </clipPath>
      </defs>
      <path fill="#003580" d="M0 60V0h90z" />
      <path fill="#009543" d="M90 0v60H0z" />
      <g fill="none" clip-path="url(#a)">
        <path stroke="#fff" stroke-width="20" d="M0 60L90 0" />
        <path stroke="#d21034" stroke-width="15" d="M0 60L90 0" />
      </g>
      <g fill="#ffce00" transform="translate(18 16.341)">
        <path d="M0-10l1.55 4.2L5-8.66l-.76 4.42L8.66-5 5.8-1.55 10 0 5.8 1.55 8.66 5l-4.42-.76L5 8.66 1.55 5.8 0 10l-1.55-4.2L-5 8.66l.76-4.42-4.42.76 2.86-3.45L-10 0l4.2-1.55L-8.66-5l4.42.76L-5-8.66l3.45 2.86z" />
        <circle r="5.5" stroke="#003580" />
      </g>
    </svg>
  );
};
