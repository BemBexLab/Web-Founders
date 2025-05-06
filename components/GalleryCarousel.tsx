"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Post {
  id: number;
  title: { rendered: string };
  acf?: {
    project_image?: { url: string };
    project_url?: string;
  };
}

const GalleryCarousel = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts", { cache: "no-store" });
        const data = await res.json();
        const projectPosts = data.filter(
          (post: Post) => post.acf?.project_image?.url && post.acf?.project_url
        );
        setPosts(projectPosts);
      } catch (err) {
        console.error("Failed to load posts", err);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (isHovering || posts.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering, posts]);

  useEffect(() => {
    if (!carouselRef.current || itemsRef.current.length === 0) return;

    const activeItem = itemsRef.current[activeIndex];
    if (activeItem) {
      const scrollPosition =
        activeItem.offsetLeft -
        carouselRef.current.offsetWidth / 2 +
        activeItem.offsetWidth / 2;

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  if (posts.length === 0) {
    return (
      <div className="text-white text-center py-10">Loading Projects...</div>
    );
  }

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <p className="text-[#ff4d2d] font-semibold mb-2">Our Portfolio</p>
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-10 leading-tight">
        Our{" "}
        <span className="bg-gradient-to-r from-[#ff4d2d] to-white text-transparent bg-clip-text">
          Previous Work
        </span>
      </h2>

      <div
        className="relative w-full overflow-x-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Arrows */}
        <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? posts.length - 1 : prev - 1
              )
            }
            className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300"
          >
            ←
          </button>
        </div>
        <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === posts.length - 1 ? 0 : prev + 1
              )
            }
            className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide snap-x snap-mandatory py-4 px-2"
        >
          {[...posts, ...posts].map((post, index) => {
            const imageUrl =
              post.acf?.project_image?.url || "/default-image.jpg";
            const projectUrl = post.acf?.project_url || "#";
            const actualIndex = index % posts.length;

            return (
              <a
                key={index}
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  if (actualIndex === index % posts.length) {
                    itemsRef.current[actualIndex] = el;
                  }
                }}
                className={`relative min-w-[240px] sm:min-w-[280px] md:min-w-[360px] 
                  h-[340px] sm:h-[400px] md:h-[420px] 
                  bg-[#0f0f0f] rounded-2xl overflow-hidden 
                  shadow-xl border transition-all duration-300 flex-shrink-0 snap-center
                  ${
                    actualIndex === activeIndex
                      ? "scale-105 border-[#ff4d2d]"
                      : "scale-95 opacity-80 border-white/10"
                  } hover:scale-105 hover:opacity-100 hover:border-[#ff4d2d]/60`}
              >
                <Image
                  src={imageUrl}
                  alt={post.title.rendered}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 360px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-lg">
                    {post.title.rendered}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-[#ff4d2d]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
