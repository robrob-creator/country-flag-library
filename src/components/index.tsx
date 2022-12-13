import { CountryCode } from "./types";
import { AD } from "./countries/ad";
import { AE } from "./countries/ae";
export interface FlagProps {
  code: Lowercase<CountryCode> | Uppercase<CountryCode>;
  className?: string;
  width?: string;
  height?: string;
}

export const Flag = ({
  code,
  width = "30",
  height = "30",
  className,
}: FlagProps) => {
  if (code.toLocaleLowerCase() == "ad")
    return <AD width={width} height={height} className={className} />;
  if (code.toLocaleLowerCase() == "ae")
    return <AE width={width} height={height} className={className} />;
  return <div>please provide the country code</div>;
};
