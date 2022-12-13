export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CD = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path fill="#007fff" d="M0 0h800v600H0z" />
      <path
        d="M36 120h84l26-84 26 84h84l-68 52 26 84-68-52-68 52 26-84-68-52zM750 0L0 450v150h50l750-450V0h-50"
        fill="#f7d618"
      />
      <path d="M800 0L0 480v120l800-480V0" fill="#ce1021" />
    </svg>
  );
};
