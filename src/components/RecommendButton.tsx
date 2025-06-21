import { getLatestDrawNo } from "@/lib/fetchLatestDrawNo";
import { getFrequentNumbers } from "@/lib/fetchLotto";
import { fetchLottoNumbers } from "@/lib/fetchLotto";
import { generateRecommendedNumbers } from "@/lib/lottoUtils";
import { useState } from "react";

export default function RecommendButton({
  setRecommended,
}: {
  setRecommended: (numbers: number[][]) => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const latest = await getLatestDrawNo(); // 최신 회차 자동 가져오기
      const lastWeekNumbers = await fetchLottoNumbers(latest - 1); // 직전 회차
      const frequentNumbers = await getFrequentNumbers(latest - 1); // 지난 6개월 빈도 분석

      const result = generateRecommendedNumbers(
        lastWeekNumbers,
        frequentNumbers
      );
      setRecommended(result);
    } catch (error) {
      console.error("추천 실패", error);
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
    >
      {loading ? "추천 중..." : "로또 번호 추천받기"}
    </button>
  );
}
