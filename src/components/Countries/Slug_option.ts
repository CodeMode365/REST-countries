interface iOption {
  all: string;
  region: string;
  name: string;
}

const Slug_Option: iOption = {
  all: "all?fields=name,flags,population,region,capital,flags",
  region: "region/",
  name: "name/",
};

export default Slug_Option;
