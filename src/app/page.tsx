"use client";

import { useState } from "react";

import RecommendButton from "@/components/RecommendButton";
import LottoCard from "@/components/LottoCard";

export default function HomePage() {
  const [recommended, setRecommended] = useState<number[][]>([]);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden pt-24">
        {/* 배경 장식 요소들 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-green-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-32 w-28 h-28 bg-orange-300 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
          {/* 헤더 섹션 */}
          <div id="home" className="text-center mb-16 space-y-6">
            <div className="flex items-center justify-center mb-8">
              <div className="text-6xl mr-4">🎰</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
                로또 번호 추천기
              </h1>
              <div className="text-6xl ml-4">🍀</div>
            </div>
            <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed">
              AI가 분석한 최근 24주 데이터를 바탕으로{" "}
              <br className="hidden sm:block" />
              당신만의 행운 번호를 추천해드립니다
            </p>
          </div>

          {/* 버튼 섹션 */}
          <div className="mb-16">
            <RecommendButton setRecommended={setRecommended} />
          </div>

          {/* 결과 섹션 */}
          {recommended.length > 0 && (
            <div className="w-full max-w-4xl mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
                  🎯 추천 번호
                </h2>
                <p className="text-blue-100 text-lg">
                  총 {recommended.length}개의 번호 조합을 추천드립니다
                </p>
              </div>

              <div className="grid gap-6 md:gap-8">
                {recommended.map((numbers, idx) => (
                  <div
                    key={idx}
                    className="transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-center mb-3">
                      <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                        추천 #{idx + 1}
                      </span>
                    </div>
                    <LottoCard numbers={numbers} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 소개 섹션 */}
          <div id="about" className="mt-32 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-12 drop-shadow-lg">
              🤖 AI 분석 시스템
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  데이터 분석
                </h3>
                <p className="text-blue-100 text-sm">
                  최근 24주간의 로또 당첨 번호를 실시간으로 분석합니다
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-white mb-3">AI 추천</h3>
                <p className="text-blue-100 text-sm">
                  빈도 분석과 패턴 인식을 통해 최적의 번호를 선별합니다
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  실시간 업데이트
                </h3>
                <p className="text-blue-100 text-sm">
                  매주 새로운 회차 데이터가 자동으로 반영됩니다
                </p>
              </div>
            </div>
          </div>

          {/* 푸터 */}
          <div className="mt-20 text-center">
            <p className="text-blue-200 text-sm opacity-80">
              ✨ 행운을 빕니다! 책임감 있는 게임을 즐기세요 ✨
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
