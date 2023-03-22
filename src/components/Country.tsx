import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import FetchData from "./FetchData";

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
  subregion: string;
  languages: Object;
  currencies: Object;
  borders: string[];
  tld: string[]; //top level domains
}

const Country = () => {
  const { country } = useParams();
  const [data, setData] = useState<iData | null>();

  useEffect(() => {
    const Fetch = async (): Promise<void> => {
      // try {
      const result = await FetchData({
        slug: `name/${country}?fields=name,flags,population,region,capital,flags,subregion,languages,currencies,borders,tld`,
      });
      setData(result[0]);
    };
    Fetch();
  }, []);

  return (
    <main
      className="w-full  dark:bg-darkBg dark:text-darkText"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <button className="m-4 border dark:border-darkText px-6 py-1 rounded-md dark:hover:bg-lightBg dark:hover:text-lightText transition-colors	delay-150">
        <Link to="/">Back</Link>
      </button>

      <div className="container w-full flex flex-col lg:flex-row items-center justify-center gap-10  p-5 lg:p-40">
        <div className="flag" style={{ maxWidth: "400px" }}>
          <img src={data?.flags.svg} alt={""} />
        </div>
        <div className="details mt-5">
          <h1 className="text-2xl text-bolder">{data?.name.common}</h1>
          <div className="cols grid grid-cols-2 mt-3 gap-10">
            <div className="col-1">
              <h3 className="font-semibold lg:text-lg text-md mb-2">
                Native Name :{" "}
                <span className="font-normal">{data?.name.common}</span>
              </h3>
              <h3 className="font-semibold  lg:text-lg text-md mb-2">
                Population :{" "}
                <span className="font-normal">{data?.population}</span>
              </h3>
              <h3 className="font-semibold  lg:text-lg text-md mb-2">
                Region : <span className="font-normal">{data?.region}</span>
              </h3>
              <h3 className="font-semibold  lg:text-lg text-md mb-2">
                Sub Region :{" "}
                <span className="font-normal">{data?.subregion}</span>
              </h3>
              <h3 className="font-semibold  lg:text-lg text-md mb-2">
                Capital : <span className="font-normal">{data?.capital}</span>
              </h3>
            </div>
            <div className="col-2  ">
              <h3 className="font-semibold lg:text-lg text-md mb-2">
                Top Lvel Domain :{" "}
                <span className="font-normal">{data?.tld.join(" , ")}</span>
              </h3>
              <h3 className="font-semibold lg:text-lg text-md mb-2">
                Currencies :{" "}
                <span className="font-normal">
                  {data ? Object.keys(data.currencies).join(" , ") : ""}
                </span>
              </h3>
              <h3 className="font-semibold lg:text-lg text-md mb-2">
                Languages :{" "}
                <span className="font-normal lg:text-lg text-md mb-2">
                  {data ? Object.values(data.languages).join(" , ") : " "}
                </span>
              </h3>
            </div>
          </div>
          <h3 className="font-semibold text-center w-full dark:bg-darkBg">
            Border Countries :{/* <span className="font-normal"> */}{" "}
            {data
              ? data.borders.map((item) => {
                  return (
                    <button
                      key={item}
                      className="border mx-2 px-3 hover:bg-darkBg hover:text-darkText dark:hover:bg-lightBg dark:hover:text-lightText rounded dark:bg-darkBg dark:text-darkText transition-colors mb-3"
                    >
                      {item}
                    </button>
                  );
                })
              : "null"}
            {/* </span> */}
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Country;
