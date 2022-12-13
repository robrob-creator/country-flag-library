export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const BB = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24000 16000"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <title>Flag of Barbados</title>
      <rect width="24000" height="16000" fill="#00267f" />
      <rect width="8000" height="16000" fill="#ffc726" x="8000" />
      <path
        id="h"
        fill="#000"
        d="M 12000,4124 C 11740,4833 11475,5571 10908,6136 C 11084,6078 11392,6026 11590,6031 L 11590,9013 L 10748,9138 C 10718,9135 10708,9088 10708,9024 C 10627,8098 10408,7320 10156,6515 C 10138,6405 9819,5985 10065,6059 C 10095,6063 10424,6197 10372,6133 C 9924,5669 9269,5335 8633,5236 C 8577,5222 8544,5250 8594,5315 C 9438,6614 10144,8147 10138,9966 C 10466,9966 11261,9772 11590,9772 C 11590,9772 11590,11876 11590,11876 L 12005,11876 12100, 6000 z"
      />
      <use xlinkHref="#h" transform="translate(24000,0) scale(-1,1)" />
    </svg>
  );
};
