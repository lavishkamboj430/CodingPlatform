import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    const Theme = useSelector((state) => state.Theme.Theme)
    return (
        <div
            className={`min-h-screen w-full overflow-x-hidden ${Theme ? "bg-black text-white" : "White-Theme text-black"
                }`}
        >
            <Navbar Theme={Theme} />

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
                    <p className="text-[10px] tracking-[0.18em] text-zinc-500 sm:text-sm sm:tracking-[0.2em]">
                        PAGE NOT FOUND
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
                        <span className={` ${Theme ? "text-zinc-300" : "text-zinc-700"} text-[90px]
    sm:text-[100px]
    md:text-[110px]
    lg:text-[130px]
    font-black
    leading-none
    tracking-[-0.06em]
    drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]
    select-none
                        `}>404</span>
                        <br />
                        Looks like you're lost...


                    </h1>

                    <p
                        className={Theme ? " mx-auto mt-5 max-w-md px-2 text-sml eading-6 text-zinc-400 sm:text-base" : " mx-auto mt-5 max-w-md px-2 text-sml eading-6 text-zinc-900 sm:text-base"}
                    >
                        The page you are looking for doesn't exist, has been moved or you entered the wrong URL.
                    </p>
                    {/* <br /><br /><br /> */}
                    {/* Buttons */}
                    <div
                        className="
              mt-30
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
                        text-sm font-medium" onClick={() => navigate("/")} > ← Go Back Home</button>

                        <Button variant={Theme ? "outline" : "solid"}  >
                            Explore Problems
                        </Button>

                        {/* <button className={`${base} ${styles}`}>children</button> */}
                    </div>
                </section>
            </section>

            {/* Code Editor */}
            <section className="w-full px-4 pb-16 sm:px-6 md:px-8">
                <div className="w-full overflow-x-auto">
                </div>
            </section>
        </div>
    );
};

export default NotFound;