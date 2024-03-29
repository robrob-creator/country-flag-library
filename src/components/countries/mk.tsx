export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MK = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-140 -70 280 140"
      fill="#f8e92e"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#d82126" d="M-140-70h280V70h-280z" />
      <path d="M-140 14v-28l280 28v-28zm126-84h28L0-15zM14 70h-28L0 15zM-140-70h42L12.86 7.72zm0 140h42L12.86-7.72zM140-70H98L-12.86 7.72zm0 140H98L-12.86-7.72z" />
      <circle r="25" fill="#d82126" />
      <circle r="20" />
    </svg>
  );
};
