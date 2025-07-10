import { NavLink } from "react-router-dom";

const Header = () => {
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

          {/* Nav bar */}
          <nav>
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
        </div>
      </div>
    </header>
  );
};

export default Header;