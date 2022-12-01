/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import logo from "../../../assets/images/logo-white.svg";
import background from "../../../assets/images/bg.png";
import { Badge } from "../molecules/badges";
import React from "react";

export type SideDisplayProps = {
  header?: string;
  content?: string;
  className?: string;
  backgroundImageURL?: string;
};
export type SideBarProps = {
  items: {
    name: string;
    icon: React.ReactNode;
    notification: number;
    className?: string;
    handleClick?: React.MouseEventHandler<HTMLDivElement>;
  }[];
};
export const SideDisplay = <PROPS extends SideDisplayProps>({
  header = "Welcome guest!",
  content = "  ut eu sem integer vitae justo eget magna fermentum iaculis eu non iam phasellus vestibulum lorem sed risus ultricies tristique",
  backgroundImageURL,
}: PROPS): JSX.Element => {
  return (
    <div
      className={`invisible md:invisible lg:visible xl:visible  md:h-0 lg:h-screen xl:h-screen h-0 flex  font-Poppins justify-center bg-cover`}
      style={{
        width: "550px",
        backgroundImage: `url(${backgroundImageURL || background})`,
      }}
    >
      <div className="flex-row mt-20 ">
        <img className="w-80 h-20" src={logo} />
        <div
          className="flex flex-col mt-12 space-y-2 items-center justify-end"
          style={{ width: "432px", height: "206px" }}
        >
          <p
            className={`text-4xl font-bold tracking-wider text-white mb-4`}
            style={{ width: "432px" }}
          >
            {header}
          </p>
          <p
            className={`text-xl tracking-wider text-white`}
            style={{ width: "432px", height: "143px" }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
export const SideBar = <PROPS extends SideBarProps>({
  items,
}: PROPS): JSX.Element => {
  return (
    <div className="w-72 border border-gray-200">
      <div className="inline-flex flex-col items-start justify-start flex-1 py-8 w-full bg-white h-screen ">
        {items &&
          items?.map((item, index) => (
            <div
              className={`${item?.className} inline-flex  items-center justify-between w-full h-20 px-5 py-10 cursor-pointer`}
              key={index}
              onClick={item.handleClick}
            >
              <div className="flex space-x-2.5 items-center justify-start px-2.5 py-1 rounded-full">
                {item?.icon}
                <p className="text-xs text-gray-600 w-full sm:inline-block hidden">
                  {item?.name}
                </p>
              </div>
              {item?.notification && <Badge count={item?.notification} />}
            </div>
          ))}
      </div>
    </div>
  );
};
