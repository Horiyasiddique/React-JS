import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapPin,
  FaEnvelope,
} from "react-icons/fa";
import { GrConnect } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
          Get in <span className="text-[#FF5A5F]">Touch</span>
        </h1>
        <p className="text-lg text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed">
          Have a burning question? Want to collaborate? Or just tell us our blog
          made you snort coffee? We read every message (and apologize in advance
          for our slow replies).
        </p>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-[#F7F7F7] p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#1A1A1A]/70 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-[#1A1A1A]/20 focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1A1A1A]/70 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-[#1A1A1A]/20 focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#1A1A1A]/70 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-[#1A1A1A]/20 focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                placeholder="What's on your mind?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF5A5F] hover:bg-[#E04B50] text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={
                "https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg"
              }
              alt="Our workspace"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F7F7F7] p-6 rounded-lg flex items-start space-x-4">
              <FaEnvelope className="mt-1 text-[#FF5A5F]" />
              <div>
                <h3 className="font-bold text-[#1A1A1A] mb-1">Email</h3>
                <p className="text-[#1A1A1A]/70">hello@minimalblog.com</p>
              </div>
            </div>

            <div className="bg-[#F7F7F7] p-6 rounded-lg flex items-start space-x-4">
              <FaPhoneAlt className="mt-1 text-[#00B4D8]" />
              <div>
                <h3 className="font-bold text-[#1A1A1A] mb-1">Phone</h3>
                <p className="text-[#1A1A1A]/70">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="bg-[#F7F7F7] p-6 rounded-lg flex items-start space-x-4">
              <FaMapPin className="mt-1 text-[#FF5A5F]" />
              <div>
                <h3 className="font-bold text-[#1A1A1A] mb-1">Address</h3>
                <p className="text-[#1A1A1A]/70">
                  123 Blog Lane, Internet City
                </p>
              </div>
            </div>

            <div className="bg-[#F7F7F7] p-6 rounded-lg flex flex-col items-start ">
              <div className="flex gap-2">
                <GrConnect className="mt-1 text-[#00B4D8]" />
                <h3 className="font-bold text-[#1A1A1A] mb-3">Social Media</h3>
              </div>
              <div className="flex space-x-4">
                <FaTwitter className="text-xl text-slate-600 cursor-pointer hover:text-red-400 hover:scale-110" />
                <FaInstagram className="text-xl text-slate-600 cursor-pointer hover:text-red-400 hover:scale-110" />
                <FaLinkedin className="text-xl text-slate-600 cursor-pointer hover:text-red-400 hover:scale-110" />
                <FaGithub className="text-xl text-slate-600 cursor-pointer hover:text-red-400 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
