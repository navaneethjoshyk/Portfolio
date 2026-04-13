import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              Your business deserves a better website
            </h1>
            
            {/* Added a larger top margin here */}
            <div className="mt-10 laptop:mt-20">
              <Button type="primary">Schedule a call</Button>
            </div>

            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by {"Navaneeth "}
      </h1>
    </>
  );
};

export default Footer;