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
              className={`flex-shrink-0 w-[200px] laptop:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border flex items-center justify-center transition-all ${
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

const InfiniteHousingCaseStudy = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <>
      <Head>
        <title>Infinite Housing | UX Case Study</title>
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
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${
                isDark ? "border-green-500/40 bg-green-500/10 text-green-400" : "border-green-200 bg-green-50 text-green-700"
              }`}>
                📱 Mobile-First Design
              </span>
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${
                isDark ? "border-white/20 bg-white/5 text-white/80" : "border-black/10 bg-gray-50 text-gray-600"
              }`}>
                Android & iOS
              </span>
            </div>
            <h1 className="text-6xl laptop:text-8xl font-bold mb-10 tracking-tighter">Infinite Housing</h1>
            <div className={`grid grid-cols-1 tablet:grid-cols-4 gap-10 border-t pt-10 ${
              isDark ? "border-white/10" : "border-black/10"
            }`}>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Responsibilities</h3>
                <p className="text-lg">UI/UX Design, Full-Stack Dev</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Tools</h3>
                <p className="text-lg">Figma, React, Tailwind CSS, Node.js, MongoDB</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Type</h3>
                <p className="text-lg">Housing | Capstone Project</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Timeline</h3>
                <p className="text-lg">Jan 2026 – May 2026</p>
              </div>
            </div>
          </section>

          {/* PROBLEM STATEMENT */}
          <section className="mb-32 mt-20">
            <div className="grid grid-cols-1 laptop:grid-cols-12 gap-10">
              <div className="laptop:col-span-4">
                <h2 className="text-gray-500 uppercase tracking-widest text-sm font-bold border-l-2 border-green-600 pl-4">
                  The Context
                </h2>
              </div>
              <div className="laptop:col-span-8">
                <p className="text-2xl laptop:text-4xl font-medium leading-tight mb-8">
                  Eco-friendly construction is the future.{" "}
                  <span className={isDark ? "text-gray-400 italic" : "text-gray-500 italic"}>
                    But builders lack the training and licensing pathways to adopt it.
                  </span>
                </p>
                <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-medium mb-4 ${
                  isDark ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-green-50 border border-green-200 text-green-700"
                }`}>
                  <span>📱</span>
                  <span>Designed mobile-first — fully optimised for both <strong>Android</strong> and <strong>iOS</strong></span>
                </div>
                <div className={`grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-12 pt-10 border-t ${
                  isDark ? "border-white/10" : "border-black/10"
                }`}>
                  <div>
                    <h3 className="text-green-600 font-mono text-sm mb-4 uppercase tracking-widest">The Gap</h3>
                    <p className="opacity-70 leading-relaxed text-lg text-pretty">
                      No unified platform exists to train builders on sustainable materials and guide them through certification — leaving a critical skills gap in the eco-housing sector.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-green-600 font-mono text-sm mb-4 uppercase tracking-widest">The Objective</h3>
                    <p className="opacity-70 leading-relaxed text-lg text-pretty">
                      Build a mobile-first platform that educates, certifies, and licenses construction professionals to work with eco-friendly materials like HempCrete.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STRATEGY */}
          <section className="mb-32">
            <div className="border-l-8 border-green-600 pl-8 mb-12">
              <h2 className="text-2xl laptop:text-3xl font-black uppercase tracking-tighter">How Might We...</h2>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mb-12">
              {[
                { label: "ONBOARDING", text: "Make eco-materials feel approachable for first-time builders?" },
                { label: "TRAINING", text: "Structure learning modules for varied skill levels?" },
                { label: "LICENSING", text: "Simplify a complex certification process into clear steps?" },
                { label: "ENGAGEMENT", text: "Keep users motivated through a multi-module curriculum?" },
                { label: "TRUST", text: "Build credibility for a new category of construction materials?" },
                { label: "SCALABILITY", text: "Support multiple user types — manufacturers, contractors, builders?" },
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] border transition-all group ${
                  isDark ? "bg-[#161616] border-white/5 hover:border-green-500/50" : "bg-white border-black/5 hover:border-green-600/50 shadow-sm"
                }`}>
                  <span className="text-green-600 font-mono text-sm mb-4 block">0{i + 1} / {item.label}</span>
                  <p className="text-2xl font-semibold leading-tight group-hover:text-green-600 transition-colors">{item.text}</p>
                </div>
              ))}
            </div>

            <div className={`p-12 laptop:p-20 rounded-[3rem] border relative overflow-hidden transition-colors ${
              isDark ? "bg-[#161616] border-white/10" : "bg-green-50 border-green-100"
            }`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] -z-10" />
              <h3 className="text-green-600 uppercase tracking-[0.3em] font-black text-xs laptop:text-sm mb-6">Hypothesis</h3>
              <p className="text-3xl laptop:text-5xl font-medium italic leading-tight tracking-tight">
                "A{" "}
                <span className="underline decoration-green-500 underline-offset-8">guided, step-by-step</span>{" "}
                mobile experience lowers the barrier to entry for eco-friendly construction licensing."
              </p>
            </div>
          </section>

          {/* USER FLOW / IA */}
          <section className="mb-32">
            <h2 className="text-2xl laptop:text-3xl font-black uppercase tracking-tighter mb-12">User Flow</h2>
            <div className={`rounded-[2rem] border shadow-2xl overflow-auto custom-scrollbar ${
              isDark ? "bg-[#161616] border-white/10" : "bg-white border-black/10"
            }`}>
              <div className="p-8 laptop:p-12 h-[400px] laptop:h-[600px] flex items-center justify-center">
                <img
                  src="/images/infinitehousing/information.jpg"
                  className="h-full w-auto max-w-none block object-contain"
                  alt="Infinite Housing Information Architecture"
                />
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
                <img
                  src="/images/infinitehousing/ih-persona.svg"
                  className="w-full h-full object-cover grayscale"
                  alt="The Eco-Builder"
                />
              </div>
              <div className="w-full laptop:w-3/5">
                <h4 className="text-5xl laptop:text-7xl font-bold mb-4">The Eco-Builder</h4>
                <blockquote className={`text-2xl laptop:text-4xl font-medium leading-tight mb-8 border-l-4 pl-6 italic ${
                  isDark ? "border-black" : "border-white"
                }`}>
                  "I want to build sustainably — I just don't know where to start."
                </blockquote>
                <div className={`grid grid-cols-1 tablet:grid-cols-2 gap-8 pt-8 border-t ${
                  isDark ? "border-black/10" : "border-white/10"
                }`}>
                  <div>
                    <h5 className="font-bold text-lg mb-2 uppercase">Needs</h5>
                    <p className="opacity-70">Clear training path, fast licensing, material guidance.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 uppercase">Pains</h5>
                    <p className="opacity-70">Fragmented info, complex certification, no mobile support.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UX WRITING */}
          <section className="mb-32">
            <div className="border-l-8 border-green-600 pl-8 mb-12">
              <h2 className="text-2xl laptop:text-3xl font-black uppercase tracking-tighter">UX Writing</h2>
            </div>

            {/* Voice & Tone */}
            <div className={`p-10 laptop:p-16 rounded-[3rem] border mb-10 ${
              isDark ? "bg-[#161616] border-white/10" : "bg-white border-black/5 shadow-sm"
            }`}>
              <h3 className="text-green-600 font-mono text-sm uppercase tracking-widest mb-6">Voice & Tone</h3>
              <p className="text-xl laptop:text-2xl font-medium leading-relaxed mb-10 opacity-80">
                Infinite Housing speaks like a <span className="text-green-600 font-semibold">knowledgeable mentor</span> — confident, clear, and encouraging. The tone avoids jargon, meets builders where they are, and frames every step as progress toward a meaningful goal.
              </p>
              <div className="grid grid-cols-2 tablet:grid-cols-4 gap-6">
                {["Clear", "Empowering", "Approachable", "Action-oriented"].map((trait, i) => (
                  <div key={i} className={`px-6 py-4 rounded-2xl text-center border ${
                    isDark ? "border-green-500/30 bg-green-500/5" : "border-green-200 bg-green-50"
                  }`}>
                    <span className="text-green-600 font-bold">{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Before / After microcopy */}
            <h3 className="text-gray-500 uppercase text-sm mb-6 tracking-widest">Microcopy Decisions</h3>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 mb-10">
              {[
                {
                  screen: "Splash Screen",
                  before: "Get Started",
                  after: "Start your journey today",
                  reason: "Positions the action as a meaningful beginning, not just a button click.",
                },
                {
                  screen: "Onboarding — CTA",
                  before: "Continue",
                  after: "Next",
                  reason: "Shorter and directional — reduces cognitive load during a multi-step intro.",
                },
                {
                  screen: "Dashboard — Modules",
                  before: "Go to training",
                  after: "Continue training",
                  reason: "\"Continue\" implies existing progress, encouraging users to pick up where they left off.",
                },
                {
                  screen: "License Flow",
                  before: "Cancel",
                  after: "Not now",
                  reason: "\"Not now\" is softer and non-final — keeps the door open without pressuring.",
                },
                {
                  screen: "Module Status",
                  before: "Incomplete",
                  after: "Time left: 1hr 13min",
                  reason: "Replaces a negative label with a progress-forward indicator that feels motivating.",
                },
                {
                  screen: "Splash — Hero Copy",
                  before: "Welcome to Infinite Housing",
                  after: "Ready to reshape the future of construction?",
                  reason: "A question invites the user in; a statement pushes them away.",
                },
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-[2rem] border ${
                  isDark ? "bg-[#161616] border-white/10" : "bg-white border-black/5 shadow-sm"
                }`}>
                  <span className="text-green-600 font-mono text-xs uppercase tracking-widest block mb-4">{item.screen}</span>
                  <div className="flex flex-col gap-3 mb-5">
                    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl line-through opacity-50 text-sm ${
                      isDark ? "bg-red-500/10" : "bg-red-50"
                    }`}>
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>{item.before}</span>
                    </div>
                    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                      isDark ? "bg-green-500/10" : "bg-green-50"
                    }`}>
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>{item.after}</span>
                    </div>
                  </div>
                  <p className="opacity-60 text-sm leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>

            {/* Onboarding copy highlight */}
            <div className={`p-12 laptop:p-20 rounded-[3rem] border relative overflow-hidden ${
              isDark ? "bg-[#161616] border-white/10" : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-100"
            }`}>
              <h3 className="text-green-600 font-mono text-sm uppercase tracking-widest mb-8">Onboarding Copy — Full Sequence</h3>
              <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
                {[
                  {
                    slide: "01",
                    headline: "HempCrete / Straw",
                    body: "Eco-friendly material with excellent insulation and thermal mass.",
                  },
                  {
                    slide: "02",
                    headline: "Eco-Homes",
                    body: "Offering energy-efficient and sustainable living solutions.",
                  },
                  {
                    slide: "03",
                    headline: "Eco-Homes",
                    body: "Offering energy-efficient and sustainable living solutions.",
                  },
                ].map((s, i) => (
                  <div key={i} className={`p-8 rounded-2xl border ${
                    isDark ? "border-white/10 bg-white/5" : "border-green-200 bg-white"
                  }`}>
                    <span className="text-green-600 font-mono text-xs mb-4 block">Slide {s.slide}</span>
                    <p className="font-bold text-xl mb-2">{s.headline}</p>
                    <p className="opacity-60 text-sm leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DESIGN EVOLUTION */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-10">Design Evolution</h2>
            <AutoScrollSection
              title="Low-Fidelity Wireframes"
              images={[
                "/images/infinitehousing/ih-low/Dashboard(existing).png",
                "/images/infinitehousing/ih-low/Overwiew.png",
                "/images/infinitehousing/ih-low/Product overview.png",
                "/images/infinitehousing/ih-low/Product series 1.png",
                "/images/infinitehousing/ih-low/Product series 3.png",
                "/images/infinitehousing/ih-low/key usage.png",
                "/images/infinitehousing/ih-low/new license.png",
                "/images/infinitehousing/ih-low/Check valid license.png",
                "/images/infinitehousing/ih-low/license confirmation and download.png",
                "/images/infinitehousing/ih-low/Continue training.png",
              ]}
              isDark={isDark}
            />
            <AutoScrollSection
              title="Mid-Fidelity"
              images={[
                "/images/infinitehousing/ih-mid/Dashboard.png",
                "/images/infinitehousing/ih-mid/Login(EU).png",
                "/images/infinitehousing/ih-mid/Login(EU)-1.png",
                "/images/infinitehousing/ih-mid/Signup.png",
                "/images/infinitehousing/ih-mid/Usertype.png",
                "/images/infinitehousing/ih-mid/Module.png",
                "/images/infinitehousing/ih-mid/Module 1.png",
                "/images/infinitehousing/ih-mid/Form.png",
                "/images/infinitehousing/ih-mid/Check Licence status.png",
                "/images/infinitehousing/ih-mid/LicenceEU).png",
                "/images/infinitehousing/ih-mid/Product overview.png",
                "/images/infinitehousing/ih-mid/Product series(EU).png",
              ]}
              isDark={isDark}
            />
            <AutoScrollSection
              title="High-Fidelity"
              images={["/images/infinitehousing/ih-high/ih-high-1.png", "/images/infinitehousing/ih-high/ih-high-2.png", "/images/infinitehousing/ih-high/ih-high-3.png", "/images/infinitehousing/ih-high/ih-high-4.png", "/images/infinitehousing/ih-high/ih-high-5.png", "/images/infinitehousing/ih-high/ih-high-6.png", "/images/infinitehousing/ih-high/ih-high-7.png", "/images/infinitehousing/ih-high/ih-high-8.png", "/images/infinitehousing/ih-high/ih-high-9.png", "/images/infinitehousing/ih-high/ih-high-10.png", "/images/infinitehousing/ih-high/ih-high-11.png", "/images/infinitehousing/ih-high/ih-high-12.png"]}
              isDark={isDark}
            />
          </section>

          {/* KEY SCREENS */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold mb-12">Key Screens</h2>
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
              {[
                { label: "Onboarding", img: "/images/infinitehousing/ih-screen-onboarding.png" },
                { label: "Dashboard", img: "/images/infinitehousing/ih-screen-dashboard.png" },
                { label: "Training Modules", img: "/images/infinitehousing/ih-screen-modules.png" },
                { label: "Product Overview", img: "/images/infinitehousing/ih-screen-product.png" },
                { label: "License Form", img: "/images/infinitehousing/ih-screen-form.png" },
                { label: "License Card", img: "/images/infinitehousing/ih-screen-card.png" },
              ].map((screen, i) => (
                <div key={i} className={`rounded-[2rem] overflow-hidden border ${
                  isDark ? "border-white/10 bg-[#161616]" : "border-black/5 bg-gray-50 shadow-sm"
                }`}>
                  <div className="aspect-[9/16] overflow-hidden">
                    <img src={screen.img} alt={screen.label} className="w-full h-full object-cover" />
                  </div>
                  <div className="px-5 py-4">
                    <p className="font-semibold text-sm">{screen.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* IMPACT */}
          <section className={`mb-40 border-t pt-20 ${isDark ? "border-white/10" : "border-black/10"}`}>
            <h2 className="text-4xl font-bold mb-16">Evaluation</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8 text-center">
              {[
                { i: "🌱", h: "Desirability", d: "Users reported the onboarding flow felt clear and approachable for a new category.", b: "hover:border-green-500" },
                { i: "⚙️", h: "Feasibility", d: "Full-stack implementation with JWT auth, MongoDB, and REST API — production-ready.", b: "hover:border-green-500" },
                { i: "📈", h: "Viability", d: "Modular licensing flow supports multiple user types and material categories at scale.", b: "hover:border-green-500" },
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
              isDark ? "bg-[#161616] border-white/10" : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-100"
            }`}>
              <h2 className="text-3xl laptop:text-5xl font-bold mb-6">Explore the full process</h2>
              <div className="flex flex-col tablet:flex-row gap-4 justify-center">
                <a
                  href="https://www.figma.com/design/UrnepX8fTurfw4qKFE7aoS/Infinite-housing-Fidelity-?node-id=159-5690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 ${
                    isDark ? "bg-white text-black hover:bg-green-600 hover:text-white" : "bg-green-600 text-white hover:bg-black"
                  }`}
                >
                  Open Figma Prototype
                </a>
                <a
                  href="https://www.figma.com/board/U7b80mbWq99kfrfw3Cxen3/Infinite-Homes---Capstone-Project?node-id=0-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 ${
                    isDark ? "bg-white/10 text-white hover:bg-white hover:text-black border border-white/20" : "bg-white text-green-700 border-2 border-green-600 hover:bg-green-600 hover:text-white"
                  }`}
                >
                  View FigJam Board
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default InfiniteHousingCaseStudy;