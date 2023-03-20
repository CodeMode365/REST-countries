import React, { lazy, useEffect, useState } from "react";
import Options from "./Options";
import SearchBar from "./SearchBar";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchData from "../FetchData";
import { Link } from "react-router-dom";

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
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [Slug, setSlug] = useState<string>(
    "all?fields=name,flags,population,region,capital,flags"
  );

  const fetchMoreData = async (): Promise<void> => {
    const start = data ? data?.length + 1 : 0;
    const end = data ? data?.length + 8 : 8;

    const result = await FetchData({
      slug: Slug,
    });

    if (data) setData(data?.concat(result.splice(start, end)));
    else setData(result.splice(start, end));

    if (data) {
      if (data.length + 1 >= result.length) setHasMore(false);
      else setHasMore(true);
    }
  };

  const fetchByRegion = async (region: string): Promise<void> => {
    if (data) {
      data.length = 0;
    }
    setSlug(`region/${region}`);
    await fetchMoreData();
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <main
      className="w-full h-full bg-lightBg dark:bg-darkBg dark:text-darkText "
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <div className="wrapper w-11/12 mx-auto pt-10">
        <div className="bar flex items-center justify-between ">
          <SearchBar />
          <div className="options realtive">
            <Options fetchByRegion={fetchByRegion} />
          </div>
        </div>

        <InfiniteScroll
          dataLength={data ? data.length : 0}
          next={() => fetchMoreData()}
          hasMore={hasMore}
          loader={<h2 className="text-center mb-4">Loading...</h2>}
          endMessage={<h2 className="text-center mb-4">No more countries</h2>}
        >
          <div className="countries mt-10 flex flex-row flex-wrap justify-center">
            {data
              ? data!.map(
                  (countryInfo, index: number): JSX.Element => (
                    <Link to={`/${countryInfo.name.common}`} key={index}>
                      <LazyCountry countryInfo={countryInfo} />
                    </Link>
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
