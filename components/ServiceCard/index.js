import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-full p-6 mob:p-8 rounded-xl transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link border border-transparent hover:border-slate-200 dark:hover:border-slate-700`}
    >
      {/* Increased heading size from text-3xl to text-5xl */}
      <h1 className="text-4xl laptop:text-5xl font-bold">
        {name ? name : "Heading"}
      </h1>
      
      {/* Increased description size from text-xl to text-2xl and adjusted leading */}
      <p className="mt-8 opacity-60 text-xl laptop:text-2xl leading-relaxed">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      </p>
    </div>
  );
};

export default ServiceCard;