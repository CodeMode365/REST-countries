import React from "react";

const Options = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        Dropdown button{" "}
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
        <ul className="py-2 text-sm text-gray-700 bg-lightBg text-lightText dark:text-gray-200">
          <li>
            <button className="block hover:text-lightBg px-4 py-2 w-full text-left hover:bg-darkEle dark:hover:bg-lightInput dark:hover:text-lightEle">
              Dashboard
            </button>
          </li>
          <li>
            <button className="block hover:text-lightBg px-4 py-2 w-full text-left hover:bg-darkEle dark:hover:bg-lightInput dark:hover:text-white">
              Settings
            </button>
          </li>
          <li>
            <button className="block hover:text-lightBg px-4 py-2 w-full text-left hover:bg-darkEle dark:hover:bg-lightInput dark:hover:text-white">
              Earnings
            </button>
          </li>
          <li>
            <button className="block hover:text-lightBg px-4 py-2 w-full text-left hover:bg-darkEle dark:hover:bg-lightInput dark:hover:text-white">
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Options;
