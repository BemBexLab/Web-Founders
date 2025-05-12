"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-block bg-[#DE2F04] hover:bg-white hover:text-black transition-colors duration-300 text-white font-medium px-6 py-3 rounded-full"
    >
      ← Back to Portfolio
    </button>
  );
}
