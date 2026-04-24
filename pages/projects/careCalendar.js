import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";

const AutoScrollSection = ({ title, images, isDark }) => {
  return (
    <div className="mb-16">
      <h3 className="text-gray-500 uppercase text-sm mb-6 tracking-widest">{title}</h3>
      
      <div className="relative flex overflow-hidden group whitespace-nowrap">
        {/* Dynamic Gradient Masks */}
        <div className={`absolute inset-y-0 left-0 w-20 z-10 pointer-events-none bg-gradient-to-r ${
          isDark ? "from-black to-transparent" : "from-white to-transparent"
        }`}></div>
        <div className={`absolute inset-y-0 right-0 w-20 z-10 pointer-events-none bg-gradient-to-l ${
          isDark ? "from-black to-transparent" : "from-white to-transparent"
        }`}></div>

        <div className="flex flex-nowrap space-x-8 animate-loop-scroll group-hover:paused">
          {[...images, ...images].map((img, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-[300px] laptop:w-[450px] aspect-video rounded-2xl overflow-hidden border flex items-center justify-center transition-all ${
                isDark 
                ? "border-white/10 bg-[#161616]" 
                : "border-black/5 bg-gray-50 shadow-sm"
              }`}
            >
              <img 
                src={img} 
                className="w-full h-full object-contain p-2" 
                alt={`${title} ${index}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CareCalendarCaseStudy = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <>
      <Head>
        <title>Care Calendar | UX Case Study</title>
      </Head>
      {data.showCursor && <Cursor />}
      
      <div className={`container mx-auto mt-10 px-5 laptop:px-0 transition-colors duration-500 ${
        isDark ? "text-white" : "text-black bg-white"
      } ${data.showCursor && "cursor-none"}`}>
        <Header isBlog={true} />
        
        <main className="mt-20 max-w-6xl mx-auto">
          <button 
            onClick={() => window.history.back()}
            className="text-sm mb-10 opacity-70 hover:opacity-100 transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Projects
          </button>

          {/* PROJECT HERO */}
          <section className="mb-20">
            <h1 className="text-6xl laptop:text-8xl font-bold mb-10 tracking-tighter">Care Calendar</h1>
            <div className={`grid grid-cols-1 tablet:grid-cols-3 gap-10 border-t pt-10 ${
              isDark ? "border-white/10" : "border-black/10"
            }`}>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Responsibilities</h3>
                <p className="text-lg">UI/UX Design, Full-Stack Dev</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Tools</h3>
                <p className="text-lg">Figma, React, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Timeline</h3>
                <p className="text-lg">Jan 2026 - April 2026</p>
              </div>
            </div>
          </section>

          {/* PROBLEM STATEMENT */}
          <section className="mb-32 mt-20">
            <div className="grid grid-cols-1 laptop:grid-cols-12 gap-10">
              <div className="laptop:col-span-4">
                <h2 className="text-gray-500 uppercase tracking-widest text-sm font-bold border-l-2 border-blue-600 pl-4">
                  The Context
                </h2>
              </div>
              <div className="laptop:col-span-8">
                <p className="text-2xl laptop:text-4xl font-medium leading-tight mb-8">
                  Healthcare access is challenging for newcomers. 
                  <span className={isDark ? "text-gray-400 italic" : "text-gray-500 italic"}> Booking systems are inefficient and complex.</span>
                </p>
                <div className={`grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-12 pt-10 border-t ${
                  isDark ? "border-white/10" : "border-black/10"
                }`}>
                  <div>
                    <h3 className="text-blue-600 font-mono text-sm mb-4 uppercase tracking-widest">The Gap</h3>
                    <p className="opacity-70 leading-relaxed text-lg text-pretty">Platforms are plagued by difficult navigation and slow performance.</p>
                  </div>
                  <div>
                    <h3 className="text-blue-600 font-mono text-sm mb-4 uppercase tracking-widest">The Objective</h3>
                    <p className="opacity-70 leading-relaxed text-lg text-pretty">Transform booking into a unified, high-performance ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STRATEGY */}
          <section className="mb-32">
            <div className="border-l-8 border-blue-600 pl-8 mb-12">
              <h2 className="text-2xl laptop:text-3xl font-black uppercase tracking-tighter">How Might We...</h2>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mb-12">
              {[
                { label: "EFFICIENCY", text: "Reduce manual documentation by 50%?" },
                { label: "COGNITIVE LOAD", text: "Display alerts without causing fatigue?" },
                { label: "ACCESSIBILITY", text: "Design UI operable with one hand?" },
                { label: "DATA INTEGRITY", text: "Ensure sync in low-connectivity zones?" },
                { label: "SCALABILITY", text: "Handle 200% surges during peaks?" },
                { label: "WELL-BEING", text: "Celebrate tasks to boost morale?" },
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] border transition-all group ${
                  isDark ? "bg-[#161616] border-white/5 hover:border-blue-500/50" : "bg-white border-black/5 hover:border-blue-600/50 shadow-sm"
                }`}>
                  <span className="text-blue-600 font-mono text-sm mb-4 block">0{i+1} / {item.label}</span>
                  <p className="text-2xl font-semibold leading-tight group-hover:text-blue-600 transition-colors">{item.text}</p>
                </div>
              ))}
            </div>

            <div className={`p-12 laptop:p-20 rounded-[3rem] border relative overflow-hidden transition-colors ${
              isDark ? "bg-[#161616] border-white/10" : "bg-blue-50 border-blue-100"
            }`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] -z-10" />
              <h3 className="text-green-600 uppercase tracking-[0.3em] font-black text-xs laptop:text-sm mb-6">Hypothesis</h3>
              <p className="text-3xl laptop:text-5xl font-medium italic leading-tight tracking-tight">
                "Implementing a <span className="underline decoration-green-500 underline-offset-8">traffic-controlled</span> logic reduces fatigue and increases accuracy."
              </p>
            </div>
          </section>

          {/* IA SECTION */}
          <section className="mb-32">
            <h2 className="text-2xl laptop:text-3xl font-black uppercase tracking-tighter mb-12">Information Architecture</h2>
            <div className={`rounded-[2rem] border shadow-2xl overflow-auto custom-scrollbar ${
              isDark ? "bg-[#161616] border-white/10" : "bg-white border-black/10"
            }`}>
              <div className="p-8 laptop:p-12 h-[400px] laptop:h-[600px] flex items-start">
                <img src="/images/info.svg" className="h-full w-auto max-w-none block object-contain" alt="Care Calendar IA" />
              </div>
            </div>
          </section>

          {/* PERSONA */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-12">User Personas</h2>
            <div className={`p-8 laptop:p-16 rounded-[3rem] flex flex-col laptop:flex-row items-center gap-12 border ${
              isDark ? "bg-white text-black" : "bg-gray-900 text-white"
            }`}>
              <div className="w-full laptop:w-2/5 aspect-square bg-gray-200 rounded-[2rem] overflow-hidden">
                <img src="/images/user persona.png" className="w-full h-full object-cover grayscale" alt="The Caregiver" />
              </div>
              <div className="w-full laptop:w-3/5">
                <h4 className="text-5xl laptop:text-7xl font-bold mb-4">The Caregiver</h4>
                <blockquote className={`text-2xl laptop:text-4xl font-medium leading-tight mb-8 border-l-4 pl-6 italic ${
                  isDark ? "border-black" : "border-white"
                }`}>
                  "I need to know exactly what is next, right now."
                </blockquote>
                <div className={`grid grid-cols-1 tablet:grid-cols-2 gap-8 pt-8 border-t ${
                  isDark ? "border-black/10" : "border-white/10"
                }`}>
                  <div><h5 className="font-bold text-lg mb-2 uppercase">Needs</h5><p className="opacity-70">Task sync, one-handed nav.</p></div>
                  <div><h5 className="font-bold text-lg mb-2 uppercase">Pains</h5><p className="opacity-70">Info overload, no offline support.</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* DESIGN EVOLUTION */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-10">Design Evolution</h2>
            <AutoScrollSection title="Low-Fidelity" images={["/images/Low fid.png", "/images/low fid 2.png"]} isDark={isDark} />
            <AutoScrollSection title="Mid-Fidelity" images={["/images/mid1.png", "/images/mid 2.png"]} isDark={isDark} />
            <AutoScrollSection title="High-Fidelity" images={["/images/high1.png", "/images/high2.png"]} isDark={isDark} />
          </section>

          {/* IMPACT */}
          <section className={`mb-40 border-t pt-20 ${isDark ? "border-white/10" : "border-black/10"}`}>
            <h2 className="text-4xl font-bold mb-16">Evaluation</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8 text-center">
              {[
                { i: "✨", h: "Desirability", d: "94% reported decreased stress.", b: "hover:border-blue-500" },
                { i: "⚙️", h: "Feasibility", d: "Seamless REST API integration.", b: "hover:border-green-500" },
                { i: "📈", h: "Viability", d: "40% reduction in ops costs.", b: "hover:border-purple-500" }
              ].map((stat, idx) => (
                <div key={idx} className={`p-10 rounded-3xl border transition-all ${stat.b}/50 ${
                  isDark ? "bg-[#161616] border-white/10" : "bg-white border-black/5 shadow-sm"
                }`}>
                  <div className="text-4xl mb-4">{stat.i}</div>
                  <h3 className="text-xl font-bold mb-4">{stat.h}</h3>
                  <p className="opacity-60 text-sm">{stat.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-40">
            <div className={`rounded-[3rem] p-12 laptop:p-20 border relative overflow-hidden text-center transition-all ${
              isDark ? "bg-[#161616] border-white/10" : "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100"
            }`}>
              <h2 className="text-3xl laptop:text-5xl font-bold mb-6">Explore the full process</h2>
              <a 
                href="https://www.figma.com/..." 
                className={`inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 ${
                  isDark ? "bg-white text-black hover:bg-blue-600 hover:text-white" : "bg-blue-600 text-white hover:bg-black"
                }`}
              >
                Open Figma Prototype
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CareCalendarCaseStudy;