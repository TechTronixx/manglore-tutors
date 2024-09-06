"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, LogIn, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="relative group">
      <motion.span
        className="text-red-600/70 dark:text-amber-300 group-hover:text-primary px-3 py-2 rounded-md text-sm font-bold transition-colors duration-300"
        whileHover={{ scale: 2.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
        initial={false}
        animate={{ width: "0%" }}
        whileHover={{ width: "100%" }}
      />
    </Link>
  );
};

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl">
      <div className="backdrop-blur-sm bg-primary/20 rounded-full shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                Logo
              </Link>
            </div>
            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <NavItem key={item.name} href={item.href}>
                    {item.name}
                  </NavItem>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full text-foreground hover:text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {mounted &&
                  (theme === "dark" ? (
                    <Sun className="w-5 h-5 text-primary" />
                  ) : (
                    <Moon className="w-5 h-5 text-accent" />
                  ))}
              </motion.button>
              <motion.button
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </motion.button>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {mounted &&
                  (theme === "dark" ? (
                    <Sun className="w-5 h-5 text-primary" />
                  ) : (
                    <Moon className="w-5 h-5 text-accent" />
                  ))}
              </motion.button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center text-lg sm:py-4 sm:px-3 backdrop-blur-sm bg-background/75 rounded-2xl mt-4 shadow-lg">
          {navItems.map((item) => (
            <NavItem key={item.name} href={item.href}>
              {item.name}
            </NavItem>
          ))}
          <motion.button
            className="w-[40%] bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded-2xl text-sm transition-colors duration-300 flex items-center justify-center mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
}
