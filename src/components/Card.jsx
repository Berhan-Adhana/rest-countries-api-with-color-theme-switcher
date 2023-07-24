import React from "react";

const Card = (country) => {
  const { name, flags, navigate, population, region, capital } = country;
  return (
    <article
      style={{
        boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)",
      }}
      className="w-[95%] md:max-w-sm mx-auto  rounded-md text-textColor overflow-hidden dark:bg-containerColor dark:text-white cursor-pointer"
      onClick={navigate}
    >
      <img
        src={flags.png}
        alt={`${name} flag `}
        className="w-full  h-[160px] object-cover"
      />
      <div className="px-6 pt-6 flex flex-col justify-center gap-y-2 ">
        <h3 className="font-[800] text-[18px] leading-[26px] mb-2">{name}</h3>
        <p className="text-[14px] leading-4 font-[300]">
          <span className="font-semibold ">population: </span>
          {population}
        </p>
        <p className="text-[14px] leading-4 font-[300]">
          <span className="font-semibold ">Region: </span>
          {region}
        </p>
        <p className="text-[14px] leading-4 font-[300] pb-2">
          <span className="font-semibold  ">Capital: </span>
          {capital}
        </p>
      </div>
    </article>
  );
};

export default Card;
