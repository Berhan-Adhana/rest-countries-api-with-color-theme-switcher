import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BiArrowBack } from "react-icons/bi";
import { useGetCountryByAlpha3Code } from "../services/countries";
const Details = (props) => {
  const { state } = useLocation();
  const [country, setCountry] = useState(state.data);
  const {
    name,
    flags,
    population,
    capital,
    subregion,
    nativeName,
    topLevelDomain,
    currencies,
    languages,
  } = country;
  const navigate = useNavigate();

  const { isLoading: isBorderLoading, data: borders } =
    useGetCountryByAlpha3Code(country?.borders);

  return (
    <section className="dark:bg-[var(--body-dark-color)] dark:text-white pt-6 px-5">
      <button
        className="px-4 py-2 dark:bg-[var(--container-dark-color)] dark:text-white shadow-lg flex items-center justify-center gap-x-1 rounded-md"
        onClick={() => {
          navigate(-1);
        }}
      >
        <BiArrowBack />
        Back
      </button>

      <div className="container grid  min-h-screen pt-4 md:my-auto md:items-center md:place-items-start">
        <div className="grid gap-y-8 place-items-center grid-cols-1   md:grid-cols-2  md:gap-x-4 ">
          <img src={flags.png} alt="" className="rounded-md md:max-w-sm mx-2" />
          {/* right card */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
            {/* right-left card */}
            <div>
              <h3 className="font-bold text-[22px] md:mb-4 md:text-[32px] md:leading-8">
                {name}
              </h3>
              <div className="my-2 leading-8 md:my-0">
                <p className="font-semibold text-[22px]">
                  Native Name:{"  "}
                  <span className="text-[16px]  font-normal opacity-75">
                    {nativeName}
                  </span>
                </p>
                <p className="font-semibold text-[22px]">
                  Population:{" "}
                  <span className="text-[16px]  font-normal opacity-75">
                    {population}
                  </span>
                </p>
                <p className="font-semibold text-[22px]">
                  Sub Region:{" "}
                  <span className="text-[16px]  font-normal opacity-75">
                    {subregion}
                  </span>
                </p>
                <p className="font-semibold text-[22px]">
                  Capital:{" "}
                  <span className="text-[16px]  font-normal opacity-75">
                    {capital}
                  </span>
                </p>
              </div>
            </div>
            {/* right-right card */}

            <div className="mt-8  leading-8">
              <p className="font-semibold text-[22px] md:mt-4">
                Top Level Domain:{" "}
                <span className="text-[16px]  font-normal opacity-75">
                  {topLevelDomain[0]}
                </span>
              </p>
              <p className="font-semibold text-[22px]">
                Currencies:{" "}
                <span className="text-[16px]  font-normal opacity-75">
                  {currencies[0].code}
                </span>
              </p>
              <p className="font-semibold text-[22px]">
                Languages:{" "}
                <span className="text-[16px]  font-normal opacity-75">
                  {languages[0].name}
                </span>
              </p>
              {/* Borders */}
            </div>
            <div>
              {isBorderLoading ? (
                "Loading..."
              ) : (
                <div>
                  {}
                  <h2 className="text-2xl font-bold ">
                    Boder Countries:{!borders ? " None" : ""}{" "}
                  </h2>
                  <div className="flex gap-4 flex-wrap lg:flex-nowrap mt-3">
                    {borders?.map((border, index) => {
                      return (
                        <button
                          className="px-4 py-2 rounded-md min-[100px] shadow-lg dark:bg-[var(--container-dark-color)] "
                          key={index}
                          onClick={() => {
                            setCountry(border);
                          }}
                        >
                          {border.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
