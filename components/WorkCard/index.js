import React from "react";

const WorkCard = ({ img, name, description, onClick, date }) => {
  return (
    <div
      className="group overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] p-8 transition-all hover:bg-[#161616] cursor-pointer"
      onClick={onClick}
    >
      {/* Header: Title and Read More */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white tablet:text-3xl">
            {name}
          </h2>
          <p className="mt-1 text-sm text-gray-500">{date || "Recent Project"}</p>
        </div>
        
        <div className="flex items-center gap-2 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
          <span>Read more</span>
          <span className="text-xl">→</span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 text-lg leading-relaxed text-gray-400">
        {description}
      </p>

      {/* Image Container (The White Box) */}
      <div className="mt-10 overflow-hidden rounded-xl bg-white aspect-video flex items-center justify-center">
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