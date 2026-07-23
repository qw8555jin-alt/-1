import "./globals.css";

export const metadata = {
  title: "샤오홍슈 체험단 마케팅 | 중국 자본 쓸어모을 대표님 구합니다",
  description: "무비자 입국 특수! 식당, 카페, 뷰티, 피부과, 성형외과 등 K-소비를 찾는 중국인 관광객 대상 샤오홍슈 체험단 마케팅을 지금 바로 시작하세요.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
