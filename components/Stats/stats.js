import React from "react";

const Stats = ({ stats }) => {
  return (
    <div className="mt-20 laptop:mt-40 px-2 laptop:px-0">
      <h1 className="text-center text-3xl tablet:text-5xl font-regular mb-10">
        Numbers don't lie
      </h1>

      <div className="grid grid-cols-2 tablet:grid-cols-3 gap-10 text-center">
        {stats.map((item) => (
          <div key={item.id}>
            <h2 className="text-3xl tablet:text-5xl font-regular">
              {item.number}
            </h2>
            <p className="mt-2 text-sm opacity-60">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;