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

const OceanPaletteCaseStudy = () => {
  return (
    <>
      <Head>
        <title>Ocean Palette | Premium Culinary Design</title>
      </Head>
      {data.showCursor && <Cursor />}
      
      <div className={`container mx-auto mt-10 px-5 laptop:px-0 ${data.showCursor && "cursor-none"}`}>
        <Header isBlog={true} />
        
        <main className="mt-20 max-w-6xl mx-auto">
          {/* BACK NAVIGATION */}
          <button 
            onClick={() => window.history.back()}
            className="text-sm mb-10 opacity-70 hover:opacity-100 transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Projects
          </button>

          {/* PROJECT HERO */}
          <section className="mb-24">
            <h1 className="text-6xl laptop:text-8xl font-black mb-10 tracking-tighter">Ocean Palette</h1>
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-10 border-t border-white/10 pt-10">
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
                  Most restaurant websites are utilitarian and flat. They fail to communicate the <span className="text-white font-semibold">sensory experience</span> of the food, leading to a disconnect between the brand and the diner.
                </p>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-12 pt-10 border-t border-white/10">
                  <div>
                    <h3 className="text-sky-400 font-mono text-sm mb-4 uppercase tracking-[0.2em]">The Aesthetic Gap</h3>
                    <p className="opacity-70 leading-relaxed text-lg font-light">Fine dining requires a digital presence that feels as curated as the menu. Static grids and slow-loading assets break that immersion.</p>
                  </div>
                  <div>
                    <h3 className="text-sky-400 font-mono text-sm mb-4 uppercase tracking-[0.2em]">The Goal</h3>
                    <p className="opacity-70 leading-relaxed text-lg font-light">Create a fluid, high-performance platform where every interaction feels like the art of the plate—sophisticated, clean, and effortless.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STRATEGIC INQUIRY */}
          <section className="mb-32">
            <div className="border-l-8 border-sky-400 pl-8 mb-16">
              <h2 className="text-3xl laptop:text-4xl font-black uppercase tracking-tighter">Design Strategy</h2>
              <p className="text-xl opacity-50 mt-2 italic">Crafting an appetite through interface design.</p>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mb-16">
              <div className="bg-[#0D0D0D] p-10 rounded-[2rem] border border-white/5 hover:border-sky-400/30 transition-all group">
                <span className="text-sky-400 font-mono text-xs mb-4 block tracking-widest">01 / IMMERSION</span>
                <p className="text-xl font-medium leading-tight group-hover:text-sky-300 transition-colors">How might we use fluid transitions to mirror the flow of a multi-course tasting menu?</p>
              </div>
              <div className="bg-[#0D0D0D] p-10 rounded-[2rem] border border-white/5 hover:border-sky-400/30 transition-all group">
                <span className="text-sky-400 font-mono text-xs mb-4 block tracking-widest">02 / VISUAL PRIORITY</span>
                <p className="text-xl font-medium leading-tight group-hover:text-sky-300 transition-colors">How might we prioritize high-resolution imagery without sacrificing performance or load times?</p>
              </div>
              <div className="bg-[#0D0D0D] p-10 rounded-[2rem] border border-white/5 hover:border-sky-400/30 transition-all group">
                <span className="text-sky-400 font-mono text-xs mb-4 block tracking-widest">03 / CONVERSION</span>
                <p className="text-xl font-medium leading-tight group-hover:text-sky-300 transition-colors">How might we design a reservation flow that feels like a concierge service rather than a form?</p>
              </div>
            </div>

            <div className="bg-[#0D0D0D] p-12 laptop:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 blur-[120px] -z-10" />
              <h3 className="text-sky-300 uppercase tracking-[0.4em] font-black text-xs mb-8">Creative Hypothesis</h3>
              <p className="text-3xl laptop:text-5xl font-light italic leading-tight">
                "By utilizing <span className="text-white font-medium underline decoration-sky-400 underline-offset-8">minimalist UI</span> and large-scale photography, we can increase table bookings by elevating the user's perceived value of the brand."
              </p>
            </div>
          </section>

          {/* VISUAL EVOLUTION */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-12 italic tracking-tighter">The Evolution</h2>
            <AutoScrollSection 
              title="Brand Identity & Mood" 
              images={["/images/rest-mood1.png", "/images/rest-mood2.png"]} 
            />
            <AutoScrollSection 
              title="High-Fidelity Interface" 
              images={["/images/restaurant.png", "/images/rest-menu.png", "/images/rest-mobile.png"]} 
            />
          </section>

          {/* IMPACT METRICS */}
          <section className="mb-40 border-t border-white/10 pt-20">
            <h2 className="text-4xl font-bold mb-16 italic tracking-tighter text-center">Outcome</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Visual Fidelity</h3>
                <p className="opacity-50 text-sm">Aesthetic scores increased by 45% during user testing sessions.</p>
              </div>
              <div className="border-x border-white/5">
                <h3 className="text-2xl font-bold mb-2">Frictionless</h3>
                <p className="opacity-50 text-sm">Reduced reservation drop-off rates by 22% through one-click booking.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Performance</h3>
                <p className="opacity-50 text-sm">Lighthouse scores maintained at 95+ despite heavy visual assets.</p>
              </div>
            </div>
          </section>

          {/* FIGMA CALL TO ACTION */}
          <section className="mb-40">
            <div className="bg-[#0D0D0D] rounded-[3rem] p-16 laptop:p-24 border border-white/10 relative overflow-hidden text-center">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-400/5 blur-[100px] -z-10" />
              <h2 className="text-3xl laptop:text-5xl font-bold mb-8 italic">Experience the Design</h2>
              <p className="text-xl opacity-50 mb-12 max-w-2xl mx-auto font-light">
                Explore the full style guide, typography system, and high-fidelity prototypes in the Figma file.
              </p>

              <a 
                href="https://www.figma.com/design/jUyI2TXD4QX6GC07mYCFvJ/Ocean?node-id=671-214&t=jBPWqxhVrLFR2oxd-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-sky-500 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
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