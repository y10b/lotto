type LottoSet = number[];

function getRandomFromPool(pool: number[], count: number) {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function generateRecommendedNumbers(
  lastWeek: LottoSet,
  frequentNumbers: number[]
): LottoSet[] {
  const sets: LottoSet[] = [];

  for (let i = 0; i < 5; i++) {
    const pickFromLastWeek = lastWeek[i]; // 지난주 번호 하나
    const others = getRandomFromPool(
      frequentNumbers.filter((n) => n !== pickFromLastWeek),
      5
    );
    sets.push([...others, pickFromLastWeek].sort((a, b) => a - b));
  }

  return sets;
}
