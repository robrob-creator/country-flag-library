export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const WF = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 100"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#ED2939" d="M0 0h150v100H0z" />
      <path fill="#FFF" d="M0 0h40v40H0z" />
      <path fill="#002395" d="M0 0h20v40H0z" />
      <path fill="none" stroke="#FFF" d="M0 40h60V0" />
      <path
        fill="#FFF"
        d="M105 46L93 34h24zm-4 4L89 38v24zm4 4L93 66h24zm4-4l12-12v24z"
      />
    </svg>
  );
};
