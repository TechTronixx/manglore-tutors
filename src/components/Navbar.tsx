"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import Link from "next/link";

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
        className="text-gray-600 dark:text-amber-400 group-hover:text-amber-500 dark:group-hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
        whileHover={{ scale: 2.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"
        initial={false}
        animate={{ width: "0%" }}
        whileHover={{ width: "100%" }}
      />
    </Link>
  );
};

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl">
      <div className="backdrop-blur-sm bg-amber-100/75 dark:bg-amber-800/75 rounded-full shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-gray-800 dark:text-white"
              >
                Logo
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <NavItem key={item.name} href={item.href}>
                    {item.name}
                  </NavItem>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <motion.button
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </motion.button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              >
                {/* <span className="sr-only">Open main menu</span> */}
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
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center text-lg sm:py-4 sm:px-3 backdrop-blur-sm bg-white/75 dark:bg-gray-800/75 rounded-2xl mt-4 shadow-lg">
          {navItems.map((item) => (
            <NavItem key={item.name} href={item.href}>
              {item.name}
            </NavItem>
          ))}
          <motion.button
            className="w-[40%] bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-2xl text-sm transition-colors duration-300 flex items-center justify-center mt-4"
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
