
export async function GET() {
  try {
    const response = await fetch("https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts?per_page=100", {
      cache: "no-store",
    });

    if (!response.ok) {
      return new Response("Failed to fetch posts", { status: response.status });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}