import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const WorkCard = ({ img, name, description, onClick, date }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      onClick={onClick}
      className={`group overflow-hidden rounded-xl p-8 transition-all duration-300 border cursor-pointer ${
        mounted
          ? theme === "dark"
            ? "bg-[#161616] border-white/10 hover:bg-[#1c1c1c] text-white"
            : "bg-gray-50 border-gray-100 hover:bg-gray-100 text-black"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Header: Title and Read More */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className={`text-2xl font-bold tablet:text-3xl ${
            mounted && theme === "dark" ? "text-white" : "text-black"
          }`}>
            {name}
          </h2>
          <p className="mt-1 text-sm opacity-50 font-mono uppercase tracking-wider">
            {date || "Recent Project"}
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
          <span>View Project</span>
          <span className="text-xl">→</span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 text-lg leading-relaxed opacity-70">
        {description}
      </p>

      {/* Image Container */}
      <div className={`mt-10 overflow-hidden rounded-xl aspect-video flex items-center justify-center border transition-all ${
        mounted && theme === "dark" 
          ? "bg-[#0d0d0d] border-white/5" 
          : "bg-white border-gray-200"
      }`}>
        <img
          src={img}
          alt={name}
          className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default WorkCard;