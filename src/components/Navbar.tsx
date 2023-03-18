import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [light, setLight] = useState<boolean>(true);
  return (
    <div className="wrapper sticky top-0 bg-lightBg dark:bg-darkEle w-screen h-14 dark:text-darkText flex items-center text-xl transition-colors delay-100">
      <nav className="w-11/12 flex flex-row items-center justify-between mx-auto ">
        <h2 className="title ">Where in the world?</h2>
        <div className="button">
          <button
            onClick={() => {
              setLight(!light),
                document.documentElement.classList.toggle("dark");
            }}
            className="dark:text-darkText  align-middle  mr-2 "
          >
            {light ? <MdDarkMode /> : <BsFillSunFill />}
          </button>
          <span className="dark:text-darkText">
            {light ? "Dark" : "Light"}
            Mode
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
