import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { drawNo: string } }
) {
  const { drawNo } = params;

  if (!drawNo || isNaN(Number(drawNo))) {
    return NextResponse.json({ error: "유효하지 않은 회차" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drawNo}`,
      {
        // 외부 요청은 Next.js 서버에서 이루어지므로 CORS 무관
        next: {
          revalidate: 60 * 60, // 1시간 캐싱
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "외부 API 오류" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("/api/lotto", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
