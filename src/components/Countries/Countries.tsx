import React, { lazy, useEffect, useState } from "react";
import Options from "./Options";
import SearchBar from "./SearchBar";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchData from "./FetchData";

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
  const [data, setData] = useState<iData[] | void>();
  const [hasMore, setHasMore] = useState<boolean>(true);
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const result = await FetchData({
          slug: "all?fields=name,flags,population,region,capital,flags",
          start: 0,
          end: 8,
        });
        setData(result);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchInitialData();
  }, []);

  const fetchMoreData = async () => {
    const start = data ? data?.length + 1 : 0;
    const end = data ? data?.length + 8 : 8;
    if (data) {
      if (data.length >= 202) setHasMore(false);
    }

    const result = await FetchData({
      slug: "all?fields=name,flags,population,region,capital,flags",
      start: start,
      end: end,
    });
    data?.concat(result);
    setData(data?.concat(result));
  };

  return (
    <main className="w-full h-full bg-lightBg dark:bg-darkBg dark:text-darkText">
      <div className="wrapper w-11/12 mx-auto pt-10">
        <div className="bar flex items-center justify-between ">
          <SearchBar />
          <div className="options realtive">
            <Options />
          </div>
        </div>

        <InfiniteScroll
          dataLength={data ? data.length : 0}
          next={() => fetchMoreData()}
          hasMore={hasMore}
          loader={<h2 className="text-center mb-4">Loading...</h2>}
          endMessage ={<h2 className="text-center mb-4">No more countries</h2>}
        >
          <div className="countries mt-10 flex flex-row flex-wrap justify-center">
            {data
              ? data!.map(
                  (countryInfo, index: number): JSX.Element => (
                    <LazyCountry countryInfo={countryInfo} key={index} />
                  )
                )
              : "Please wait"}
          </div>
        </InfiniteScroll>
      </div>
    </main>
  );
};

export default Countries;
