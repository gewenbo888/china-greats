import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProvince, PROVINCES } from "@/data";

export function generateStaticParams() {
  return PROVINCES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProvince(params.slug);
  if (!p) return {};
  return {
    title: `${p.name}伟人 | 中国伟人图鉴`,
    description: `${p.name}：${p.tagline}——${p.figures.length} 位值得记住的人物（${p.figures
      .slice(0, 5)
      .map((f) => f.name)
      .join("、")}等）。`,
    alternates: { canonical: `/provinces/${p.slug}` },
  };
}

export default function ProvincePage({ params }: { params: { slug: string } }) {
  const p = getProvince(params.slug);
  if (!p) notFound();

  return (
    <>
      <header className="wrap topbar">
        <Link className="brand" href="/">中国伟人图鉴</Link>
        <span>{p.region} · {p.name}</span>
      </header>

      <main className="detail">
        <Link className="back" href="/">← 返回图鉴</Link>

        <section className="detail-hero">
          <div className="seal-xl">{p.short}</div>
          <h1>{p.name}</h1>
          <div className="meta">{p.region} · {p.figures.length} 位伟人</div>
          <p className="tagline">{p.tagline}</p>
        </section>

        <section className="figures">
          {p.figures.map((f) => (
            <div className="figure" key={f.name}>
              <span className="name">{f.name}</span>
              <span className="tag">{f.tag}</span>
              <span className="blurb">{f.blurb}</span>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <div className="wrap row">
          <Link href="/">← 返回图鉴</Link>
          <Link href="https://psyverse.fun">Psyverse Portfolio</Link>
        </div>
      </footer>
    </>
  );
}
