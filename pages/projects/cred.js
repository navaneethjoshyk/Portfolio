import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";

const AutoScrollSection = ({ title, images }) => {
  return (
    <div className="mb-16">
      <h3 className="text-gray-500 uppercase text-sm mb-6 tracking-widest">{title}</h3>
      
      {/* 1. Added whitespace-nowrap to prevent stacking */}
      <div className="relative flex overflow-hidden group whitespace-nowrap">
        
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#000] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#000] to-transparent z-10 pointer-events-none"></div>

        {/* 2. Added flex-shrink-0 to images and flex-nowrap to the mover */}
        <div className="flex flex-nowrap space-x-8 animate-loop-scroll group-hover:paused">
          
          {/* Primary Set */}
          {images.map((img, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[300px] laptop:w-[450px] aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#161616] flex items-center justify-center"
            >
              <img 
                src={img} 
                className="w-full h-full object-contain p-2" 
                alt={`${title} ${index}`} 
              />
            </div>
          ))}

          {/* Duplicate Set */}
          {images.map((img, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex-shrink-0 w-[300px] laptop:w-[450px] aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#161616] flex items-center justify-center"
            >
              <img 
                src={img} 
                className="w-full h-full object-contain p-2" 
                alt={`${title} dup ${index}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CredCaseStudy = () => {
  return (
    <>
      <Head>
        <title>CRED | Fintech UX Analysis</title>
      </Head>
      {data.showCursor && <Cursor />}
      
      <div className={`container mx-auto mt-10 px-5 laptop:px-0 ${data.showCursor && "cursor-none"}`}>
        <Header isBlog={true} />
        
        <main className="mt-20 max-w-6xl mx-auto">
          {/* PROJECT HERO */}
          <section className="mb-32">
            <span className="text-amber-500 font-mono text-sm tracking-[0.5em] uppercase mb-4 block text-center">Fintech Excellence</span>
            <h1 className="text-7xl laptop:text-9xl font-black mb-12 text-center tracking-tighter italic">CRED</h1>
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-12 border-y border-white/5 py-12">
              <div className="text-center">
                <h3 className="text-gray-600 uppercase text-xs tracking-widest mb-3">Domain</h3>
                <p className="text-xl font-light">Credit Management & Neobanking</p>
              </div>
              <div className="text-center border-x border-white/5">
                <h3 className="text-gray-600 uppercase text-xs tracking-widest mb-3">Core Philosophy</h3>
                <p className="text-xl font-light">Trust-Based Rewards</p>
              </div>
              <div className="text-center">
                <h3 className="text-gray-600 uppercase text-xs tracking-widest mb-3">Target</h3>
                <p className="text-xl font-light">High-Net-Worth Individuals</p>
              </div>
            </div>
          </section>

          {/* PROBLEM STATEMENT */}
          <section className="mb-40">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-10 italic">The Challenge</h2>
              <p className="text-3xl laptop:text-5xl font-light leading-[1.15] mb-12">
                Traditional credit card apps are built on <span className="text-white font-bold">utility, not desire.</span> CRED sought to transform a chore—paying bills—into a luxury experience that rewards financial discipline.
              </p>
              <div className="h-[1px] w-40 bg-amber-500/50 mx-auto"></div>
            </div>
          </section>

          {/* STRATEGY: THE GAMIFICATION LOOP */}
          <section className="mb-40">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-16 tracking-tight">The Psychology of Fintech</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
              <div className="bg-[#0A0A0A] p-12 rounded-[3rem] border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-5xl opacity-10 group-hover:opacity-100 transition-opacity duration-500">💎</div>
                <h3 className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-6">Retention</h3>
                <p className="text-2xl font-medium mb-4 italic">How might we make bill payments feel like a reward rather than a loss?</p>
                <p className="opacity-40 leading-relaxed">By utilizing high-contrast Neumorphic elements and haptic-heavy interactions to trigger dopamine during the transaction flow.</p>
              </div>
              <div className="bg-[#0A0A0A] p-12 rounded-[3rem] border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-5xl opacity-10 group-hover:opacity-100 transition-opacity duration-500">🛡️</div>
                <h3 className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-6">Security</h3>
                <p className="text-2xl font-medium mb-4 italic">How might we build a "Fort Knox" aesthetic that implies safety without friction?</p>
                <p className="opacity-40 leading-relaxed">Designing "Dark Mode" layouts with heavy shadows and metallic gradients that subconsciously communicate stability and exclusivity.</p>
              </div>
            </div>
          </section>

          {/* DESIGN EVOLUTION - NEUMORPHIC STYLE */}
          <section className="mb-40">
            <h2 className="text-4xl font-bold mb-16 italic">Interface Iterations</h2>
            <AutoScrollSection 
              title="Monochrome Skeleton" 
              images={["/images/cred-low1.png", "/images/cred-low2.png"]} 
            />
            <AutoScrollSection 
              title="Copper & Carbon High-Fi" 
              images={["/images/cred-high1.png", "/images/cred-high2.png", "/images/cred-high3.png"]} 
            />
          </section>

          {/* EVALUATION - THE GROWTH METRICS */}
          <section className="mb-40 bg-[#0A0A0A] p-16 rounded-[4rem] border border-white/5">
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-16 text-center">
              <div>
                <span className="text-5xl font-black text-white block mb-2 tracking-tighter">35%</span>
                <span className="text-amber-500 text-xs uppercase tracking-widest">Market Share</span>
                <p className="mt-4 opacity-40 text-sm">Of all premium credit card payments in India processed via CRED.</p>
              </div>
              <div className="border-x border-white/5">
                <span className="text-5xl font-black text-white block mb-2 tracking-tighter">4.8</span>
                <span className="text-amber-500 text-xs uppercase tracking-widest">App Store Rating</span>
                <p className="mt-4 opacity-40 text-sm">Industry-leading satisfaction in the finance category.</p>
              </div>
              <div>
                <span className="text-5xl font-black text-white block mb-2 tracking-tighter">750+</span>
                <span className="text-amber-500 text-xs uppercase tracking-widest">Credit Score</span>
                <p className="mt-4 opacity-40 text-sm">Average credit health of the exclusive user base.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-40 text-center">
            <h2 className="text-4xl font-bold mb-8 italic">The Full Design System</h2>
            <p className="opacity-40 mb-12 max-w-xl mx-auto italic">Access the Neumorphic design components and the "CRED-Max" design language analysis.</p>
            <a 
              href="https://www.figma.com/design/feH6rXNjjmcBC4XyHDWuVK/cred-UPI?node-id=930-3&t=PuiXGN7xESRVY3C7-1" 
              className="bg-white text-black px-12 py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-amber-500 hover:text-white transition-all"
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