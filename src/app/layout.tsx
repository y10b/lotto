import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "로또 번호 추천기",
  description: "일본 명장이 추천한 알고리즘을 적용하여 로또 번호를 추천합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jko">
      <body>{children}</body>
    </html>
  );
}
