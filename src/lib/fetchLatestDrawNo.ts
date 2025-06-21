export async function getLatestDrawNo(): Promise<number> {
  const res = await fetch("/api/latest");
  const data = await res.json();

  if (!res.ok) throw new Error("최신 회차를 가져오지 못했습니다");
  return data.latest;
}
