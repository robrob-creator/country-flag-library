export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const TV = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      width={width}
      height={height}
      className={className}
    >
      <clipPath id="a">
        <path d="M0 0h650v350H0z" />
      </clipPath>
      <clipPath id="b">
        <path d="M0 0v150h650v150h-50zm0 300v50h300V0h300z" />
      </clipPath>
      <path fill="#012169" d="M0 0h1200v600H0z" />
      <path
        d="M0 0l600 300m0-300L0 300"
        stroke="#fff"
        stroke-width="60"
        clip-path="url(#a)"
      />
      <path
        d="M0 0l600 300m0-300L0 300"
        stroke="#c8102e"
        stroke-width="40"
        clip-path="url(#b)"
      />
      <path d="M0 150h650M300 0v350" stroke="#fff" stroke-width="100" />
      <path d="M0 150h650M300 0v350" stroke="#c8102e" stroke-width="60" />
      <path d="M0 300h600V0h600v600H0z" fill="#009cde" />
      <path
        d="M645.34 490.913l29.436 90.597-77.066-55.992h95.26l-77.067 55.993zM817.462 464l-29.436 90.597L758.589 464l77.066 55.992h-95.26zm0-121.984l-29.436 90.597-29.437-90.597 77.066 55.992-95.26.001zm126.005 91.152l-29.437 90.597-29.436-90.597 77.066 55.992-95.26.001zm0-265.413l-29.437 90.597-29.436-90.597 77.066 55.992H866.4zm52.975 172.21l29.436 90.597-77.066-55.992h95.26l-77.067 55.993zm52.923-208.404l-29.437 90.597-29.437-90.597 77.067 55.992-95.26.001zm53.471 139.913l29.437 90.597-77.067-55.992h95.26l-77.067 55.993zm0-234.069l29.437 90.597-77.067-55.992h95.26l-77.067 55.993z"
        fill="#fedd00"
      />
    </svg>
  );
};