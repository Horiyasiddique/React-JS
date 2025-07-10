import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">MinimalBlog</h2>
            <p className="text-gray-600 max-w-md">
              No fluff, just stuff. Serving unfiltered takes since 2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                    `block text-gray-600 hover:text-rose-500 transition-colors ${
                      isActive ? "font-medium text-rose-500" : ""
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
                    `block text-gray-600 hover:text-rose-500 transition-colors ${
                      isActive ? "font-medium text-rose-500" : ""
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
                    `block text-gray-600 hover:text-rose-500 transition-colors ${
                      isActive ? "font-medium text-rose-500" : ""
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
                    `block text-gray-600 hover:text-rose-500 transition-colors ${
                      isActive ? "font-medium text-rose-500" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media - Using regular anchor tags */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-rose-500 transition-colors text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-rose-500 transition-colors text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-rose-500 transition-colors text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-rose-500 transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* footer part 2  (copy right section) */}
        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MinimalBlog. All rights reserved.</p>
          <p className="mt-2 flex justify-center items-center gap-2">
            Made with <span className="text-rose-500">{<FaHeart />}</span> and too much coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;