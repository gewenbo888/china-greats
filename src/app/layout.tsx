import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://china-greats.psyverse.fun"),
  title: "中国伟人图鉴 | Greats of China",
  description:
    "三十四省，三千年底蕴——每个省区最值得记住的人物：帝王将相、文人墨客、实业家、科学家、当代巨匠。Greats of China: the people each province remembers, from emperors and poets to scientists and founders.",
  keywords: [
    "中国伟人",
    "省份名人",
    "中国历史人物",
    "各省伟人",
    "Greats of China",
    "province heroes",
    "historical figures by province",
    "中国名人",
    "伟人图鉴",
    "江苏伟人",
    "山西伟人",
    "山东伟人",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    title: "中国伟人图鉴 | Greats of China",
    description:
      "三十四省，三千年底蕴——每个省区最值得记住的人物。",
    url: "https://china-greats.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "中国伟人图鉴 | Greats of China",
    description: "三十四省，三千年底蕴——每个省区最值得记住的人物。",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#f5f1e6" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;800;900&family=Ma+Shan+Zheng&family=Noto+Sans+SC:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%23b3272d'/><text x='50%' y='56%' font-size='19' font-family='KaiTi,serif' text-anchor='middle' dominant-baseline='central' fill='%23f5f1e6'>伟</text></svg>"
        />
      </head>
      <body>
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
