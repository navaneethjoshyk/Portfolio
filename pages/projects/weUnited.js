import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";

const evolutionImages = [
  "/images/matrimony.svg",
  "/images/matrimony1.svg",
  "/images/matrimony2.svg",
  "/images/matrimony3.svg"
];

const WeUnitedCaseStudy = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Standard container class to keep content centered
  const containerStyle = `container mx-auto mt-10 px-5 laptop:px-0 transition-colors duration-300 ${
    mounted && theme === "dark" ? "text-white" : "text-black"
  }`;

  return (
    <>
      <Head>
        <title>WeUnited | Trust-First Matrimony Case Study</title>
      </Head>
      {data.showCursor && <Cursor />}
      
      <div className={containerStyle}>
        <Header isBlog={true} />
        
        <main className="mt-20 max-w-6xl mx-auto">
          {/* NAVIGATION */}
          <button 
            onClick={() => window.history.back()}
            className="text-sm mb-10 opacity-70 hover:opacity-100 transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Projects
          </button>

          {/* HERO SECTION */}
          <section className="mb-24">
            <h1 className="text-6xl laptop:text-8xl font-black mb-10 tracking-tighter">WeUnited.ca</h1>
            <div className={`grid grid-cols-1 tablet:grid-cols-3 gap-10 border-t pt-10 ${
              mounted && theme === "dark" ? "border-white/10" : "border-black/10"
            }`}>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-xs mb-2">Role</h3>
                <p className="text-lg font-medium italic">Lead UI/UX Designer & Developer</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-xs mb-2">Focus</h3>
                <p className="text-lg font-medium italic">Security & Accessibility</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-xs mb-2">Tech Stack</h3>
                <p className="text-lg font-medium italic">Next.js, Tailwind v4, Framer Motion</p>
              </div>
            </div>
          </section>

          {/* THE NARRATIVE: PROBLEM & GOAL */}
          <section className="mb-32">
            <div className="grid grid-cols-1 laptop:grid-cols-12 gap-10">
              <div className="laptop:col-span-4">
                <h2 className="text-gray-500 uppercase tracking-widest text-sm font-bold border-l-2 border-rose-500 pl-4">
                  The Problem
                </h2>
              </div>
              <div className="laptop:col-span-8">
                <p className="text-2xl laptop:text-4xl font-light leading-snug mb-8">
                  Users in the matrimony space struggle with <span className={mounted && theme === "dark" ? "text-white font-semibold" : "text-black font-semibold"}>profile authenticity</span>. Fragmented data and unverified users lead to safety concerns.
                </p>
                <div className={`grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-12 pt-10 border-t ${
                  mounted && theme === "dark" ? "border-white/10" : "border-black/10"
                }`}>
                  <div>
                    <h3 className="text-rose-500 font-mono text-sm mb-4 uppercase tracking-[0.2em]">The Responsibility</h3>
                    <p className="opacity-70 leading-relaxed text-lg font-light">Bridge the gap between traditional cultural values and high-security digital interface.</p>
                  </div>
                  <div>
                    <h3 className="text-rose-500 font-mono text-sm mb-4 uppercase tracking-[0.2em]">The Hypothesis</h3>
                    <p className="opacity-70 leading-relaxed text-lg font-light">"ID verification and values-based filtering will increase meaningful conversations by 40%."</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* THE EVOLUTION (MARQUEE) */}
          <section className={`mb-32 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden py-16 transition-colors duration-300 ${
            mounted && theme === "dark" ? "bg-zinc-950" : "bg-gray-100"
          }`}>
            <div className="max-w-[1200px] mx-auto px-10 mb-10">
              <h2 className="text-4xl font-bold italic tracking-tighter uppercase">The Evolution</h2>
              <p className="text-zinc-500 font-mono text-xs mt-2 tracking-[0.2em]">Phase 3: High-Fidelity Refinement</p>
            </div>

            <div className={`relative flex overflow-x-hidden border-y ${
              mounted && theme === "dark" ? "border-zinc-800/50" : "border-zinc-300"
            }`}>
              {/* Marquee Logic */}
              {[1, 2].map((set) => (
                <div 
                  key={set}
                  className={`${set === 1 ? 'flex animate-marquee' : 'absolute top-0 flex animate-marquee2'} whitespace-nowrap py-8`}
                >
                  {evolutionImages.map((src, index) => (
                    <div key={`${set}-${index}`} className="mx-4 flex-shrink-0">
                      <div className={`w-[800px] laptop:w-[950px] h-[450px] laptop:h-[550px] rounded-lg overflow-hidden border shadow-xl ${
                        mounted && theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                      }`}>
                        <img src={src} alt="Fidelity View" className="w-full h-full object-cover object-top" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* EVALUATION */}
          <section className={`mb-40 border-t pt-20 ${mounted && theme === "dark" ? "border-white/10" : "border-black/10"}`}>
            <h2 className="text-4xl font-bold mb-16 italic tracking-tighter text-center uppercase">Evaluation</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-12 text-center">
              {[
                { title: "40% Increase", desc: "Improvement in ID-verified registrations." },
                { title: "Reduced Fatigue", desc: "30% decrease in time spent filtering profiles." },
                { title: "95+ Performance", desc: "Optimized Lighthouse scores for speed." }
              ].map((stat, i) => (
                <div key={i} className={i === 1 ? (mounted && theme === "dark" ? "border-x border-white/5" : "border-x border-black/5") : ""}>
                  <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
                  <p className="opacity-50 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-40">
            <div className={`rounded-[3rem] p-16 laptop:px-24 border relative overflow-hidden transition-colors ${
              mounted && theme === "dark" ? "bg-[#0D0D0D] border-white/10" : "bg-gray-50 border-black/5"
            }`}>
              <div className="flex flex-col laptop:flex-row items-center justify-between gap-12">
                <div className="laptop:w-2/3">
                  <h2 className="text-3xl laptop:text-5xl font-bold mb-6 italic">Experience the Solution</h2>
                  <p className="text-xl opacity-50 mb-8 font-light">Explore the full UI/UX documentation and live implementation.</p>
                </div>
                <div className="flex flex-col gap-4 w-full laptop:w-1/3">
                  <a href="https://weunited.ca/" className={`flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg transition-all ${
                    mounted && theme === "dark" ? "bg-white text-black hover:bg-rose-500 hover:text-white" : "bg-black text-white hover:bg-rose-500"
                  }`}>
                    Launch Site ↗
                  </a>
                  <a href="https://figma.com/..." className={`flex items-center justify-center gap-3 border px-8 py-5 rounded-2xl font-bold text-lg transition-all ${
                    mounted && theme === "dark" ? "bg-[#161616] text-white border-white/10 hover:border-rose-500" : "bg-white text-black border-black/10 hover:border-rose-500"
                  }`}>
                    Figma Specs ⚛
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default WeUnitedCaseStudy;