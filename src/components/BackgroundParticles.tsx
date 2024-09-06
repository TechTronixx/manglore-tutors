"use client";
import { useEffect, useState } from "react";
import HeroParticles from "./hero/HeroParticles";

const BackgroundParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <HeroParticles />
    </div>
  );
};

export default BackgroundParticles;
