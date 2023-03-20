import React from "react";
import { AiOutlineDown } from "react-icons/ai";

interface iProps {
  fetchByRegion: (slug: string) => void;
}

const Options: React.FC<iProps> = ({ fetchByRegion }) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const Regions: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        Filter Region <AiOutlineDown />
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        className={`z-10 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-darkEle ${
          showMenu ? "" : "hidden"
        }`}
      >
        <ul className="py-2 text-sm  bg-lightBg text-lightText ">
          {Regions.map((region: string, index: number) => (
            <li key={region + index}>
              <button
                className="block outline-0 hover:text-lightBg px-4 py-2 w-full text-left hover:bg-darkEle dark:hover:bg-lightInput dark:hover:text-lightEle"
                onClick={() => fetchByRegion(region)}
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Options;
