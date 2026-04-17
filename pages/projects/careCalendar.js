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

const CareCalendarCaseStudy = () => {
  return (
    <>
      <Head>
        <title>Care Calendar | UX Case Study</title>
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
          <section className="mb-20">
            <h1 className="text-6xl laptop:text-8xl font-bold mb-10">Care Calendar</h1>
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-10 border-t border-white/10 pt-10">
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Responsibilities</h3>
                <p className="text-lg">UI/UX Design, Full-Stack Dev, Research</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Tools</h3>
                <p className="text-lg">Figma, React, Node.js, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Timeline</h3>
                <p className="text-lg">4 Months (Jan 2026 - April 2026)</p>
              </div>
            </div>
          </section>

          {/* PROBLEM STATEMENT - THE NARRATIVE */}
<section className="mb-32 mt-20">
  <div className="grid grid-cols-1 laptop:grid-cols-12 gap-10">
    <div className="laptop:col-span-4">
      <h2 className="text-gray-500 uppercase tracking-widest text-sm font-bold border-l-2 border-blue-600 pl-4">
        The Context
      </h2>
    </div>
    <div className="laptop:col-span-8">
      <p className="text-2xl laptop:text-4xl font-medium leading-tight mb-8">
        Accessing healthcare is challenging for locals, immigrants, and international students. 
        <span className="text-gray-500 italic"> The booking systems are often inefficient and complex, with poor user experiences.</span>
      </p>
      
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-12 pt-10 border-t border-white/10">
        <div>
          <h3 className="text-blue-500 font-mono text-sm mb-4 uppercase tracking-widest">The Gap</h3>
          <p className="opacity-70 leading-relaxed text-lg">
            There is a need for better access to healthcare features with User Experience at its core. Current platforms are inconsistent, plagued by difficult navigation and slow performance.
          </p>
        </div>
        <div>
          <h3 className="text-blue-500 font-mono text-sm mb-4 uppercase tracking-widest">The Objective</h3>
          <p className="opacity-70 leading-relaxed text-lg">
            Transform a fragmented booking method into a unified, high-performance ecosystem where usability and effectiveness are standardized across all user touchpoints.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* STRATEGY & DISCOVERY SECTION */}
          <section className="mb-32">
            <div className="border-l-8 border-blue-600 pl-8 mb-12">
              <h2 className="text-2xl laptop:text-3xl font-black uppercase tracking-tighter">How Might We...</h2>
              <p className="text-xl opacity-50 mt-2">Defining the core challenges through six lens-specific inquiries.</p>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-colors group">
                <span className="text-blue-500 font-mono text-sm mb-4 block">01 / EFFICIENCY</span>
                <p className="text-2xl font-semibold leading-tight group-hover:text-blue-400 transition-colors">How might we reduce the time spent on manual documentation by 50% during shift handovers?</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-colors group">
                <span className="text-blue-500 font-mono text-sm mb-4 block">02 / COGNITIVE LOAD</span>
                <p className="text-2xl font-semibold leading-tight group-hover:text-blue-400 transition-colors">How might we display critical patient alerts without causing notification fatigue for the staff?</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-colors group">
                <span className="text-blue-500 font-mono text-sm mb-4 block">03 / ACCESSIBILITY</span>
                <p className="text-2xl font-semibold leading-tight group-hover:text-blue-400 transition-colors">How might we design a UI that is fully operable with one hand while caregivers are mobile?</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-colors group">
                <span className="text-blue-500 font-mono text-sm mb-4 block">04 / DATA INTEGRITY</span>
                <p className="text-2xl font-semibold leading-tight group-hover:text-blue-400 transition-colors">How might we ensure real-time data sync across all nodes even in low-connectivity hospital zones?</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-colors group">
                <span className="text-blue-500 font-mono text-sm mb-4 block">05 / SCALABILITY</span>
                <p className="text-2xl font-semibold leading-tight group-hover:text-blue-400 transition-colors">How might we architect the backend to handle a 200% surge in requests during emergency peaks?</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-colors group">
                <span className="text-blue-500 font-mono text-sm mb-4 block">06 / WELL-BEING</span>
                <p className="text-2xl font-semibold leading-tight group-hover:text-blue-400 transition-colors">How might we build features that actively celebrate task completion to boost caregiver morale?</p>
              </div>
            </div>

            <div className="bg-[#161616] p-12 laptop:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] -z-10" />
              <h3 className="text-green-400 uppercase tracking-[0.3em] font-black text-xs laptop:text-sm mb-6">Hypothesis Statement</h3>
              <p className="text-3xl laptop:text-5xl font-medium italic leading-tight tracking-tight">
                "If we implement a <span className="text-white underline decoration-green-400 underline-offset-8">centralized traffic-controlled</span> scheduling logic, then caregivers will experience less notification fatigue and increased task accuracy."
              </p>
            </div>
          </section>

          {/* INFORMATION ARCHITECTURE */}
<section className="mb-32">
  <div className="flex flex-col laptop:flex-row justify-between items-end mb-12 gap-6">
    <div>
      <h2 className="text-2xl laptop:text-3xl font-black uppercase tracking-tighter">Information Architecture</h2>
    </div>
  </div>

  {/* The 'max-h' here is the secret. 
    It prevents the image from becoming "huge" vertically while allowing horizontal exploration.
  */}
  <div className="bg-[#161616] rounded-[2rem] border border-white/10 shadow-2xl overflow-auto custom-scrollbar">
    <div className="p-8 laptop:p-12 h-[400px] laptop:h-[600px] flex items-start">
      
      {/* We set a fixed height on the image to match the container. 
        The width will scale naturally to prevent blur, but it won't push your page down.
      */}
      <img 
        src="/images/info.svg" 
        className="h-full w-auto max-w-none block object-contain" 
        style={{ 
          imageRendering: 'auto',
          filter: 'brightness(1.1)' 
        }} 
        alt="Care Calendar IA" 
      />
    </div>
  </div>

  <div className="mt-6 flex items-center justify-center gap-3 opacity-30">
    <span className="text-[10px] font-mono uppercase tracking-[0.3em]">↔ Use Shift + Scroll to pan horizontally ↔</span>
  </div>
</section>

          {/* USER PERSONAS */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-12">User Personas</h2>
            <div className="bg-white text-black p-8 laptop:p-16 rounded-[3rem] flex flex-col laptop:flex-row items-center gap-12">
              <div className="w-full laptop:w-2/5 aspect-square bg-gray-100 rounded-[2rem] overflow-hidden">
                <img src="/images/user persona.png" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="The Caregiver" />
              </div>
              <div className="w-full laptop:w-3/5">
                <h4 className="text-5xl laptop:text-7xl font-bold mb-4">The Caregiver</h4>
                <blockquote className="text-2xl laptop:text-4xl font-medium leading-tight mb-8 border-l-4 border-black pl-6 italic">
                  "I need to know exactly what is next, right now."
                </blockquote>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 pt-8 border-t border-black/10">
                  <div><h5 className="font-bold text-lg mb-2 uppercase">Core Needs</h5><ul className="list-disc list-inside opacity-70"><li>Instant task sync</li><li>High-contrast visual cues</li><li>One-handed nav</li></ul></div>
                  <div><h5 className="font-bold text-lg mb-2 uppercase">Pain Points</h5><ul className="list-disc list-inside opacity-70"><li>Info overload</li><li>Slow login cycles</li><li>No offline support</li></ul></div>
                </div>
              </div>
            </div>
          </section>

          {/* DESIGN EVOLUTION - NOW WITH FIXED SCROLL AND FITTING */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-10">Design Evolution</h2>
            <AutoScrollSection 
              title="Low-Fidelity Wireframes" 
              images={["/images/Low fid.png", "/images/low fid 2.png"]} 
            />
            <AutoScrollSection 
              title="Mid-Fidelity Prototypes" 
              images={["/images/mid1.png", "/images/mid 2.png", "/images/mid3.png", "/images/mid4.png"]} 
            />
            <AutoScrollSection 
              title="High-Fidelity Final Designs" 
              images={["/images/high1.png", "/images/high2.png", "/images/high3.png", "/images/high4.png", "/images/high5.png"]} 
            />
          </section>

          {/* EVALUATION SECTION */}
          <section className="mb-40 border-t border-white/10 pt-20">
            <h2 className="text-4xl font-bold mb-16 text-left">Evaluation</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8">
              <div className="bg-[#161616] p-10 rounded-3xl border border-white/10 text-center hover:border-blue-500/50 transition-all">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-4">Desirability</h3>
                <p className="opacity-60 text-sm">94% of caregivers reported a decrease in daily stress.</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-3xl border border-white/10 text-center hover:border-green-500/50 transition-all">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-4">Feasibility</h3>
                <p className="opacity-60 text-sm">Seamless integration with existing hospital REST APIs.</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-3xl border border-white/10 text-center hover:border-purple-500/50 transition-all">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-4">Viability</h3>
                <p className="opacity-60 text-sm">Reduced operational costs by 40% via automation.</p>
              </div>
            </div>
          </section>

          {/* FINAL CALL TO ACTION - FIGMA LINK */}
<section className="mb-40">
  <div className="bg-[#161616] rounded-[3rem] p-12 laptop:p-20 border border-white/10 relative overflow-hidden text-center">
    {/* Decorative Ambient Light */}
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10" />
    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10" />

    <h2 className="text-3xl laptop:text-5xl font-bold mb-6">Want to see the full process?</h2>
    <p className="text-xl opacity-60 mb-10 max-w-2xl mx-auto">
      Explore the complete design system, user flows, and high-fidelity iterations directly in the Figma file.
    </p>

    <a 
      href="https://www.figma.com/design/0IwLtu9Jc6VD311QyL85oh/Case-study-Care-calender-?node-id=37-2&t=cUHcSjW05B7QaEhs-1" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
    >
      <svg 
        width="24" height="24" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path d="M19 28.5C19 25.8478 20.0536 23.3043 21.9289 21.4289C23.8043 19.5536 26.3478 18.5 29 18.5C31.6522 18.5 34.1957 19.5536 36.0711 21.4289C37.9464 23.3043 39 25.8478 39 28.5C39 31.1522 37.9464 33.6957 36.0711 35.5711C34.1957 37.4464 31.6522 38.5 29 38.5C26.3478 38.5 23.8043 37.4464 21.9289 35.5711C20.0536 33.6957 19 31.1522 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 44.8478 1.05357 42.3043 2.92893 40.4289C4.8043 38.5536 7.34784 37.5 10 37.5C12.6522 37.5 15.1957 38.5536 17.0711 40.4289C18.9464 42.3043 20 44.8478 20 47.5C20 50.1522 18.9464 52.6957 17.0711 54.5711C15.1957 56.4464 12.6522 57.5 10 57.5C7.34784 57.5 4.8043 56.4464 2.92893 54.5711C1.05357 52.6957 0 50.1522 0 47.5Z" fill="#0ACF83"/>
        <path d="M0 28.5C0 25.8478 1.05357 23.3043 2.92893 21.4289C4.8043 19.5536 7.34784 18.5 10 18.5C12.6522 18.5 15.1957 19.5536 17.0711 21.4289C18.9464 23.3043 20 25.8478 20 28.5V38.5H10C7.34784 38.5 4.8043 37.4464 2.92893 35.5711C1.05357 33.6957 0 31.1522 0 28.5Z" fill="#A259FF"/>
        <path d="M0 9.5C0 6.84784 1.05357 4.3043 2.92893 2.42893C4.8043 0.553571 7.34784 -4.47035e-08 10 0C12.6522 4.47035e-08 15.1957 0.553571 17.0711 2.42893C18.9464 4.3043 20 6.84784 20 9.5V18.5H10C7.34784 18.5 4.8043 17.4464 2.92893 15.5711C1.05357 13.6957 0 11.1522 0 9.5Z" fill="#F24E1E"/>
        <path d="M19 0H29C31.6522 0 34.1957 1.05357 36.0711 2.92893C37.9464 4.8043 39 7.34784 39 10C39 12.6522 37.9464 15.1957 36.0711 17.0711C34.1957 18.9464 31.6522 20 29 20H19V0Z" fill="#FF7262"/>
      </svg>
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