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
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative group">
        {/* 버튼 뒤 글로우 효과 */}
        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

        <button
          onClick={handleClick}
          disabled={loading}
          className={`
            relative px-12 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
            text-white font-bold text-xl rounded-full shadow-2xl
            transform transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-3xl
            active:scale-95
            disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
            border-3 border-white/30
            backdrop-blur-sm
            min-w-[280px] max-w-[320px]
          `}
        >
          <div className="flex items-center justify-center space-x-3 rounded-full">
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                <span>AI 분석 중...</span>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center space-x-3 rounded-full">
                  <span className="text-2xl">🎯</span>
                  <span>로또 번호 추천받기</span>
                  <span className="text-2xl">✨</span>
                </div>
              </>
            )}
          </div>

          {/* 버튼 내부 글리터 효과 */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </button>
      </div>

      {/* 버튼 하단 설명 텍스트 */}
      <div className="mt-6 text-center max-w-md">
        <p className="text-blue-100 text-sm opacity-80 leading-relaxed">
          🔮 최근 24주 데이터 분석으로 <br className="sm:hidden" />
          최적의 번호 조합을 생성합니다
        </p>
      </div>
    </div>
  );
}
