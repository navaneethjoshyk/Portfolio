import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Workflow = ({ workflow }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!workflow || workflow.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <h1 className="tablet:m-10 text-2xl font-bold">My workflow.</h1>
      <div className="mt-5 tablet:m-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
        {workflow.map((step) => (
          <div
            key={step.id}
            className={`p-8 rounded-xl transition-all duration-300 border ${
              // This is the CRITICAL change: 
              // We only apply theme-specific colors if mounted is true.
              mounted 
                ? theme === "dark"
                  ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-white"
                  : "bg-gray-50 border-gray-100 hover:bg-gray-100 text-black"
                : "bg-transparent border-transparent" 
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="h-6 w-6 opacity-50" />
              <span className="text-4xl font-bold opacity-10">{step.id}</span>
            </div>
            <h2 className="text-xl font-bold mt-4">{step.title}</h2>
            <p className="mt-4 opacity-60 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;