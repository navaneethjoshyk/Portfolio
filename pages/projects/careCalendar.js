import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";

const CareCalendarPage = () => {
  return (
    <>
      <Head>
        <title>Project | Care Calendar</title>
      </Head>
      {data.showCursor && <Cursor />}
      
      <div className={`container mx-auto mt-10 px-5 laptop:px-0 ${data.showCursor && "cursor-none"}`}>
        <Header isBlog={true} />
        
        <main className="mt-20 max-w-5xl mx-auto">
          {/* NAVIGATION */}
          <button 
            onClick={() => window.history.back()}
            className="text-sm mb-10 opacity-70 hover:opacity-100 transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Projects
          </button>

          {/* HERO SECTION */}
          <h1 className="text-5xl laptop:text-7xl font-bold mb-6">
            Care Calendar: A UI/UX Case Study
          </h1>
          <p className="opacity-50 text-lg mb-10 font-medium">Updated 1 month ago</p>

          <p className="text-xl laptop:text-2xl leading-relaxed opacity-80 mb-20">
            Care Calendar is a comprehensive management tool designed for independent caregivers and families. It streamlines daily caregiving tasks, medication tracking, and patient health monitoring into a single, intuitive mobile interface. This case study explores the user research, information architecture, and design iterations that led to a more organized caregiving experience.
          </p>

          {/* SECTION 1: THE PROBLEM */}
          <section className="mb-20">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-8">
              The Problem
            </h2>
            <div className="text-lg laptop:text-xl opacity-70 space-y-6">
              <p>
                The fragmentation of modern caregiving creates a precarious environment where families and professional providers often struggle to coordinate across a disjointed mix of paper notes, messaging apps, and memory. This lack of a centralized "single source of truth" regarding a patient’s status frequently results in dangerous communication gaps and missed medications, which can lead to critical lapses in care.
              </p>
              <p>
                Furthermore, the immense mental load of managing these complex, decentralized schedules contributes significantly to caregiver burnout and fatigue, underscoring the urgent need for a more streamlined, unified tracking system for appointments and daily vitals.
              </p>
            </div>
          </section>

          {/* VISUAL 1: HERO IMAGE / MOCKUP */}
          <div className="bg-white rounded-3xl p-10 laptop:p-20 mb-20 flex flex-col items-center justify-center border border-white/10">
             <h3 className="text-black text-2xl font-bold mb-8 text-center">The Proposed Solution</h3>
             <img src="/images/Care-calender.png" alt="Care Calendar App Interface" className="max-w-full h-auto rounded-xl shadow-2xl" />
             <p className="text-slate-500 mt-8 text-center max-w-2xl">A centralized mobile platform that acts as a digital nerve center, combining dynamic scheduling with real-time health logging.</p>
          </div>

          {/* SECTION 2: RESEARCH & PERSONAS */}
          <section className="mb-20">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-6">User Research & Personas</h2>
            <div className="text-lg laptop:text-xl opacity-70 space-y-6">
              <p>
                Through targeted interviews with healthcare providers and home-care assistants, we identified critical pain points surrounding capacity management and task prioritization. These insights led to the development of distinct user personas:
              </p>
              <ul className="list-disc ml-6 space-y-4">
                <li><strong>The Busy Professional:</strong> Requires streamlined, quick-glance updates and automated alerts to manage multiple patients.</li>
                <li><strong>The Family Member:</strong> Seeks an intuitive way to log daily activities and access historical health data for loved ones.</li>
              </ul>
              <p className="bg-white/5 p-6 border-l-4 border-emerald-500 italic">
                "The interface needed to be high-contrast and low-friction to accommodate users who are frequently multitasking or operating in high-stress, time-sensitive environments."
              </p>
            </div>
          </section>

          {/* SECTION 3: DESIGN EVOLUTION */}
          <section className="mb-20">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-8">Information Architecture & Iteration</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Low-Fidelity Wireframing</h3>
                <p className="text-lg opacity-70">
                  Initial sketches focused on the "Care Log." We experimented with chronological event streams versus task-based views to find the most efficient way to record medication intake.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">High-Fidelity UI</h3>
                <p className="text-lg opacity-70">
                  The final design uses a calming emerald and white palette. We utilized large touch targets and high-contrast typography to ensure accessibility for older caregivers.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4: EVALUATION */}
          <section className="mb-20 border-t border-white/10 pt-20">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-8">Testing Performance & Usability</h2>
            <div className="space-y-10">
              <div className="max-w-4xl">
                <p className="text-xl font-bold inline text-white uppercase tracking-wide">Usability: </p>
                <span className="text-lg opacity-70 ml-2">Users successfully logged critical medical actions in 40% less time compared to traditional manual methods.</span>
              </div>
              <div className="max-w-4xl">
                <p className="text-xl font-bold inline text-white uppercase tracking-wide">Reliability: </p>
                <span className="text-lg opacity-70 ml-2">Implemented offline-first capabilities so caregivers can log data in hospitals with poor connectivity.</span>
              </div>
              <div className="max-w-4xl">
                <p className="text-xl font-bold inline text-white uppercase tracking-wide">Scalability: </p>
                <span className="text-lg opacity-70 ml-2">The architecture supports multiple caregivers syncing to a single patient profile in real-time.</span>
              </div>
            </div>
          </section>

          {/* SECTION 5: FUTURE WORK */}
          <section className="mb-20">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-8">Future Work</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Predictive Health Analytics</h4>
                <p className="text-lg opacity-70">Using trend data to identify patterns and help detect anomalies in patient recovery before they become emergencies.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Wearable Integration</h4>
                <p className="text-lg opacity-70">Connecting with IoT devices to automatically sync heart rate, sleep, and blood pressure directly into the app.</p>
              </div>
            </div>
          </section>

          {/* CONCLUSION */}
          <section className="mb-40">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-6">Conclusion</h2>
            <p className="text-lg laptop:text-xl opacity-70 leading-relaxed italic border-l-4 border-emerald-500/50 pl-6">
              Care Calendar is a critical component in ensuring healthcare delivery adheres to safe protocols. By centralizing the caregiving experience, we have successfully reduced the mental load on providers and ensured that patient health remains the top priority through consistent, reliable data tracking.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CareCalendarPage;