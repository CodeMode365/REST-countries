import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

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

  return (
    <main className="w-full dark:bg-darkBg dark:text-darkText">
      <button className="m-4 border dark:border-darkText px-6 py-1 rounded-md">
        <Link to="/">Back</Link>
      </button>
      <div className="container w-full flex flex-col items-center  ">
        <div
          className="flag "
          style={{ background: "red", height: 384, width: 384 }}
        >
          <img src={""} alt="" />
        </div>
        <div className="details mt-5">
          <h2>{country}</h2>
          <div className="cols grid grid-cols-2 mt-3 gap-10">
            <div className="col-1">
              <h3 className="font-semibold">
                Native Name : <span className="font-normal">{}</span>
              </h3>
              <h3 className="font-semibold">
                Population : <span className="font-normal">{}</span>
              </h3>
              <h3 className="font-semibold">
                Region : <span className="font-normal">{}</span>
              </h3>
              <h3 className="font-semibold">
                Sub Region : <span className="font-normal">{}</span>
              </h3>
              <h3 className="font-semibold">
                Capital : <span className="font-normal">{}</span>
              </h3>
            </div>
            <div className="col-2">
              <h3 className="font-semibold">
                Top Lvel Domain : <span className="font-normal">{}</span>
              </h3>
              <h3 className="font-semibold">
                Currencies : <span className="font-normal">{}</span>
              </h3>
              <h3 className="font-semibold">
                Languages : <span className="font-normal">{}</span>
              </h3>
            </div>
          </div>
          <h3 className="font-semibold text-center w-full bg-darkBg">
            Border Countries :{" "}
            <span className="font-normal">Country2,country2,countyr3</span>
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Country;
