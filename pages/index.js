import { useRef } from "react";
import { useRouter } from "next/router"; // 1. Added useRouter import
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Stats from "../components/Stats/stats.js";
import Cursor from "../components/Cursor";
import Workflow from "../components/Workflow"; 

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Router initialization
  const router = useRouter(); // 2. Initialized router

  // Refs
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1 ref={textOne} className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
              {data.headerTaglineOne}
            </h1>
            <h1 ref={textTwo} className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5">
              {data.headerTaglineTwo}
            </h1>
            <h1 ref={textThree} className="text-xl tablet:text-3xl laptop:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 opacity-70 mt-5">
              {data.headerTaglineThree}
            </h1>
            <h1 ref={textFour} className="text-xl tablet:text-3xl laptop:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 opacity-70">
              {data.headerTaglineFour}
            </h1>
          </div>
          <Socials className="mt-2 laptop:mt-5" />
        </div>

        {/* WORK SECTION */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold font-bold">Work.</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-8">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                date={project.date}
                onClick={() => {
                  // 3. Logic to handle internal vs external links in same tab
                  if (project.url.startsWith("http")) {
                    window.location.href = project.url; 
                  } else {
                    router.push(project.url);
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 my-20"></div>
        <Stats stats={data.stats} />
        <div className="border-b border-gray-800 my-20"></div>
        <Workflow workflow={data.workflow} />
        <div className="border-b border-gray-800 my-20"></div>

        {/* SERVICES SECTION */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold font-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
            {/* Header with a cleaner, more consistent margin */}
            <h1 className="tablet:mx-10 text-3xl laptop:text-5xl font-bold mb-10 tracking-tighter">
              About.
            </h1>

            {/* Removed the w-3/5 constraint and added a max-width for readability */}
            <div className="tablet:mx-10 mt-2 text-xl laptop:text-xl w-full max-w-none">
              {data.aboutpara.split("\n\n").map((paragraph, index) => (
                <p 
                  key={index} 
                  className="mb-8 opacity-70 leading-relaxed laptop:leading-snug font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

        <Footer />
      </div>
    </div>
  );
}