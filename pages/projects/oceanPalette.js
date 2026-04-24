import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";

// Component for the animated visual displays
const AutoScrollSection = ({ title, images, theme, mounted }) => {
  return (
    <div className="mb-16">
      <h3 className="text-gray-500 uppercase text-sm mb-6 tracking-widest">{title}</h3>
      
      <div className="relative flex overflow-hidden group whitespace-nowrap">
        {/* Gradient Masks */}
        <div className={`absolute inset-y-0 left-0 w-20 z-10 pointer-events-none bg-gradient-to-r ${
          mounted && theme === "dark" ? "from-black to-transparent" : "from-gray-50 to-transparent"
        }`}></div>
        <div className={`absolute inset-y-0 right-0 w-20 z-10 pointer-events-none bg-gradient-to-l ${
          mounted && theme === "dark" ? "from-black to-transparent" : "from-gray-50 to-transparent"
        }`}></div>

        <div className="flex flex-nowrap space-x-8 animate-loop-scroll group-hover:paused">
          {/* We combine sets to ensure seamless loop */}
          {[...images, ...images].map((img, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-[300px] laptop:w-[450px] aspect-video rounded-2xl overflow-hidden border flex items-center justify-center transition-colors ${
                mounted && theme === "dark" 
                ? "border-white/10 bg-[#161616]" 
                : "border-black/5 bg-white shadow-sm"
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

const OceanPaletteCaseStudy = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <>
      <Head>
        <title>Ocean Palette | Premium Culinary Design</title>
      </Head>
      {data.showCursor && <Cursor />}
      
      <div className={`container mx-auto mt-10 px-5 laptop:px-0 transition-colors duration-300 ${
        isDark ? "text-white" : "text-black"
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
          <section className="mb-24">
            <h1 className="text-6xl laptop:text-8xl font-black mb-10 tracking-tighter">Ocean Palette</h1>
            <div className={`grid grid-cols-1 tablet:grid-cols-3 gap-10 border-t pt-10 ${
              isDark ? "border-white/10" : "border-black/10"
            }`}>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-xs mb-2">Role</h3>
                <p className="text-lg font-medium italic">UI/UX Designer & Lead Developer</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-xs mb-2">Focus</h3>
                <p className="text-lg font-medium italic">High-Aesthetic B2C Experience</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-xs mb-2">Tech Stack</h3>
                <p className="text-lg font-medium italic">Next.js, Framer Motion, Tailwind</p>
              </div>
            </div>
          </section>

          {/* THE NARRATIVE */}
          <section className="mb-32">
            <div className="grid grid-cols-1 laptop:grid-cols-12 gap-10">
              <div className="laptop:col-span-4">
                <h2 className="text-gray-500 uppercase tracking-widest text-sm font-bold border-l-2 border-sky-400 pl-4">
                  The Problem
                </h2>
              </div>
              <div className="laptop:col-span-8">
                <p className="text-2xl laptop:text-4xl font-light leading-snug mb-8">
                  Restaurant websites fail to communicate the <span className={isDark ? "text-white font-semibold" : "text-sky-600 font-semibold"}>sensory experience</span> of food, leading to a brand disconnect.
                </p>
                <div className={`grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-12 pt-10 border-t ${
                  isDark ? "border-white/10" : "border-black/10"
                }`}>
                  <div>
                    <h3 className="text-sky-400 font-mono text-sm mb-4 uppercase tracking-[0.2em]">The Aesthetic Gap</h3>
                    <p className="opacity-70 leading-relaxed text-lg font-light">Fine dining requires a digital presence that feels as curated as the menu itself.</p>
                  </div>
                  <div>
                    <h3 className="text-sky-400 font-mono text-sm mb-4 uppercase tracking-[0.2em]">The Goal</h3>
                    <p className="opacity-70 leading-relaxed text-lg font-light">Create a platform where every interaction feels sophisticated, clean, and effortless.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DESIGN STRATEGY */}
          <section className="mb-32">
            <div className="border-l-8 border-sky-400 pl-8 mb-16">
              <h2 className="text-3xl laptop:text-4xl font-black uppercase tracking-tighter">Design Strategy</h2>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mb-16">
              {[
                { step: "01 / IMMERSION", text: "Using fluid transitions to mirror a multi-course tasting menu." },
                { step: "02 / VISUAL PRIORITY", text: "Prioritizing high-res imagery without sacrificing load times." },
                { step: "03 / CONVERSION", text: "A reservation flow that feels like a concierge service." }
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-[2rem] border transition-all group ${
                  isDark ? "bg-[#0D0D0D] border-white/5 hover:border-sky-400/30" : "bg-white border-black/5 hover:border-sky-400/30 shadow-sm"
                }`}>
                  <span className="text-sky-400 font-mono text-xs mb-4 block tracking-widest">{item.step}</span>
                  <p className="text-xl font-medium leading-tight group-hover:text-sky-500 transition-colors">{item.text}</p>
                </div>
              ))}
            </div>

            <div className={`p-12 laptop:p-20 rounded-[3rem] border relative overflow-hidden transition-colors ${
              isDark ? "bg-[#0D0D0D] border-white/10" : "bg-gray-50 border-black/5"
            }`}>
              <h3 className="text-sky-300 uppercase tracking-[0.4em] font-black text-xs mb-8">Creative Hypothesis</h3>
              <p className="text-3xl laptop:text-5xl font-light italic leading-tight">
                "By utilizing <span className="underline decoration-sky-400 underline-offset-8">minimalist UI</span>, we elevate the user's perceived brand value."
              </p>
            </div>
          </section>

          {/* VISUAL EVOLUTION */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-12 italic tracking-tighter">The Evolution</h2>
            <AutoScrollSection 
              title="Brand Identity & Mood" 
              images={[
      // "/images/ocean/OceanLow-fidelity-1.svg", 
      // "/images/ocean/Low-fidelity-2.svg",      
      // "/images/ocean/Low-fidelity-3.svg",      
      // "/images/ocean/Low-fidelity-4.svg",      
      // "/images/ocean/Low-fidelity-5.svg"       
    ]} 
              theme={theme}
              mounted={mounted}
            />
            <AutoScrollSection 
              title="High-Fidelity Interface" 
              images={["/images/ocean/High-fidelity-1.png", "/images/ocean/High-fidelity-2.png", "/images/ocean/High-fidelity-3.png"]} 
              theme={theme}
              mounted={mounted}
            />
          </section>

          {/* IMPACT METRICS */}
          <section className={`mb-40 border-t pt-20 ${isDark ? "border-white/10" : "border-black/10"}`}>
            <h2 className="text-4xl font-bold mb-16 italic tracking-tighter text-center">Outcome</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Visual Fidelity</h3>
                <p className="opacity-50 text-sm">Aesthetic scores increased by 45% during testing.</p>
              </div>
              <div className={isDark ? "border-x border-white/5" : "border-x border-black/5"}>
                <h3 className="text-2xl font-bold mb-2">Frictionless</h3>
                <p className="opacity-50 text-sm">Reduced drop-off rates by 22% via one-click booking.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Performance</h3>
                <p className="opacity-50 text-sm">Lighthouse scores maintained at 95+.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-40">
            <div className={`rounded-[3rem] p-16 laptop:p-24 border relative overflow-hidden text-center transition-colors ${
              isDark ? "bg-[#0D0D0D] border-white/10" : "bg-gray-50 border-black/5"
            }`}>
              <h2 className="text-3xl laptop:text-5xl font-bold mb-8 italic">Experience the Design</h2>
              <a 
                href="https://www.figma.com/..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-sky-500 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-black transition-all duration-300"
              >
                Launch Figma
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OceanPaletteCaseStudy;