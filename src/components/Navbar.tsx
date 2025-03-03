
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ContactFormDialog from "./training/ContactFormDialog";
import { Button } from "./ui/button";

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

  // Close menu and scroll to top when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
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
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/b6dc2a26-813f-421b-8068-7783498280ba.png" 
              alt="Communication Connections Logo" 
              className="h-12 w-12"
            />
            <span className="text-2xl font-display font-bold flex flex-col">
              <span className="text-[#A77790]">Communication</span>
              <span className="text-[#84435B]">Connections</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={isActive(link.path) 
                  ? "text-brand-600 font-bold after:content-[''] after:block after:w-full after:h-0.5 after:bg-brand-400"
                  : "nav-link"
                }
              >
                {link.name}
              </Link>
            ))}
            <ContactFormDialog 
              trigger={
                <Button className="btn-primary ml-4">
                  Get Started
                </Button>
              }
            />
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
        className={`fixed inset-0 bg-white z-40 pt-20 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-6 pt-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={isActive(link.path) 
                ? "text-xl font-bold text-brand-600 border-l-4 border-brand-600 pl-4" 
                : "text-xl text-brand-700 pl-4"
              }
            >
              {link.name}
            </Link>
          ))}
          <ContactFormDialog 
            trigger={
              <Button 
                className="btn-primary text-center mt-6"
              >
                Get Started
              </Button>
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
