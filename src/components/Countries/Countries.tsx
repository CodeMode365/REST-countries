import React, { lazy, useEffect, useState } from "react";
import axios from "axios";

const LazyCountry = lazy(()=>import("./SingleCountry"))

const Countries = () => {
  const [data, setData] = useState<{}[] | null>();
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <main className="w-full h-full bg-lightBg dark:bg-darkBg dark:text-darkText">
      <div className="wrapper w-11/12 mx-auto pt-10">
        <div className="bar flex items-center justify-between ">
          <div className="search w-60 ml-14">
            <input type="text" className="w-full" />
          </div>
          <div className="options realtive mr-32">
            <ul className="absolute bg-darkEle w-28">
              <li className="border-b border-darkText w-full text-center cursor-pointer">Africa</li>
              <li className="border-b border-darkText w-full text-center cursor-pointer">America</li>
              <li className="border-b border-darkText w-full text-center cursor-pointer">Asia</li>
              <li className="border-b border-darkText w-full text-center cursor-pointer">Eurpoe</li>
              <li className="border-b border-darkText w-full text-center cursor-pointer">Ocearia</li>
            </ul>
          </div>
        </div>
        <div className="countries mt-10 flex flex-row flex-wrap justify-center">
          {data ? (
            [...data].map((countryInfo: Object, index: number) => (
              <LazyCountry countryInfo={countryInfo} key={index} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default Countries;
