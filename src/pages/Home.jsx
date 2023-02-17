import React, { useState } from "react";
import { useNavigate } from "react-router";
import Card from "../components/Card";
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
    if (e.target.value.length === 0) setInput("");
    else setInput(e.target.value);
  };

  const handleContienentChange = (e) => {
    if (e.target.value === "All") setContienent("All");
    else setContienent(e.target.value);
  };

  const saveToLocalStorageAndNav = (country) => {
    localStorage.setItem("searchStr", input);
    localStorage.setItem("contienent", contienent);
    navigate(`/details/${country?.name}`, {
      state: { data: country },
    });
  };

  return (
    <section className="dark:bg-[var(--body-dark-color)]  dark:text-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <Search input={input} handleChange={handleSearchChange} />
        <Select
          handleContienentChange={handleContienentChange}
          value={contienent}
        />
      </div>

      <div className="grid place-items-center w-full p-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:mx-1 lg:grid-cols-4 lg:gap-3 lg:mx-1 mt-5">
        {isLoading
          ? "Loading..."
          : data?.map((country, index) => {
              return (
                <Card
                  name={country.name}
                  population={country.population}
                  navigate={() => {
                    saveToLocalStorageAndNav(country);
                  }}
                  region={country.region}
                  flags={country.flags}
                  capital={country.capital}
                />
              );
            })}
      </div>
    </section>
  );
};

export default Home;
