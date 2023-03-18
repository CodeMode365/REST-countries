import React, { useEffect, useState } from "react";

interface props {
  countryInfo: Object;
}

const SingleCountry: React.FC<props> = ({ countryInfo }) => {
  const { name, population, region, capital, flags } = countryInfo;
  return (
    <div
      className="container bg-lightEle dark:bg-darkEle w-80 m-4 dark:text-darkText text-lightText"
      style={{ height: "335px" }}
    >
      <div className="flag h-3/6 mx-auto">
        <img src={flags.svg} alt={name.common} className="w-full h-full" />
      </div>
      <div className="details mx-5 mt-4">
        <div className="name text-2xl mb-4">{name.common}</div>
        <div className="other-info">
          <h3 className="font-semibold">
            Population : <span className="font-normal">{population}</span>
          </h3>
          <h3 className="font-semibold">
            Region : <span className="font-normal">{region}</span>
          </h3>
          <h3 className="font-semibold">
            Capital : <span className="font-normal">{capital}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
