/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import { Button } from "../atoms/button";
import {
  ArrowStrokeDown,
  BlueIsaacLogo,
  Search,
  UserAvatar,
} from "../atoms/logo";
import { Dropdown } from "../molecules/dropdown";
import { Option } from "../atoms/option";
export type NavigationProps = {
  logo?: string;
  profileImage?: string;
  logoClick?: () => void;
  signInClick?: () => void;
  tryItClick?: () => void;
};

export const NavigationBar = <PROPS extends NavigationProps>({
  logo,
  logoClick,
  signInClick,
  tryItClick,
}: PROPS): JSX.Element => {
  return (
    <nav className="flex items-center justify-between flex-wrap  py-3.5 pl-11 pr-14">
      <div
        className="flex items-center flex-shrink-0 text-white mr-6"
        onClick={logoClick}
      >
        {logo ? (
          <img className="w-15 h-10" src={logo} />
        ) : (
          <BlueIsaacLogo className="w-32 h-3/4" />
        )}
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:justify-center lg:w-auto">
        <div className="text-sm lg:flex-grow lg:flex lg:items-center lg:justify-center">
          <span className="flex  items-center lg:mt-0 text-black hover:text-blue-400 mr-4">
            <Dropdown label="Apps">
              <Option label="Apps" />
            </Dropdown>
          </span>
          <span className="flex  items-center mt-4 lg:mt-0 text-black hover:text-blue-400  mr-4">
            {/*<p className="text-sm font-medium">Community</p>
              <ArrowStrokeDown className="mx-2 lg:visible invisible" />
            */}

            <Dropdown label="Community">
              <Option label="Community" />
            </Dropdown>
          </span>
          <span className="flex  items-center mt-4 lg:mt-0 text-black hover:text-blue-400  mr-4">
            {/*  <p className="text-sm font-medium">Pricing</p>
            <ArrowStrokeDown className="mx-2 lg:visible invisible" />*/}

            <Dropdown label="Pricing">
              <Option label="Pricing" />
            </Dropdown>
          </span>
        </div>
        <div>
          <div className="flex space-x-6 items-center justify-start">
            <Search size="sm" className="lg:visible invisible" />
            <p
              className="text-sm font-medium leading-tight text-blue-700 w-24"
              onClick={signInClick}
            >
              Sign in
            </p>

            <div className="relative" style={{ width: "100%", height: 40 }}>
              <div
                className="inline-flex items-center justify-center px-5 py-2 bg-blue-700 rounded-lg"
                style={{ width: "100%", height: 40 }}
                onClick={tryItClick}
              >
                <p className="text-xs font-semibold leading-snug text-center text-gray-50">
                  Try it free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Tabs = <PROPS extends NavigationProps>({}: PROPS): JSX.Element => {
  return (
    <div className="flex p-8 w-full items-center overflow-x-auto">
      <div
        className="inline-flex space-x-12 items-center justify-center "
        style={{ width: "100%", height: 40 }}
      >
        <div className="flex space-x-2 items-center justify-start flex-1 px-3 py-2.5 bg-gray-100 border rounded-lg border-gray-600">
          <p className="flex-1 text-sm leading-tight text-gray-600">Popular</p>
          <div className="flex items-center justify-center w-1/6 h-4 px-0.5 pt-1.5 pb-1">
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-1 h-full rounded-full"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.582029 0.910765C0.907466 0.585328 1.4351 0.585328 1.76054 0.910765L7.00462 6.15484L12.2487 0.910765C12.5741 0.585328 13.1018 0.585328 13.4272 0.910765C13.7526 1.2362 13.7526 1.76384 13.4272 2.08928L7.59387 7.92261C7.26844 8.24805 6.7408 8.24805 6.41536 7.92261L0.582029 2.08928C0.256592 1.76384 0.256592 1.2362 0.582029 0.910765Z"
                fill="#9699AE"
              />
            </svg>
          </div>
        </div>
        <div className="flex space-x-2.5 items-start justify-start">
          <div className="flex items-center justify-center h-full px-5 py-1 bg-gray-300 rounded-full">
            <p className="text-xs font-semibold tracking-wider leading-normal text-center">
              Discover
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Web
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Mobile app
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Smart Devices
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              IOT
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Payments
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Logistics
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Systems
            </p>
          </div>
        </div>
        <div className="flex space-x-2 items-center justify-center w-24 h-full px-5 py-2.5 bg-gray-100 border rounded-lg border-gray-600">
          <img
            className="w-6 h-6 rounded-lg"
            src="https://via.placeholder.com/24x24"
          />
          <p className="text-sm leading-tight text-gray-600">Filter</p>
        </div>
      </div>
    </div>
  );
};
export const WhiteNavBar = <PROPS extends NavigationProps>({
  profileImage,
  logo,
}: PROPS): JSX.Element => {
  return (
    <div
      className="flex items-center justify-center py-2.5 px-16 bg-white drop-shadow-md"
      style={{ width: "100%", height: 60 }}
    >
      {logo ? (
        <img className="w-15 h-10" src={logo} />
      ) : (
        <BlueIsaacLogo className="w-32 h-3/4" />
      )}
      <div
        className="flex space-x-96 items-center justify-end"
        style={{ width: "100%", height: 40 }}
      >
        {profileImage ? (
          <img className="w-10 h-full rounded-full" src={profileImage} />
        ) : (
          <UserAvatar className="w-10 h-full rounded-full" />
        )}
      </div>
    </div>
  );
};
