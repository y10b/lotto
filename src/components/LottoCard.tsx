// 번호별 색상 매핑 함수
function getNumberColor(num: number): string {
  if (num <= 10)
    return "bg-gradient-to-br from-yellow-400 to-yellow-600 text-yellow-900";
  if (num <= 20)
    return "bg-gradient-to-br from-blue-400 to-blue-600 text-white";
  if (num <= 30) return "bg-gradient-to-br from-red-400 to-red-600 text-white";
  if (num <= 40)
    return "bg-gradient-to-br from-gray-400 to-gray-600 text-white";
  return "bg-gradient-to-br from-green-400 to-green-600 text-white";
}

export default function LottoCard({ numbers }: { numbers: number[] }) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {numbers.map((num, i) => (
          <div key={i} className="relative group">
            <div
              className={`
                w-14 h-14 md:w-16 md:h-16 rounded-full 
                flex items-center justify-center 
                font-bold text-lg md:text-xl
                shadow-lg hover:shadow-xl 
                transform hover:scale-110 transition-all duration-300
                ring-2 ring-white/50 hover:ring-white/80
                ${getNumberColor(num)}
              `}
            >
              {num}
            </div>
            {/* 호버 시 나타나는 효과 */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* 카드 하단 장식 */}
      <div className="mt-4 pt-4 border-t border-gray-200/50">
        <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
          <span>🎲</span>
          <span className="font-medium">Lucky Numbers</span>
          <span>🎲</span>
        </div>
      </div>
    </div>
  );
}
