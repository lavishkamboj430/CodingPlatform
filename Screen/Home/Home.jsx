import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import Features from "../../Components/Features";
import CodeEditor from "../../Components/CodeEditor";

const Home = () => {
    const navigate = useNavigate()
    const Theme = useSelector((state) => state.Theme.Theme)
    const base = "rounded-md px-5 py-2.5 text-sm font-medium";
  const styles =
    //    "bg-white text-black hover:bg-zinc-200"
    "border border-zinc-700 text-white bg-zinc-900";
    return (
        <div
            className={`min-h-screen w-full overflow-x-hidden ${Theme ? "bg-black text-white" : "White-Theme text-black"
                }`}
        >
            <Navbar Theme={Theme}/>

            {/* Hero */}
            <section className="relative min-h-[560px] overflow-hidden ">

                {/* Background Hands Image */}
                <img
                    src={Theme ? "/Dark.png" : "/Light.png"}
                    alt=""
                    className="
                    pointer-events-none
                     absolute
            left-1/2
    top-[80px]
    z-0
    w-full
    max-w-full
    -translate-x-1/2
    h-auto
    object-contain
    sm:top-[100px]
    md:top-[120px]
    lg:top-[160px]
  "
                />

                {/* Hero Content */}
                <section
                    className="
            relative
            z-10
            mx-auto
            px-5
            pt-14
            text-center
            sm:px-6
            sm:pt-20
            md:pt-24
            lg:pt-28
          "
                >
                    <p className="text-[10px] tracking-[0.18em] text-zinc-500 sm:text-xs sm:tracking-[0.2em]">
                        WRITE / RUN / SAVE / GROW
                    </p>

                    <h1
                        className="
              mx-auto
              mt-5
              max-w-4xl
              text-4xl
              font-semibold
              leading-[1.1]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
                    >
                        Turn Your Ideas Into
                        <br />
                        <span className="text-zinc-400">Working Code</span>
                    </h1>

                    <p
                        className={Theme?" mx-auto mt-5 max-w-md px-2 text-sml eading-6 text-zinc-400 sm:text-base":" mx-auto mt-5 max-w-md px-2 text-sml eading-6 text-zinc-900 sm:text-base"}
                    >
                        A clean and powerful platform to code, practice and save your
                        projects — all in one place.
                    </p>

                    {/* Buttons */}
                    <div
                        className="
              mt-7
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
                    >
                        <button className="bg-white text-black 
                        hover:bg-zinc-200 rounded-md px-5 py-2.5 
                        text-sm font-medium" onClick={() => navigate("/coding")} >Start Coding →</button>

                        <Button variant={Theme?"outline":"solid"}  >
                            Explore Problems
                        </Button>
                        
                    </div>
                </section>
            </section>

            {/* Code Editor */}
            <section className="w-full px-4 pb-16 sm:px-6 md:px-8">
                <div className="w-full overflow-x-auto">
                    <CodeEditor />
                </div>
            </section>
            <Features theme={Theme} />
        </div>
    );
};

export default Home;