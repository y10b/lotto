import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://www.dhlottery.co.kr/gameResult.do?method=byWin"
  );
  const html = await res.text();

  const match = html.match(/<strong>(\d+)(?:회|ȸ)<\/strong>/);
  if (!match) {
    return NextResponse.json(
      { error: "최신 회차를 찾을 수 없습니다" },
      { status: 500 }
    );
  }

  const latest = parseInt(match[1], 10);
  return NextResponse.json({ latest });
}
