import { Users, LightBulb, Rocket } from "../index"

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
          About <span className="text-[#FF5A5F]">Us</span>
        </h1>
        <p className="text-lg text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed">
          We're a bunch of caffeine-fueled humans who accidentally started a blog 
          while trying to avoid adult responsibilities. Now we're stuck here.
        </p>
      </section>

      
      <div className="max-w-4xl mx-auto mb-20 rounded-xl overflow-hidden shadow-lg border-4 border-white">
        <img
          src={"https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg"}
          alt="Our team working together"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="text-center">
          <div className="text-5xl font-bold text-[#FF5A5F] mb-3">127+</div>
          <p className="text-[#1A1A1A]/70">Blogs Published</p>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-[#00B4D8] mb-3">42K+</div>
          <p className="text-[#1A1A1A]/70">Readers Monthly</p>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-[#FF5A5F] mb-3">3</div>
          <p className="text-[#1A1A1A]/70">Mental Breakdowns</p>
        </div>
      </div>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-12 text-center">
          Our <span className="text-[#00B4D8]">Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F7F7F7] p-8 rounded-xl hover:translate-y-2 transition-transform">
            <Users className="w-12 h-12 mx-auto text-[#FF5A5F] mb-4" />
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Authenticity</h3>
            <p className="text-[#1A1A1A]/70">
              No corporate jargon. Just real stories with awkward pauses and 
              occasional typos.
            </p>
          </div>

          <div className="bg-[#F7F7F7] p-8 rounded-xl hover:translate-y-2 transition-transform">
            <LightBulb className="w-12 h-12 mx-auto text-[#00B4D8] mb-4" />
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">No BS</h3>
            <p className="text-[#1A1A1A]/70">
              We won't tell you to wake up at 5AM or meditate. Unless you want to. 
              Then go for it.
            </p>
          </div>

          <div className="bg-[#F7F7F7] p-8 rounded-xl hover:translate-y-2 transition-transform">
            <Rocket className="w-12 h-12 mx-auto text-[#FF5A5F] mb-4" />
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Progress</h3>
            <p className="text-[#1A1A1A]/70">
              From failed sourdough to half-decent code. We document the messy middle.
            </p>
          </div>
        </div>
      </section>

     
      <div className="max-w-2xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
          Want to increase your knowledge?
        </h2>
        <button className="bg-[#FF5A5F] hover:bg-[#E04B50] text-white font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-md hover:shadow-lg">
          Start Reading
        </button>
      </div>
    </div>
  );
};

export default About;