import axios from "axios";

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

const FetchData = async ({
  slug,
}: {
  slug: string;
}) => {
  try {
    const { data } = await axios.get(`https://restcountries.com/v3.1/${slug}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default FetchData;
