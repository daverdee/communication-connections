
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Training Programs", path: "/training" },
    { name: "Training Manuals", path: "/training-manuals" },
    { name: "Compliance & Benefits", path: "/compliance" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-100 shadow-md py-2" : "bg-gray-200 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-bold flex flex-col">
            <span className="text-[#A77790]">Communication</span>
            <span className="text-[#84435B]">Connections</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={isActive(link.path) ? "active-nav-link" : "nav-link"}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary ml-4">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brand-700" />
            ) : (
              <Menu className="h-6 w-6 text-brand-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-100 z-40 pt-20 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-6 pt-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl ${
                isActive(link.path) ? "font-semibold text-brand-600" : "text-brand-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn-primary text-center mt-6"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
