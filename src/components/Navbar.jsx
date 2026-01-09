import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ---- shrink navbar on scroll ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled ? "h-14" : "h-16"}
        bg-[#013c5d]/95 backdrop-blur shadow-lg
        px-4 md:px-10 flex items-center justify-between`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <motion.img
          src="/NeroSafe Logo-01.png"
          alt="NeuroSafe Logo"
          className="w-9 h-9"
          whileHover={{ rotate: -3, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <span className="text-[#d5d2d2] font-semibold text-lg tracking-wide">
          NeuroSafe
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <NavBtn to="/">Home</NavBtn>
        <NavBtn to="/about">About</NavBtn>
        <NavBtn to="/evaluation">Evaluation</NavBtn>
        <NavBtn to="/detection">Detection</NavBtn>
      </ul>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="absolute top-full left-0 w-full bg-[#013c5d]/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col items-center gap-8 py-8">
              <NavBtn mobile to="/" onClick={() => setOpen(false)}>
                Home
              </NavBtn>
              <NavBtn mobile to="/about" onClick={() => setOpen(false)}>
                About
              </NavBtn>
              <NavBtn mobile to="/evaluation" onClick={() => setOpen(false)}>
                Evaluation
              </NavBtn>
              <NavBtn mobile to="/detection" onClick={() => setOpen(false)}>
                Detection
              </NavBtn>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ---------- NAV BUTTON ---------- */

function NavBtn({ to, children, mobile, onClick }) {
  return (
    <li className="relative">
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `
          group relative font-medium transition-colors
          ${mobile ? "text-white text-lg" : "text-[#d5d2d2]"}
        `
        }
      >
        {({ isActive }) => (
          <>
            <span className="relative z-10 px-2 py-1">
              {children}
            </span>

            {/* underline hover */}
            <span
              className={`
                absolute left-0 -bottom-1 h-[2px] w-full scale-x-0
                bg-gradient-to-r from-cyan-300 to-blue-200
                transition-transform duration-300 origin-left
                group-hover:scale-x-100
              `}
            />

            {/* active indicator */}
            {isActive && (
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white/80" />
            )}
          </>
        )}
      </NavLink>
    </li>
  );
}
