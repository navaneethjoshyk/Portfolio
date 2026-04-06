import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = React.forwardRef(
  ({ children, type, onClick, classes, ...props }, ref) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    // Determine the theme classes ONLY after mounting
    let themeClasses = "";
    if (mounted) {
      if (type === "primary") {
        themeClasses = theme === "dark" ? "bg-white text-black" : "bg-black text-white";
      } else {
        themeClasses = theme === "dark" ? "hover:bg-slate-600 text-white" : "hover:bg-slate-100";
      }
    } else {
      // Skeleton state for SSR to prevent mismatch
      themeClasses = type === "primary" ? "bg-gray-200 text-transparent" : "opacity-0";
    }

    return (
      <button
        ref={ref}
        onClick={onClick}
        type="button"
        {...props}
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${
          data.showCursor && "cursor-none"
        } ${themeClasses} ${classes} ${type !== "primary" ? "flex items-center" : ""}`}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;