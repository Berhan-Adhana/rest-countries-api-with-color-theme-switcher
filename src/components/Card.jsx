import React from "react";

const Card = (country) => {
  const { name, flags, navigate, population, region, capital } = country;
  return (
    <article
      className="w-[95%] max-w-sm  mx-auto shadow rounded-md overflow-hidden dark:bg-[var(--container-dark-color)] dark:text-white cursor-pointer"
      onClick={navigate}
    >
      <img src={flags.png} alt="" className="w-full  h-[160px] object-cover" />
      <div className="ml-3 my-2">
        <h3 className="font-bold mb-3">{name}</h3>
        <p>
          <span className="font-semibold">population: </span>
          {population}
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p>
          {" "}
          <span className="font-semibold">Capital: </span>
          {capital}
        </p>
      </div>
    </article>
  );
};

export default Card;
