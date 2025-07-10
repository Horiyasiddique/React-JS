import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-300">
      <div className="max-w-7xl mx-auto">
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-[#1A1A1A]">MinimalBlog</h2>
            <p className="text-[#1A1A1A]/70 max-w-md">
              No fluff, just stuff. Serving unfiltered takes since 2024.
            </p>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1A1A1A]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-[#1A1A1A]/70 hover:text-[#FF5A5F] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-[#1A1A1A]/70 hover:text-[#FF5A5F] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/blogs" 
                  className="text-[#1A1A1A]/70 hover:text-[#FF5A5F] transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-[#1A1A1A]/70 hover:text-[#FF5A5F] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1A1A1A]">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-[#1A1A1A]/70 hover:text-[#FF5A5F] transition-colors text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="text-[#1A1A1A]/70 hover:text-[#FF5A5F] transition-colors text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="text-[#1A1A1A]/70 hover:text-[#FF5A5F] transition-colors text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="#" 
                className="text-[#1A1A1A]/70 hover:text-[#FF5A5F] transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-300 pt-6 text-center text-sm text-[#1A1A1A]/50">
          <p>© {new Date().getFullYear()} MinimalBlog. All rights reserved.</p>
          <p className="mt-1">Made with <span className="text-[#FF5A5F]">♥</span> and too much coffee.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;