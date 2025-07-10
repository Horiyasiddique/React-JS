import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiClock, FiCalendar, FiArrowLeft } from "react-icons/fi";

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dev.to/api/articles/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch post (status: ${response.status})`);
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-[#FF5A5F]/20 mb-4"></div>
          <p className="text-[#1A1A1A]">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl mb-4 text-[#1A1A1A]">
          {error || "Post not found"}
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-[#FF5A5F] hover:text-[#E04B50] flex items-center justify-center mx-auto"
        >
          <FiArrowLeft className="mr-2" /> Back to Blogs
        </button>
      </div>
    );
  }

  // Safely get tags - handle cases where tag_list might be missing or not an array
  const tags = Array.isArray(post.tag_list) ? post.tag_list : [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-20">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-[#FF5A5F] hover:text-[#E04B50] mb-6 transition-colors"
      >
        <FiArrowLeft className="mr-2" /> Back to Blogs
      </button>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
          {post.title || "Untitled Post"}
        </h1>

        <div className="flex items-center gap-4 mb-8 text-sm text-[#1A1A1A]/80">
          {post.user && (
            <div className="flex items-center gap-2">
              <img
                src={post.user.profile_image_90 || "https://via.placeholder.com/90"}
                alt={post.user.name || "Unknown author"}
                className="w-8 h-8 rounded-full"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/90";
                }}
              />
              <span>{post.user.name || "Unknown author"}</span>
            </div>
          )}
          {post.published_at && (
            <span className="flex items-center gap-1">
              <FiCalendar /> {new Date(post.published_at).toLocaleDateString()}
            </span>
          )}
          <span className="flex items-center gap-1">
            <FiClock /> {post.reading_time_minutes || "?"} min read
          </span>
        </div>

        {post.cover_image && (
          <img
            src={post.cover_image}
            alt={post.title || "Post cover"}
            className="w-full rounded-lg mb-8"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}

        {post.body_html ? (
          <div
            dangerouslySetInnerHTML={{ __html: post.body_html }}
            className="blog-content"
          />
        ) : (
          <p className="text-[#1A1A1A]/70">No content available.</p>
        )}

        {tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-[#F7F7F7]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-[#F7F7F7] text-[#1A1A1A]/80 px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPost;

