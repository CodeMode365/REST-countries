import React, { lazy, useEffect, useState } from "react";
import axios from "axios";
import Data from "../data.json";
import Options from "./Options";
import SearchBar from "./SearchBar";

const LazyCountry = lazy(() => import("./SingleCountry"));

interface iData {
  name: {
    common: string;
    official?: string;
    nativeName?: string;
  };
  population: string;
  region: string;
  capital: string[];
  flags: { alt: string; png: string; svg: string };
}

const Countries: React.FC = (): JSX.Element => {
  const [data, setData] = useState<iData[] | null>();
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,flags"
      )
      .then((res) => setData(res.data))
      .catch((err: Error) => console.log(err.message));
  }, []);
  return (
    <main className="w-full h-full bg-lightBg dark:bg-darkBg dark:text-darkText">
      <div className="wrapper w-11/12 mx-auto pt-10">
        <div className="bar flex items-center justify-between ">
          <SearchBar />
          <div className="options realtive">
            <Options />
          </div>
        </div>
        <div className="countries mt-10 flex flex-row flex-wrap justify-center">
          {data ? (
            [...data].map(
              (countryInfo, index: number): JSX.Element => (
                <LazyCountry countryInfo={countryInfo} key={index} />
              )
            )
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default Countries;
