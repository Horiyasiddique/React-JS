import { useEffect, useState } from "react";
import { FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const data = await fetch("https://dev.to/api/articles?per_page=12");
        const result = await data.json();
        setBlogs(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-[#FF5A5F]/20 mb-4"></div>
          <p className="text-[#1A1A1A]">Curating fresh stories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section*/}
      <section className="max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <span className="inline-block bg-[#FF5A5F]/10 text-[#FF5A5F] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Raw Stories
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            Discover. <span className="text-[#00B4D8]">Stories</span>.
          </h1>
          <p className="text-lg text-[#1A1A1A]/80 max-w-3xl mx-auto leading-relaxed">
            Raw, unfiltered tech tales and life lessons from developers who've
            been there.
          </p>
        </div>

        <div className="relative mb-16">
          <img
            src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg"
            alt="Blogging workspace"
            className="rounded-xl shadow-lg w-full max-w-4xl mx-auto border-4 border-white"
          />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">
            Latest Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-[#f2f2f2] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#F7F7F7]"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={
                      blog.cover_image ||
                      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    }
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {blog.tag_list.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-[#F7F7F7] text-[#1A1A1A]/80"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-[#1A1A1A]/70 mb-4 line-clamp-2">
                    {blog.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-[#1A1A1A]/60 mb-4">
                    <span className="flex items-center gap-1">
                      <FiClock size={14} /> {blog.reading_time_minutes} min
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar size={14} />{" "}
                      {new Date(blog.published_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegCommentAlt size={14} /> {blog.comments_count}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#F7F7F7]">
                    <div className="flex items-center gap-2">
                      <img
                        src={blog.user.profile_image_90}
                        alt={blog.user.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-[#1A1A1A]/80">
                        {blog.user.name.split(" ")[0]}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-sm font-medium text-[#FF5A5F] hover:text-[#E04B50] flex items-center gap-1 transition-colors"
                    >
                      Read <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
