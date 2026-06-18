import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      {data.showCursor && <Cursor />}
      <div className={`container mx-auto mb-20 px-4 ${data.showCursor && "cursor-none"}`}>
        <Header isBlog />
        
        {mount && (
          <div className="mt-12 w-full flex flex-col items-center">
            {/* Main Resume Container */}
            <div
              className={`w-full max-w-5xl p-8 md:p-16 rounded-2xl border transition-all duration-300 ${
                theme === "dark" 
                  ? "bg-slate-900/50 border-slate-800 text-slate-100 shadow-2xl" 
                  : "bg-white border-gray-100 text-slate-900 shadow-lg"
              }`}
            >
              {/* Header Section / Introduction */}
              <div className="border-b border-dashed pb-8 mb-8 md:flex md:justify-between md:items-start gap-6 border-slate-700/20">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                    {name}
                  </h1>
                  <h2 className="text-xl font-medium mt-3 text-blue-500 dark:text-teal-400">
                    {resume.tagline}
                  </h2>
                  <p className="text-base mt-4 opacity-75 leading-relaxed font-normal">
                    {resume.description}
                  </p>
                </div>
                <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-2 bg-slate-500/5 p-4 rounded-xl border border-slate-500/10">
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-50">Connect</span>
                  <Socials />
                </div>
              </div>

              {/* Two Column Layout for Body */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Left Column: Experience (Takes 2/3 space) */}
                <div className="lg:col-span-2 space-y-10">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      <h3 className="text-2xl font-bold tracking-tight">Professional Experience</h3>
                    </div>
                    
                    <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-8 pl-6">
                      {resume.experiences.map(({ id, dates, type, position, bullets }) => (
                        <div key={id} className="relative group">
                          {/* Timeline Dot */}
                          <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900 transition-transform group-hover:scale-125" />
                          
                          <ProjectResume
                            dates={dates}
                            type={type}
                            position={position}
                            bullets={bullets}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Skills & Education (Takes 1/3 space) */}
                <div className="space-y-10">
                  {/* Education Card */}
                  <div className={`p-6 rounded-xl border ${theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-gray-50 border-gray-100"}`}>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      🎓 Education
                    </h3>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-base leading-snug">{resume.education.universityName}</h4>
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 dark:text-blue-400">
                        {resume.education.universityDate}
                      </span>
                      <p className="text-xs mt-2 opacity-70 leading-relaxed">
                        {resume.education.universityPara}
                      </p>
                    </div>
                  </div>

                  {/* Technical Skills Stack */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold border-b pb-2 border-slate-500/20">🛠 Tech Stack & Skills</h3>

                    {resume.languages && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-500 dark:text-teal-400 mb-2">Languages</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {resume.languages.map((language, index) => (
                            <span key={index} className="text-xs px-2.5 py-1 rounded-md font-medium bg-slate-500/10 border border-slate-500/10">
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {resume.frameworks && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-500 dark:text-teal-400 mb-2">Frameworks</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {resume.frameworks.map((framework, index) => (
                            <span key={index} className="text-xs px-2.5 py-1 rounded-md font-medium bg-slate-500/10 border border-slate-500/10">
                              {framework}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {resume.others && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-500 dark:text-teal-400 mb-2">Design & Methodologies</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {resume.others.map((other, index) => (
                            <span key={index} className="text-xs px-2.5 py-1 rounded-md font-medium bg-slate-500/10 border border-slate-500/10">
                              {other}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>

              </div>
              {/* End of Layout Grid */}

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;