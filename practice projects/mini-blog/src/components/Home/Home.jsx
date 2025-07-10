import { Link } from "react-router-dom";
import { HiOutlineSparkles } from "react-icons/hi2";
import { BsPencilSquare } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <span className="inline-block bg-[#FF5A5F]/10 text-[#FF5A5F] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Est. 2024 • No fluff, just stuff
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            Write. <span className="text-[#00B4D8]">Read.</span> Repeat.
          </h1>
          <p className="text-lg text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed">
            This isn't your grandma's blog. Here you'll find unfiltered takes on
            tech, disastrous DIY attempts, and the occasional existential
            crisis—all served with extra sarcasm.
          </p>
        </div>

        <div className="relative mb-16">
          <img
            src="https://cdn.pixabay.com/photo/2019/01/17/23/14/work-3938875_1280.jpg"
            alt="Blogging workspace"
            className="rounded-xl shadow-lg w-full max-w-4xl mx-auto border-4 border-white"
          />
          <HiOutlineSparkles className="absolute -top-6 -right-6 w-24 h-24 text-[#FF5A5F]" />
        </div>

        <Link
          to="/blogs"
          className="inline-block bg-[#FF5A5F] hover:bg-[#E04B50] text-white font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-md hover:shadow-lg"
        >
          Explore Blogs →
        </Link>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          title={"Raw Stories"}
          description={
            "No AI-generated corporate nonsense. Just human messiness you can laugh at."
          }
          icon={BsPencilSquare}
          iconClassName={"text-[#00B4D8]"}
        />

        <Card
          title={"5-Minute Read"}
          description={
            "No AI-generated corporate nonsense. Just human messiness you can laugh at."
          }
          icon={FaBookOpen}
          iconClassName={"text-[#FF5A5F]"}
        />

        <Card
          title={"Zero Presentation"}
          description={
            "We won't tell you to live your best life or drink more kale smoothies."
          }
          icon={HiOutlineSparkles}
          iconClassName={"text-[#00B4D8]"}
        />
      </section>
    </div>
  );
};

export default Home;
