"use client";
import { motion } from "framer-motion";
import HeroParticles from "./HeroParticles";
import SparklesText from "../magicui/sparkles-text";
import { GraduationCap } from "lucide-react";
import { CoolMode } from "../magicui/cool-mode";

function HeroSection() {
  const subtitle = "Your one stop hub for all your Tutoring needs!";
  const words = subtitle.split(" ");

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-4xl"
        >
          <SparklesText
            text="Lorem Ipsum"
            className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          />
        </motion.div>
        <motion.div
          className="text-md sm:text-base md:text-2xl font-semibold text-amber-400 mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
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
          className="mt-8 cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full transition-all duration-300 ease-in-out hover:bg-primary/80">
            <span className="text-base font-medium mr-2">Find your Tutor!</span>
            <GraduationCap className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </div>
        </motion.button>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <CoolMode
            options={{
              particle:
                "https://www.pngfind.com/pngs/m/294-2949251_burger-emoji-png-hamburger-emoji-transparent-png.png",
            }}
          >
            <button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-full text-base font-medium transition-colors duration-300 flex items-center">
              Learn More
            </button>
          </CoolMode>
        </motion.div>
      </div>
      <HeroParticles />
    </div>
  );
}

export default HeroSection;
