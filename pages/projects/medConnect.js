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
        {/* Gradient Masks that adapt to theme */}
        <div className={`absolute inset-y-0 left-0 w-20 z-10 pointer-events-none bg-gradient-to-r ${
          isDark ? "from-[#000] to-transparent" : "from-gray-50 to-transparent"
        }`}></div>
        <div className={`absolute inset-y-0 right-0 w-20 z-10 pointer-events-none bg-gradient-to-l ${
          isDark ? "from-[#000] to-transparent" : "from-gray-50 to-transparent"
        }`}></div>

        <div className="flex flex-nowrap space-x-8 animate-loop-scroll group-hover:paused">
          {[...images, ...images].map((img, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-[300px] laptop:w-[450px] aspect-video rounded-2xl overflow-hidden border flex items-center justify-center transition-colors ${
                isDark 
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

const MedConnectCaseStudy = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <>
      <Head>
        <title>Med Connect | UX Case Study</title>
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
          <section className="mb-20">
            <h1 className="text-6xl laptop:text-8xl font-bold mb-10 tracking-tighter">Med Connect</h1>
            <div className={`grid grid-cols-1 tablet:grid-cols-3 gap-10 border-t pt-10 ${
              isDark ? "border-white/10" : "border-black/10"
            }`}>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Responsibilities</h3>
                <p className="text-lg">Lead UI/UX, Frontend Architecture</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Tools</h3>
                <p className="text-lg">Figma, Next.js, TypeScript</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Timeline</h3>
                <p className="text-lg">Sept 2025 - Dec 2025</p>
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
                  Patients struggle with fragmented records. 
                  <span className={isDark ? "text-gray-400 italic" : "text-gray-500 italic"}> Lack of a unified touchpoint creates anxiety and slows critical treatment.</span>
                </p>
                <div className={`grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-12 pt-10 border-t ${
                  isDark ? "border-white/10" : "border-black/10"
                }`}>
                  <div>
                    <h3 className="text-emerald-500 font-mono text-sm mb-4 uppercase tracking-widest">Fragmented Data</h3>
                    <p className="opacity-70 leading-relaxed text-lg">Healthcare info is scattered, making a holistic view nearly impossible.</p>
                  </div>
                  <div>
                    <h3 className="text-emerald-500 font-mono text-sm mb-4 uppercase tracking-widest">The Goal</h3>
                    <p className="opacity-70 leading-relaxed text-lg">Streamline referrals and provide instant, secure access to unified health metrics.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STRATEGY */}
          <section className="mb-32">
            <div className="border-l-8 border-emerald-500 pl-8 mb-12">
              <h2 className="text-2xl laptop:text-3xl font-black uppercase tracking-tighter">Strategic Inquiry</h2>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mb-12">
              {["TRUST", "CLARITY", "CONTINUITY"].map((label, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] border transition-colors group ${
                  isDark ? "bg-[#161616] border-white/5 hover:border-emerald-500/50" : "bg-white border-black/5 hover:border-emerald-500/50 shadow-sm"
                }`}>
                  <span className="text-emerald-500 font-mono text-sm mb-4 block">0{i+1} / {label}</span>
                  <p className="text-2xl font-semibold leading-tight group-hover:text-emerald-500 transition-colors">
                    {i === 0 && "How might we ensure data is secure yet accessible?"}
                    {i === 1 && "How might we translate complex medical jargon into visuals?"}
                    {i === 2 && "How might we create a seamless handover for specialists?"}
                  </p>
                </div>
              ))}
            </div>

            <div className={`p-12 laptop:p-20 rounded-[3rem] border relative overflow-hidden text-center transition-colors ${
              isDark ? "bg-[#161616] border-white/10" : "bg-gray-50 border-black/5"
            }`}>
              <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10" />
              <h3 className="text-emerald-500 uppercase tracking-[0.3em] font-black text-xs laptop:text-sm mb-6">Hypothesis</h3>
              <p className="text-3xl laptop:text-5xl font-medium italic leading-tight tracking-tight">
                "Unifying records with <span className="underline decoration-emerald-400 underline-offset-8">real-time communication</span> would ease patient anxiety and speed up care coordination."
              </p>
            </div>
          </section>

          

          {/* DESIGN EVOLUTION */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-10">Visual Evolution</h2>
            <AutoScrollSection 
            title="Exploratory Sketching" 
            images={[
              "/images/med/lowfid1.jpeg", // Fixed extension from .jpg to .jpeg to match your file
              "/images/med/lowfid2.jpeg", 
              "/images/med/lowfid3.jpeg"
            ]} 
            isDark={isDark} 
            mounted={mounted} 
          />
            <AutoScrollSection 
            title="Production UI" 
            images={[
              "/images/med/highfid1.jpg",  
              "/images/med/highfid2.png", 
              "/images/med/highfid3.png",
              "/images/med/highfid4.png"
            ]} 
            isDark={isDark} 
            mounted={mounted} 
          />
          </section>

          {/* EVALUATION */}
          <section className={`mb-40 border-t pt-20 ${isDark ? "border-white/10" : "border-black/10"}`}>
            <h2 className="text-4xl font-bold mb-4">Usability Testing</h2>
            <p className="opacity-60 mb-16">5-person moderated test, 5 tasks</p>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {[
                {
                  task: "Task 1 — Find the Contact Us page",
                  outcome: "pass",
                  detail: "All 5 participants found it quickly with no confusion."
                },
                {
                  task: "Task 2 — Use the \"Know more\" CTA (Experience Sync section)",
                  outcome: "friction",
                  detail: "Participants weren't sure where the CTA would take them and struggled to find their way back. Fixed by redesigning the destination to read as an extension of the same page rather than a separate one."
                },
                {
                  task: "Task 3 — Navigate to Services and list what's offered",
                  outcome: "pass",
                  detail: "All 5 participants found the section and listed the services easily."
                },
                {
                  task: "Task 4 — Comprehension check on the UX writing",
                  outcome: "friction",
                  detail: "The \"Know more\" copy was called out as too vague. Revised to be more specific about what it leads to."
                },
                {
                  task: "Task 5 — Open-ended: best and worst impression",
                  outcome: "pass",
                  detail: "Participants praised the color palette and clarity of the copy; the only criticism was the Task 2 CTA confusion, which has since been addressed."
                }
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-[2rem] border transition-all ${
                  isDark ? "bg-[#161616] border-white/10 hover:border-emerald-500/50" : "bg-white border-black/5 hover:border-emerald-500/50 shadow-sm"
                }`}>
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
                    item.outcome === "pass"
                      ? (isDark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-700")
                      : (isDark ? "bg-amber-500/10 text-amber-400" : "bg-amber-50 text-amber-700")
                  }`}>
                    {item.outcome === "pass" ? "No friction" : "Friction found"}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{item.task}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-40">
            <div className={`rounded-[3rem] p-12 laptop:p-20 border relative overflow-hidden text-center transition-colors ${
              isDark ? "bg-[#161616] border-white/10" : "bg-emerald-50 border-emerald-100"
            }`}>
              <h2 className="text-3xl laptop:text-5xl font-bold mb-6">Deep Dive into Med Connect</h2>
              <a 
                href="https://www.figma.com/design/0VtyHDyTOltnMRCJTssPnj/Medical?node-id=580-577&t=BjylY3zLe8RCh8p0-1"
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 ${
                  isDark ? "bg-white text-black hover:bg-emerald-500 hover:text-white" : "bg-emerald-600 text-white hover:bg-black"
                }`}
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