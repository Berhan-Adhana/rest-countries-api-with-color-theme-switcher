import React, { useState } from "react";
import { useNavigate } from "react-router";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Select from "../components/Select";
import { useGetCountries } from "../services/countries";

const Home = () => {
  const [contienent, setContienent] = useState(
    localStorage.getItem("contienent") || "All"
  );
  const [input, setInput] = useState(localStorage.getItem("searchStr") || "");
  const navigate = useNavigate();
  const { isLoading, data } = useGetCountries(contienent, input);

  const handleSearchChange = (e) => {
    setInput(e.target.value);
    //persist on the localStorage
    localStorage.setItem("searchStr", e.target.value);
  };

  const handleContienentChange = (e) => {
    setContienent(e.target.value);
    //persist on the localStorage
    localStorage.setItem("contienent", e.target.value);
  };

  const navigateToDetails = (country) => {
    navigate(`/details/${country?.name}`, {
      state: { data: country },
    });
  };

  return (
    <main className="dark:bg-[var(--body-dark-color)]  dark:text-white min-h-screen relative">
      <div className="flex flex-col md:flex-row md:items-center gap-y-10 md:justify-between px-4 pt-6">
        <Search input={input} handleChange={handleSearchChange} />
        <Select
          handleContienentChange={handleContienentChange}
          value={contienent}
        />
      </div>

      <div className="grid gap-y-10 xl:gap-[75px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-[80px]  px-[55px] pt-[28px] ">
        {isLoading ? (
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Loader />
          </div>
        ) : (
          data?.map((country, index) => {
            return (
              <Card
                name={country.name}
                population={country.population}
                navigate={() => {
                  navigateToDetails(country);
                }}
                region={country.region}
                flags={country.flags}
                capital={country.capital}
              />
            );
          })
        )}
      </div>
    </main>
  );
};

export default Home;
