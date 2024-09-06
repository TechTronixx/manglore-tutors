"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroParticles from "./HeroParticles";
import SparklesText from "../magicui/sparkles-text";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { GraduationCap } from "lucide-react";
import { CoolMode } from "../magicui/cool-mode";

function HeroSection() {
  const subtitle = "Your one stop hub for all your Tutoring needs!";
  const words = subtitle.split(" ");

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full max-w-4xl"
        >
          <SparklesText
            text="Manglore Tutors!"
            className="text-amber-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          />
        </motion.div>
        <motion.div className="text-sm sm:text-base md:text-lg text-amber-200 mt-4 max-w-2xl">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <motion.button
          className="mt-6 sm:mt-8 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="text-sm sm:text-base font-medium">
              ✨ Find your Tutor!
            </span>
            <GraduationCap
              color="#ffd478"
              className="ml-1 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </AnimatedShinyText>
        </motion.button>
        <div className="pt-4 py-2">
          <CoolMode
            options={{
              particle:
                "https://www.pngfind.com/pngs/m/294-2949251_burger-emoji-png-hamburger-emoji-transparent-png.png",
            }}
          >
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center">
              Click Me!
            </button>
          </CoolMode>
        </div>
      </div>
      <HeroParticles />
    </div>
  );
}

export default HeroSection;
