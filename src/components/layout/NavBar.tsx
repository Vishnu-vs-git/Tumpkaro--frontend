import { Menu, ArrowRight } from "lucide-react";
// import { navLinks } from "../../constants/navigation";
import useScroll from "../../hooks/useScroll";
import { navLinks } from "../../constants/navigation";


const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-bold text-white shadow-lg">
            TK
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              ThumbKaro{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-full px-5 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white">
            Login
          </button>

          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="text-white lg:hidden">
          <Menu size={30} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;