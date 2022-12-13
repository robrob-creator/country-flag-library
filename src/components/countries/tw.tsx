export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const TW = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      width={width}
      height={height}
      className={className}
    >
      <g fill-rule="evenodd">
        <path d="M0 0h900v600H0z" fill="#fe0000" />
        <path d="M0 0h450v300H0z" fill="#000095" />
      </g>
      <path
        d="M225 37.5l-56.25 209.928L322.428 93.75 112.5 150l209.928 56.25L168.75 52.572 225 262.5l56.25-209.928L127.572 206.25 337.5 150 127.572 93.75 281.25 247.428 225 37.5"
        fill="#fff"
        paint-order="markers fill stroke"
      />
      <circle
        cy="150"
        cx="225"
        r="60"
        fill="#fff"
        stroke="#000095"
        stroke-width="7.5"
      />
    </svg>
  );
};
