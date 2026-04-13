import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";

const OceanPalettePage = () => {
  return (
    <>
      <Head>
        <title>Project | Ocean Palette</title>
      </Head>
      {data.showCursor && <Cursor />}
      
      <div className={`container mx-auto mt-10 px-5 laptop:px-0 ${data.showCursor && "cursor-none"}`}>
        <Header isBlog={true} />
        
        <main className="mt-20 max-w-5xl mx-auto">
          <button 
            onClick={() => window.history.back()}
            className="text-sm mb-10 opacity-70 hover:opacity-100 transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Projects
          </button>

          <h1 className="text-5xl laptop:text-7xl font-bold mb-6">
            Ocean Palette: The Art of the Plate
          </h1>
          <p className="opacity-50 text-lg mb-10 font-medium">Updated 2 months ago</p>

          <p className="text-xl laptop:text-2xl leading-relaxed opacity-80 mb-20">
            Ocean Palette is a premium digital experience designed to mirror the elegance 
            of fine dining. This project focuses on high-performance web development, 
            integrating fluid animations and a responsive design system to showcase 
            culinary artistry.
          </p>

          <section className="mb-20">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-8">The Vision</h2>
            <div className="text-lg laptop:text-xl opacity-70 space-y-6">
              <p>
                The goal was to move beyond a standard menu website. We aimed to create 
                an immersive narrative where the "Art of the Plate" is reflected in the 
                digital interface through clean layout and sophisticated transitions.
              </p>
            </div>
          </section>

          {/* Visual Box */}
          <div className="bg-white rounded-3xl p-10 laptop:p-20 mb-20 flex flex-col items-center justify-center border border-white/10">
             <img src="/images/restaurant.png" alt="Ocean Palette Mockup" className="max-w-full h-auto rounded-lg shadow-2xl" />
             <p className="text-slate-500 mt-8 text-center max-w-md">The landing page utilizes high-resolution imagery and a minimal UI to keep focus on the cuisine.</p>
          </div>

          <section className="mb-20">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-6">Technical Strategy</h2>
            <div className="text-lg laptop:text-xl opacity-70 space-y-6">
              <p>
                For this project, I focused on asset optimization and responsive typography. 
                Ensuring that high-quality food photography loads instantly without 
                impacting the user experience was a primary technical requirement.
              </p>
            </div>
          </section>

          <section className="mb-20 border-t border-white/10 pt-20">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-8">Project Components</h2>
            <div className="space-y-10">
              <div className="max-w-4xl">
                <p className="text-xl font-bold inline text-white uppercase tracking-wide">Interactive Menu: </p>
                <span className="text-lg opacity-70 ml-2">A category-based filtering system that allows users to explore dishes by course.</span>
              </div>
              <div className="max-w-4xl">
                <p className="text-xl font-bold inline text-white uppercase tracking-wide">Reservation Flow: </p>
                <span className="text-lg opacity-70 ml-2">A streamlined, frictionless booking process integrated with modern API logic.</span>
              </div>
            </div>
          </section>

          <section className="mb-40">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-6">Conclusion</h2>
            <p className="text-lg laptop:text-xl opacity-70 leading-relaxed italic border-l-4 border-white/20 pl-6">
              Ocean Palette successfully bridges the gap between culinary excellence and 
              digital functionality, providing a platform that is as appetizing as the 
              food it represents.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OceanPalettePage;