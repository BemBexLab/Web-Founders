"use client";
import { useState, useEffect, useRef } from "react";

interface Post {
  id: number;
  title: { rendered: string };
  acf?: {
    project_image?: { url: string };
    project_url?: string;
  };
}

const DRAG_THRESHOLD = 30; // px before we consider it a real drag

const ProjectCardGrid = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragDelta = useRef(0);

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
        console.error("Error fetching posts", err);
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

  // ✅ Enhanced Mouse Drag Handler with threshold check
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // Only left-click
      isDragging.current = true;
      startX.current = e.pageX - carousel.offsetLeft;
      scrollLeft.current = carousel.scrollLeft;
      dragDelta.current = 0;
      carousel.classList.add("dragging");
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      carousel.classList.remove("dragging");

      // Decide whether to swap based on drag distance
      const moved = dragDelta.current;
      if (Math.abs(moved) > DRAG_THRESHOLD) {
        if (moved < 0) {
          setActiveIndex((prev) => (prev + 1) % posts.length);
        } else {
          setActiveIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
        }
      }
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      carousel.classList.remove("dragging");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = x - startX.current;
      dragDelta.current = walk;
      carousel.scrollLeft = scrollLeft.current - walk;
    };

    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    carousel.addEventListener("mousemove", handleMouseMove);

    return () => {
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      carousel.removeEventListener("mousemove", handleMouseMove);
    };
  }, [posts.length]);

  if (posts.length === 0) {
    return (
      <div className="text-white text-center py-10">Loading Projects...</div>
    );
  }

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <p className="text-[#DE2F04] font-semibold mb-2">Featured Projects</p>
      <h2 className="text-white text-4xl sm:text-5xl font-bold mb-10 leading-tight">
        Our{" "}
        <span className="bg-gradient-to-r from-[#DE2F04] to-white text-transparent bg-clip-text">
          Portfolio
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
          className="flex gap-6 overflow-x-hidden scrollbar-hide snap-x snap-mandatory py-4 px-2 cursor-grab active:cursor-grabbing select-none"
        >
          {[...posts, ...posts].map((post, index) => {
            const imageUrl =
              post.acf?.project_image?.url || "/default-image.jpg";
            const projectUrl = post.acf?.project_url || "#";
            const actualIndex = index % posts.length;

            return (
              <a
                key={`${post.id}-${index}`}
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  if (actualIndex === index) {
                    itemsRef.current[actualIndex] = el;
                  }
                }}
                className={`relative min-w-[320px] sm:min-w-[360px] md:min-w-[400px] max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] 
                bg-black rounded-2xl overflow-hidden shadow-xl border transition-all duration-300 flex-shrink-0 snap-center
                ${
                  actualIndex === activeIndex
                    ? "scale-105 border-[#DE2F04]"
                    : "scale-95 opacity-80 border-white/10"
                } hover:scale-105 hover:opacity-100 hover:border-[#DE2F04]/60`}
              >
                <img
                  src={imageUrl}
                  alt={post.title.rendered}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-lg text-center">
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
                  ? "w-8 bg-[#DE2F04]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCardGrid;
