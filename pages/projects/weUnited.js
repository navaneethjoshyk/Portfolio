import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";

// Component for the animated visual displays
const AutoScrollSection = ({ title, images }) => {
  return (
    <div className="mb-16">
      <h3 className="text-gray-500 uppercase text-sm mb-6 tracking-widest">{title}</h3>
      
      <div className="relative flex overflow-hidden group whitespace-nowrap">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#000] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#000] to-transparent z-10 pointer-events-none"></div>

        {/* Sliding Content */}
        <div className="flex flex-nowrap space-x-8 animate-loop-scroll group-hover:paused">
          {/* Primary Set */}
          {images.map((img, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[300px] laptop:w-[450px] aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#161616] flex items-center justify-center"
            >
              <img 
                src={img} 
                className="w-full h-full object-contain p-4" 
                alt={`${title} ${index}`} 
              />
            </div>
          ))}

          {/* Duplicate Set for Seamless Looping */}
          {images.map((img, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex-shrink-0 w-[300px] laptop:w-[450px] aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#161616] flex items-center justify-center"
            >
              <img 
                src={img} 
                className="w-full h-full object-contain p-4" 
                alt={`${title} dup ${index}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WeUnitedCaseStudy = () => {
  return (
    <>
      <Head>
        <title>WeUnited | Trust-First Matrimony Case Study</title>
      </Head>
      {data.showCursor && <Cursor />}
      
      <div className={`container mx-auto mt-10 px-5 laptop:px-0 ${data.showCursor && "cursor-none"}`}>
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
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-10 border-t border-white/10 pt-10">
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
                  Users in the matrimony space struggle with <span className="text-white font-semibold">profile authenticity</span>. Fragmented data and unverified users lead to safety concerns and dating fatigue.
                </p>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-12 pt-10 border-t border-white/10">
                  <div>
                    <h3 className="text-rose-500 font-mono text-sm mb-4 uppercase tracking-[0.2em]">The Responsibility</h3>
                    <p className="opacity-70 leading-relaxed text-lg font-light">My goal was to bridge the gap between traditional cultural values and a modern, high-security digital interface.</p>
                  </div>
                  <div>
                    <h3 className="text-rose-500 font-mono text-sm mb-4 uppercase tracking-[0.2em]">The Hypothesis</h3>
                    <p className="opacity-70 leading-relaxed text-lg font-light">"If we mandate ID verification and use values-based filtering, then meaningful conversation rates will increase by 40%."</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STRATEGIC INQUIRY (HMW) */}
          <section className="mb-32">
            <div className="border-l-8 border-rose-500 pl-8 mb-16">
              <h2 className="text-3xl laptop:text-4xl font-black uppercase tracking-tighter">Strategic Inquiry</h2>
              <p className="text-xl opacity-50 mt-2 italic">Refining the experience through How Might We statements.</p>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mb-16">
              <div className="bg-[#0D0D0D] p-10 rounded-[2rem] border border-white/5 hover:border-rose-500/30 transition-all group">
                <span className="text-rose-500 font-mono text-xs mb-4 block tracking-widest">01 / TRUST</span>
                <p className="text-xl font-medium leading-tight group-hover:text-rose-300 transition-colors">How might we build trust in a space where catfishing is a common pain point?</p>
              </div>
              <div className="bg-[#0D0D0D] p-10 rounded-[2rem] border border-white/5 hover:border-rose-500/30 transition-all group">
                <span className="text-rose-500 font-mono text-xs mb-4 block tracking-widest">02 / EFFICIENCY</span>
                <p className="text-xl font-medium leading-tight group-hover:text-rose-300 transition-colors">How might we streamline matchmaking so users find quality over quantity?</p>
              </div>
              <div className="bg-[#0D0D0D] p-10 rounded-[2rem] border border-white/5 hover:border-rose-500/30 transition-all group">
                <span className="text-rose-500 font-mono text-xs mb-4 block tracking-widest">03 / PERSONAS</span>
                <p className="text-xl font-medium leading-tight group-hover:text-rose-300 transition-colors">How might we design for both the busy professional and community-driven users?</p>
              </div>
            </div>
          </section>

        

          {/* OUTCOME & EVALUATION */}
          <section className="mb-40 border-t border-white/10 pt-20">
            <h2 className="text-4xl font-bold mb-16 italic tracking-tighter text-center uppercase">Evaluation</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">40% Increase</h3>
                <p className="opacity-50 text-sm">Improvement in successful ID-verified registrations.</p>
              </div>
              <div className="border-x border-white/5">
                <h3 className="text-2xl font-bold mb-2">Reduced Fatigue</h3>
                <p className="opacity-50 text-sm">Users reported a 30% decrease in time spent filtering irrelevant profiles.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">95+ Performance</h3>
                <p className="opacity-50 text-sm">Optimized Lighthouse scores for global accessibility and speed.</p>
              </div>
            </div>
          </section>

          {/* CALL TO ACTION: LIVE SITE & FIGMA */}
          <section className="mb-40">
            <div className="bg-[#0D0D0D] rounded-[3rem] p-16 laptop:px-24 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 blur-[120px] -z-10" />
              
              <div className="flex flex-col laptop:flex-row items-center justify-between gap-12">
                <div className="laptop:w-2/3">
                  <h2 className="text-3xl laptop:text-5xl font-bold mb-6 italic">Experience the Solution</h2>
                  <p className="text-xl opacity-50 mb-8 font-light">
                    Explore the full UI/UX documentation, design system, and live implementation of the WeUnited matrimony platform.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {["WCAG 2.1 Compliant", "React/Next.js", "User-Validated"].map((tag) => (
                      <span key={tag} className="px-4 py-1 rounded-full border border-white/20 text-xs uppercase tracking-widest opacity-60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 w-full laptop:w-1/3">
                  
                  <a 
                    href="https://weunited.ca/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-bold text-lg hover:bg-rose-500 hover:text-white transition-all duration-300"
                  >
                    Launch Live Site <span>↗</span>
                  </a>

                  <a 
                    href="https://www.figma.com/design/Gs4DkmldJhRGNUOvFEoNG3/matrimony-website?node-id=1-2&t=ayL9dpDYALn9Soer-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#161616] text-white border border-white/10 px-8 py-5 rounded-2xl font-bold text-lg hover:border-rose-500 transition-all duration-300"
                  >
                    View Figma Specs <span>⚛</span>
                  </a>gi
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