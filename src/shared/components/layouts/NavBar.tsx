import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "../common/Logo";

import { navLinks } from "../../constants/navigation";
import useScroll from "../../hooks/useScroll";

const Navbar = () => {
  const isScrolled = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
       <Logo/>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-slate-300 transition duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-violet-500 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full px-5 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(124,58,237,.45)",
            }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            <span>Get Started</span>

            <motion.div
              whileHover={{
                x: 4,
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-white lg:hidden"
          aria-label="Open Menu"
        >
          <Menu className="h-8 w-8" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-screen w-[320px] max-w-full border-l border-white/10 bg-slate-950 p-6 lg:hidden"
            >
              {/* Drawer Header */}
              <div className="mb-12 flex items-center justify-between">
               <Logo/>

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                >
                  <X className="text-white" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-6">
                {navLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="block text-lg text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Buttons */}
              <div className="mt-12 space-y-4">
                <button className="w-full rounded-xl border border-white/10 py-3 text-white transition hover:bg-white/5">
                  Login
                </button>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-semibold text-white shadow-lg">
                  Get Started
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;