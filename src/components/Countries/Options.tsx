import React from "react";

interface iProps {
  setFilterOption: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
}

const Options: React.FC<iProps> = ({ setFilterOption }) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const Regions: string[] = ["Africa", "America", "Asia", "Europe", "Ocenia"];

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center outline-0"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        Filter Region{" "}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
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
                onClick={() => setFilterOption(region)}
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
