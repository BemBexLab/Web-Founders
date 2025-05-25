"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  acf?: {
    project_image?: { url: string };
    project_url?: string;
    catogary?: string | string[];
  };
}

const categories = [
  "WEB DEVELOPMENT",
  "SHOPIFY",
  "WORDPRESS",
  "UI UX DESIGN",
  "FIGMA DESIGN",
  "LOGO DESIGN",
  "BRANDING",
  "ILLUSTRATION",
  "PRINT",
];

const ProjectCardGrid = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("WEB DEVELOPMENT");

  const filteredPosts = posts.filter((post) => {
    const cat = post.acf?.catogary;
    if (!cat) return false;

    if (Array.isArray(cat)) {
      return cat.some(
        (c) => c.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    return cat.toLowerCase() === selectedCategory.toLowerCase();
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts", { cache: "no-store" });
        const data = await res.json();
        const projectPosts = data.filter(
          (post: Post) => post.acf?.project_image?.url && post.slug
        );
        setPosts(projectPosts);
      } catch (err) {
        console.error("Error fetching posts", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto bg-white text-white">
      {/* Section Heading */}
      <p className="text-[#002768] font-semibold mb-2 text-center">
        Featured Projects
      </p>
      <h2 className="text-black text-4xl sm:text-5xl font-bold mb-10 leading-tight text-center">
        Our{" "}
        <span className="text-black">
          Portfolio
        </span>
      </h2>

      {/* Category Filter Buttons */}
<div className="flex flex-wrap justify-center gap-4 mb-12">
  {categories.map((label) => (
    <span
      key={label}
      onClick={() => setSelectedCategory(label)}
      className={`px-4 py-1.5 text-sm sm:text-base rounded-full border cursor-pointer transition ${
        selectedCategory === label
          ? "bg-[#002768] border-[#002768] text-white"
          : "bg-[rgba(0,39,104,0.20)] border-[#002768] text-[#1F1F1F] hover:brightness-110"
      }`}
    >
      {label}
    </span>
  ))}
</div>


      {/* Projects Grid or Loading Message */}
      {posts.length === 0 ? (
        <div className="text-white text-center py-10">Loading Projects...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {filteredPosts.map((post) => {
            const imageUrl = post.acf?.project_image?.url || "/default.jpg";

            return (
              <Link
                key={post.id}
                href={`/projects/${post.slug}`}
                className="group relative w-full bg-black rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-[#DE2F04]/60"
              >
                <img
                  src={imageUrl}
                  alt={post.title.rendered}
                  className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-lg text-center">
                    {post.title.rendered}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProjectCardGrid;
