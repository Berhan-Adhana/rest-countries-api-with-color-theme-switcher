import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BiArrowBack } from "react-icons/bi";
import { useGetCountryByAlpha3Code } from "../services/countries";
import Loader from "../components/Loader";
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
    <section className="dark:bg-[var(--body-dark-color)] px-7 py-10 dark:text-white transition-all duration-500">
      <button
        className="px-4 py-2 dark:bg-containerColor dark:text-white shadow-lg flex items-center justify-center gap-x-1 rounded-md"
        onClick={() => {
          navigate(-1);
        }}
      >
        <BiArrowBack />
        Back
      </button>

      <div className=" grid min-h-screen pt-[64px] lg:pt-[80px]   transition-opacity duration-1000">
        <article className="grid gap-y-[44px]  grid-cols-1   md:grid-cols-2 md:gap-x-[40px]  xl:gap-x-[144px] ">
          <img
            src={flags.png}
            alt={`${name} "flag"`}
            className="rounded-md  object-cover h-[275.92px] xl:h-[401px]"
          />
          {/* right card */}
          <div className="flex flex-col gap-y-4 ">

          <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
            {/* right-left card */}
            <div>
              <h3 className="font-[800] text-[22px] leading-[30.01px] lg:text-[32px] lg:leading-[43.65px]">
                {name}
              </h3>
              <div className="my-2 leading-8 md:my-0 ">
                <p className="font-[600] text-[14px] text-textColor dark:text-white lg:text-[16px]">
                  Native Name:{"  "}
                  <span className="font-[300]">{nativeName}</span>
                </p>

                <p className="font-[600] text-[14px] text-textColor dark:text-white lg:text-[16px]">
                  Population: <span className="font-[300]">{population}</span>
                </p>

                <p className="font-[600] text-[14px] text-textColor dark:text-white lg:text-[16px]">
                  Sub Region: <span className="font-[300]">{subregion}</span>
                </p>
                <p className="font-[600] text-[14px] text-textColor dark:text-white lg:text-[16px]">
                  Capital: <span className="font-[300]">{capital}</span>
                </p>
              </div>
            </div>
            {/* right-right card */}

            <div className="mt-8  leading-8">
              <p className="font-[600] text-[14px] text-textColor dark:text-white lg:text-[16px]">
                Top Level Domain:{" "}
                <span className="font-[300]">{topLevelDomain[0]}</span>
              </p>
              <p className="font-[600] text-[14px] text-textColor dark:text-white lg:text-[16px]">
                Currencies:{" "}
                <span className="font-[300]">{currencies[0].code}</span>
              </p>
              <p className="font-[600] text-[14px] text-textColor dark:text-white lg:text-[16px]">
                Languages:{" "}
                <span className="font-[300]">{languages[0].name}</span>
              </p>

              {/* Borders */}
            </div>
          </div>
            <div className="w-full">
              {isBorderLoading ? (
                <Loader />
              ) : (
                <div className="w-full">
                  {}
                  <h2 className=" font-[600] text-[16px] leading-6 ">
                    Boder Countries:{!borders ? " None" : ""}{" "}
                  </h2>
                  <div className="flex flex-wrap gap-y-4 gap-x-4 mt-3">
                    {borders?.map((border, index) => {
                      return (
                        <button
                          className="px-4 py-4 rounded-md whitespace-nowrap  text-center shadow-lg dark:bg-containerColor text-[12px] leading-[16.37px]"
                          key={index}
                          onClick={() => {
                            setCountry(border);
                          }}
                        >
                          {border.name.length > 10
                            ? `${border.name.slice(0, 10)}  ...`
                            : border.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Details;
