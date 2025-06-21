"use client";

import { useState } from "react";
import RecommendButton from "@/components/RecommendButton";
import LottoCard from "@/components/LottoCard";

export default function HomePage() {
  const [recommended, setRecommended] = useState<number[][]>([]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">로또 번호 추천기</h1>
      <RecommendButton setRecommended={setRecommended} />
      <div className="mt-6 space-y-4">
        {recommended.map((numbers, idx) => (
          <LottoCard key={idx} numbers={numbers} />
        ))}
      </div>
    </main>
  );
}
