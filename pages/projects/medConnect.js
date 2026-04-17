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

const MedConnectCaseStudy = () => {
  return (
    <>
      <Head>
        <title>Med Connect | UX Case Study</title>
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
            <h1 className="text-6xl laptop:text-8xl font-bold mb-10">Med Connect</h1>
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-10 border-t border-white/10 pt-10">
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Responsibilities</h3>
                <p className="text-lg">Lead UI/UX, Frontend Architecture, User Testing</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Tools</h3>
                <p className="text-lg">Figma, Next.js, TypeScript, Tailwind</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Timeline</h3>
                <p className="text-lg">3 Months (Sept 2025 - Dec 2025)</p>
              </div>
            </div>
          </section>

          {/* PROBLEM STATEMENT */}
          <section className="mb-32 mt-20">
            <div className="grid grid-cols-1 laptop:grid-cols-12 gap-10">
              <div className="laptop:col-span-4">
                <h2 className="text-gray-500 uppercase tracking-widest text-sm font-bold border-l-2 border-emerald-500 pl-4">
                  The Problem
                </h2>
              </div>
              <div className="laptop:col-span-8">
                <p className="text-2xl laptop:text-4xl font-medium leading-tight mb-8">
                  Patients often struggle with fragmented health records and delayed communication with specialists. 
                  <span className="text-gray-500 italic"> The lack of a unified touchpoint creates significant anxiety and slows down critical treatment paths.</span>
                </p>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-12 pt-10 border-t border-white/10">
                  <div>
                    <h3 className="text-emerald-500 font-mono text-sm mb-4 uppercase tracking-widest">Fragmented Data</h3>
                    <p className="opacity-70 leading-relaxed text-lg">Healthcare information is scattered across portals, making it nearly impossible for users to have a holistic view of their medical history.</p>
                  </div>
                  <div>
                    <h3 className="text-emerald-500 font-mono text-sm mb-4 uppercase tracking-widest">The Goal</h3>
                    <p className="opacity-70 leading-relaxed text-lg">Develop a patient-centric hub that streamlines specialist referrals and provides instant, secure access to unified health metrics.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STRATEGY & DISCOVERY */}
          <section className="mb-32">
            <div className="border-l-8 border-emerald-500 pl-8 mb-12">
              <h2 className="text-2xl laptop:text-3xl font-black uppercase tracking-tighter">Strategic Inquiry</h2>
              <p className="text-xl opacity-50 mt-2">Bridging the gap between medical data and patient understanding.</p>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/50 transition-colors group">
                <span className="text-emerald-500 font-mono text-sm mb-4 block">01 / TRUST</span>
                <p className="text-2xl font-semibold leading-tight group-hover:text-emerald-400 transition-colors">How might we ensure patients feel their sensitive medical data is secure yet accessible?</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/50 transition-colors group">
                <span className="text-emerald-500 font-mono text-sm mb-4 block">02 / CLARITY</span>
                <p className="text-2xl font-semibold leading-tight group-hover:text-emerald-400 transition-colors">How might we translate complex medical jargon into easy-to-understand visual health trends?</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/50 transition-colors group">
                <span className="text-emerald-500 font-mono text-sm mb-4 block">03 / CONTINUITY</span>
                <p className="text-2xl font-semibold leading-tight group-hover:text-emerald-400 transition-colors">How might we create a seamless handover between general practitioners and specialists?</p>
              </div>
            </div>

            <div className="bg-[#161616] p-12 laptop:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10" />
              <h3 className="text-emerald-400 uppercase tracking-[0.3em] font-black text-xs laptop:text-sm mb-6">The Thesis</h3>
              <p className="text-3xl laptop:text-5xl font-medium italic leading-tight tracking-tight">
                "By unifying patient records with <span className="text-white underline decoration-emerald-400 underline-offset-8">real-time specialist communication</span>, we reduce patient anxiety and improve health outcomes by 35%."
              </p>
            </div>
          </section>

          {/* IA SECTION */}
          <section className="mb-32">
            <h2 className="text-2xl laptop:text-3xl font-black uppercase tracking-tighter mb-12">System Architecture</h2>
            <div className="bg-[#161616] rounded-[2rem] border border-white/10 shadow-2xl overflow-auto custom-scrollbar">
              <div className="p-8 laptop:p-12 h-[400px] laptop:h-[600px] flex items-start">
                <img 
                  src="/images/med-connect-ia.svg" 
                  className="h-full w-auto max-w-none block object-contain" 
                  style={{ imageRendering: 'auto' }} 
                  alt="Med Connect IA" 
                />
              </div>
            </div>
          </section>

          {/* DESIGN EVOLUTION */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-10">Visual Evolution</h2>
            <AutoScrollSection 
              title="Exploratory Sketching" 
              images={["/images/med-low1.png", "/images/med-low2.png"]} 
            />
            <AutoScrollSection 
              title="Refined Prototypes" 
              images={["/images/med-mid1.png", "/images/med-mid2.png", "/images/med-mid3.png"]} 
            />
            <AutoScrollSection 
              title="Production UI" 
              images={["/images/med-high1.png", "/images/med-high2.png", "/images/med-high3.png"]} 
            />
          </section>

          {/* EVALUATION */}
          <section className="mb-40 border-t border-white/10 pt-20">
            <h2 className="text-4xl font-bold mb-16">The Impact</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8">
              <div className="bg-[#161616] p-10 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all">
                <h3 className="text-xl font-bold mb-4">Patient Retention</h3>
                <p className="opacity-60 text-sm">88% of beta users preferred the unified dashboard over traditional portals.</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="opacity-60 text-sm">Doctor-to-patient communication speed increased by 40%.</p>
              </div>
              <div className="bg-[#161616] p-10 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all">
                <h3 className="text-xl font-bold mb-4">Security</h3>
                <p className="opacity-60 text-sm">HIPAA compliant architecture ensuring 100% data encryption at rest.</p>
              </div>
            </div>
          </section>

          {/* CALL TO ACTION */}
          <section className="mb-40">
            <div className="bg-[#161616] rounded-[3rem] p-12 laptop:p-20 border border-white/10 relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-emerald-500/5 -z-10" />
              <h2 className="text-3xl laptop:text-5xl font-bold mb-6">Deep Dive into Med Connect</h2>
              <p className="text-xl opacity-60 mb-10 max-w-2xl mx-auto">See the full research phase, from user interviews to final delivery.</p>
              <a 
                href="https://www.figma.com/design/0VtyHDyTOltnMRCJTssPnj/Medical?node-id=4213-155&t=0c32RbY163Zq9oIk-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                View Figma Case Study
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MedConnectCaseStudy;