// src/lib/fetchLotto.ts

// 직전 회차 당첨 번호 가져오기
export async function fetchLottoNumbers(drawNo: number): Promise<number[]> {
  const res = await fetch(`/api/lotto/${drawNo}`);
  const data = await res.json();

  const numbers = [
    data.drwtNo1,
    data.drwtNo2,
    data.drwtNo3,
    data.drwtNo4,
    data.drwtNo5,
    data.drwtNo6,
  ];

  return numbers;
}

// 지난 24주간 자주 나온 번호 필터링
export async function getFrequentNumbers(
  lastDrawNo: number
): Promise<number[]> {
  const frequencyMap: Record<number, number> = {};

  for (let i = lastDrawNo; i > lastDrawNo - 24; i--) {
    const res = await fetch(`/api/lotto/${i}`);
    const data = await res.json();

    const numbers = [
      data.drwtNo1,
      data.drwtNo2,
      data.drwtNo3,
      data.drwtNo4,
      data.drwtNo5,
      data.drwtNo6,
    ];

    for (const num of numbers) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  }

  return Object.entries(frequencyMap)
    .filter(([_, count]) => count >= 3)
    .map(([num]) => Number(num));
}
