import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-2xl font-bold text-[#1A1A1A] hover:text-[#FF5A5F] transition-colors"
          >
            MinimalBlog
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                    `text-[#1A1A1A] hover:text-[#FF5A5F] transition-colors ${
                      isActive ? "font-semibold text-[#FF5A5F]" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => 
                    `text-[#1A1A1A] hover:text-[#FF5A5F] transition-colors ${
                      isActive ? "font-semibold text-[#FF5A5F]" : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) => 
                    `text-[#1A1A1A] hover:text-[#FF5A5F] transition-colors ${
                      isActive ? "font-semibold text-[#FF5A5F]" : ""
                    }`
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => 
                    `text-[#1A1A1A] hover:text-[#FF5A5F] transition-colors ${
                      isActive ? "font-semibold text-[#FF5A5F]" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-[#1A1A1A] hover:text-[#FF5A5F] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden bg-white py-2 px-4 shadow-lg rounded-b-lg">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block py-2 text-[#1A1A1A] hover:text-[#FF5A5F] transition-colors ${
                      isActive ? "font-semibold text-[#FF5A5F]" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block py-2 text-[#1A1A1A] hover:text-[#FF5A5F] transition-colors ${
                      isActive ? "font-semibold text-[#FF5A5F]" : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block py-2 text-[#1A1A1A] hover:text-[#FF5A5F] transition-colors ${
                      isActive ? "font-semibold text-[#FF5A5F]" : ""
                    }`
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block py-2 text-[#1A1A1A] hover:text-[#FF5A5F] transition-colors ${
                      isActive ? "font-semibold text-[#FF5A5F]" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;