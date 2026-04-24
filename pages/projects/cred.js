import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";

const AutoScrollSection = ({ title, images, isDark, mounted }) => {
  return (
    <div className="mb-16">
      <h3 className="text-gray-500 uppercase text-sm mb-6 tracking-widest">{title}</h3>
      
      <div className="relative flex overflow-hidden group whitespace-nowrap">
        {/* Dynamic Gradient Masks */}
        <div className={`absolute inset-y-0 left-0 w-20 z-10 pointer-events-none bg-gradient-to-r ${
          isDark ? "from-black to-transparent" : "from-[#F9F9F9] to-transparent"
        }`}></div>
        <div className={`absolute inset-y-0 right-0 w-20 z-10 pointer-events-none bg-gradient-to-l ${
          isDark ? "from-black to-transparent" : "from-[#F9F9F9] to-transparent"
        }`}></div>

        <div className="flex flex-nowrap space-x-8 animate-loop-scroll group-hover:paused">
          {[...images, ...images].map((img, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-[300px] laptop:w-[450px] aspect-video rounded-2xl overflow-hidden border flex items-center justify-center transition-all ${
                isDark 
                ? "border-white/10 bg-[#111111]" 
                : "border-black/5 bg-white shadow-sm"
              }`}
            >
              <img 
                src={img} 
                className="w-full h-full object-contain p-4" 
                alt={`${title} ${index}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CredCaseStudy = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <>
      <Head>
        <title>CRED | Fintech UX Analysis</title>
      </Head>
      {data.showCursor && <Cursor />}
      
      <div className={`container mx-auto mt-10 px-5 laptop:px-0 transition-colors duration-500 ${
        isDark ? "text-white" : "text-black bg-[#F9F9F9]"
      } ${data.showCursor && "cursor-none"}`}>
        <Header isBlog={true} />
        
        <main className="mt-20 max-w-6xl mx-auto">
          {/* PROJECT HERO */}
          <section className="mb-32">
            <span className="text-amber-500 font-mono text-sm tracking-[0.5em] uppercase mb-4 block text-center">Fintech Excellence</span>
            <h1 className="text-7xl laptop:text-9xl font-black mb-12 text-center tracking-tighter italic">CRED</h1>
            <div className={`grid grid-cols-1 tablet:grid-cols-3 gap-12 border-y py-12 ${
              isDark ? "border-white/5" : "border-black/5"
            }`}>
              {[
                { label: "Domain", val: "Credit & Neobanking" },
                { label: "Core Philosophy", val: "Trust-Based Rewards" },
                { label: "Target", val: "High-Net-Worth" }
              ].map((item, i) => (
                <div key={i} className={`text-center ${i === 1 ? (isDark ? "border-x border-white/5" : "border-x border-black/5") : ""}`}>
                  <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-3">{item.label}</h3>
                  <p className="text-xl font-light">{item.val}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROBLEM STATEMENT */}
          <section className="mb-40">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-10 italic">The Challenge</h2>
              <p className="text-3xl laptop:text-5xl font-light leading-[1.15] mb-12">
                Traditional credit card apps are built on <span className={isDark ? "text-white font-bold" : "text-amber-600 font-bold"}>utility, not desire.</span> CRED transforms a chore into a luxury experience.
              </p>
              <div className="h-[1px] w-40 bg-amber-500/50 mx-auto"></div>
            </div>
          </section>

          {/* PSYCHOLOGY SECTION */}
          <section className="mb-40">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-16 tracking-tight">The Psychology of Fintech</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
              {[
                { icon: "💎", title: "Retention", q: "How might we make bill payments feel like a reward?" },
                { icon: "🛡️", title: "Security", q: "How might we build a 'Fort Knox' aesthetic?" }
              ].map((card, i) => (
                <div key={i} className={`p-12 rounded-[3rem] border relative group overflow-hidden transition-all ${
                  isDark ? "bg-[#0A0A0A] border-white/5" : "bg-white border-black/5 shadow-md"
                }`}>
                  <div className="absolute top-0 right-0 p-8 text-5xl opacity-10 group-hover:opacity-100 transition-opacity duration-500">{card.icon}</div>
                  <h3 className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-6">{card.title}</h3>
                  <p className="text-2xl font-medium mb-4 italic">{card.q}</p>
                  <p className="opacity-40 leading-relaxed">Utilizing Neumorphic elements and haptic interactions to trigger dopamine during flows.</p>
                </div>
              ))}
            </div>
          </section>

          {/* INTERFACE ITERATIONS */}
          <section className="mb-40">
            <h2 className="text-4xl font-bold mb-16 italic">Interface Iterations</h2>
            <AutoScrollSection title="Monochrome Skeleton" images={["/images/cred-low1.png", "/images/cred-low2.png"]} isDark={isDark} mounted={mounted} />
            <AutoScrollSection title="Copper & Carbon High-Fi" images={["/images/cred-high1.png", "/images/cred-high2.png"]} isDark={isDark} mounted={mounted} />
          </section>

          {/* METRICS */}
          <section className={`mb-40 p-16 rounded-[4rem] border transition-colors ${
            isDark ? "bg-[#0A0A0A] border-white/5" : "bg-amber-50 border-amber-100"
          }`}>
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-16 text-center">
              <div>
                <span className={`text-5xl font-black block mb-2 tracking-tighter ${isDark ? "text-white" : "text-amber-900"}`}>35%</span>
                <span className="text-amber-600 text-xs uppercase tracking-widest font-bold">Market Share</span>
                <p className="mt-4 opacity-50 text-sm">Of all premium credit card payments in India.</p>
              </div>
              <div className={isDark ? "border-x border-white/5" : "border-x border-amber-200"}>
                <span className={`text-5xl font-black block mb-2 tracking-tighter ${isDark ? "text-white" : "text-amber-900"}`}>4.8</span>
                <span className="text-amber-600 text-xs uppercase tracking-widest font-bold">App Store Rating</span>
                <p className="mt-4 opacity-50 text-sm">Industry-leading satisfaction.</p>
              </div>
              <div>
                <span className={`text-5xl font-black block mb-2 tracking-tighter ${isDark ? "text-white" : "text-amber-900"}`}>750+</span>
                <span className="text-amber-600 text-xs uppercase tracking-widest font-bold">Credit Score</span>
                <p className="mt-4 opacity-50 text-sm">Average credit health of the user base.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-40 text-center">
            <h2 className="text-4xl font-bold mb-8 italic">The Full Design System</h2>
            <a 
              href="https://www.figma.com/..." 
              className={`px-12 py-6 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${
                isDark ? "bg-white text-black hover:bg-amber-500 hover:text-white" : "bg-black text-white hover:bg-amber-600"
              }`}
            >
              Explore Prototype
            </a>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CredCaseStudy;