import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCountries = (region, searchStr) => {
  console.log(region);
  console.log(searchStr);
  let queryString;

  if (region === "All" && searchStr === "") {
    queryString = `https://rest-countries-api-with-json-server.vercel.app/countries`;
  }

  if (region === "All" && searchStr !== "") {
    queryString = `https://rest-countries-api-with-json-server.vercel.app/countries?name_like=${searchStr}`;
    // console.log(queryString);
  }

  if (region !== "All" && searchStr === "") {
    queryString = `https://rest-countries-api-with-json-server.vercel.app/countries?region=${region}`;
    // console.log(queryString);
  }
  if (region !== "All" && searchStr !== "") {
    queryString = `https://rest-countries-api-with-json-server.vercel.app/countries?region=${region}&name_like=${searchStr}`;
    // console.log(queryString);
  }

  return useQuery({
    queryKey: ["countries", region, searchStr],
    queryFn: async () => {
      return await axios.get(queryString).then((res) => {
        // console.log(res.data);
        return res.data;
      });
    },
  });
};
export const useGetCountry = (name) => {
  return useQuery({
    queryKey: ["country", name],
    queryFn: async () => {
      return await axios
        .get(
          `https://rest-countries-api-with-json-server.vercel.app/countries?name=${name}`
        )
        .then((res) => res.data);
    },
  });
};
export const useGetCountryByAlpha3Code = (borders) => {
  let countries = [];
  return useQuery({
    queryKey: ["country", borders],
    queryFn: async () => {
      if (!borders) {
        return;
      } else
        return Promise.all(
          borders?.map(async (code) => {
            await axios
              .get(
                `https://rest-countries-api-with-json-server.vercel.app/countries?alpha3Code=${code}`
              )
              .then((res) => {
                countries.push(res.data[0]);
                return res.data[0];
              });
          })
        )
          .then((values) => {
            return countries;
          })
          .finally(() => {
            countries = [];
          });
    },
  });
};
