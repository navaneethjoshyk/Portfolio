import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume, socials } = data;
  const emailSocial = socials.find((social) => social.title === "Email");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Mobile Navigation - Keep as is */}
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2">
              <h1 onClick={() => router.push("/")} className="font-medium p-2 link">
                {name}.
              </h1>
              <div className="flex items-center">
                {mounted && (
                  <>
                    {data.darkMode && (
                      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} />
                      </Button>
                    )}
                    <Popover.Button>
                      <img className="h-5" src={`/images/${!open ? (theme === "dark" ? "menu-white.svg" : "menu.svg") : (theme === "light" ? "cancel.svg" : "cancel-white.svg")}`} />
                    </Popover.Button>
                  </>
                )}
              </div>
            </div>
            <Popover.Panel className={`absolute right-0 z-10 w-11/12 p-4 ${mounted && theme === "dark" ? "bg-slate-800" : "bg-white"} shadow-md rounded-md`}>
              <div className="grid grid-cols-1">
                <Button onClick={handleWorkScroll}>Work</Button>
                <Button onClick={handleAboutScroll}>About</Button>
                {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
                {showResume && <Button onClick={() => router.push("/resume")}>Resume</Button>}
                <Button onClick={() => window.open(emailSocial ? emailSocial.link : "mailto:your@email.com")}>Contact</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* FIXED Desktop Navigation */}
      <div
        className={`hidden tablet:flex flex-row items-center justify-between fixed top-0 left-0 w-full z-50 transition-all duration-300 px-10 py-4
        ${
          mounted && theme === "dark" 
            ? "bg-slate-900/70 backdrop-blur-md border-b border-white/10" 
            : "bg-white/70 backdrop-blur-md border-b border-black/5"
        }`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer text-xl"
        >
          {name}.
        </h1>
        <div className="flex items-center gap-2">
          {!isBlog ? (
            <>
              <Button onClick={handleWorkScroll}>Work</Button>
              <Button onClick={handleAboutScroll}>About</Button>
              {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
              {showResume && <Button onClick={() => router.push("/resume")}>Resume</Button>}
            </>
          ) : (
            <>
              <Button onClick={() => router.push("/")}>Home</Button>
              {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
              {showResume && <Button onClick={() => router.push("/resume")}>Resume</Button>}
            </>
          )}
          <Button onClick={() => window.open(emailSocial ? emailSocial.link : "mailto:your@email.com")}>
            Contact
          </Button>

          {mounted && data.darkMode && (
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} />
            </Button>
          )}
        </div>
      </div>
      
      {/* Spacer to prevent content from jumping under the fixed header */}
      <div className="hidden tablet:block h-20"></div>
    </>
  );
};

export default Header;