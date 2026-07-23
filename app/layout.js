import "./globals.css";

export const metadata = {
  title: "샤오홍슈 체험단 마케팅 | 중국 자본 쓸어모을 대표님 구합니다",
  description: "무비자 입국 특수! 식당, 카페, 뷰티, 피부과, 성형외과 등 K-소비를 찾는 중국인 관광객 대상 샤오홍슈 체험단 마케팅을 지금 바로 시작하세요.",
};

import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1518735353070736');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
