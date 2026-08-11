import Link from "next/link";
import { PROVINCES, REGIONS, TOTAL_FIGURES, TOTAL_PROVINCES } from "@/data";

export default function Home() {
  return (
    <>
      <header className="wrap topbar">
        <span className="brand">中国伟人图鉴</span>
        <span>GREATS OF CHINA</span>
      </header>

      <main>
        <section className="wrap hero">
          <div className="seal-xl">伟</div>
          <h1>
            中国伟人图鉴
            <span className="en">GREATS OF CHINA</span>
          </h1>
          <p className="sub">
            三十四省，三千年底蕴——每个省区最值得记住的人物：
            帝王将相、文人墨客、实业家、科学家、当代巨匠。
          </p>
          <div className="stats">
            <div>
              <b>{TOTAL_PROVINCES}</b>
              <span>省区</span>
            </div>
            <div>
              <b>{TOTAL_FIGURES}</b>
              <span>伟人</span>
            </div>
            <div>
              <b>八</b>
              <span>大区</span>
            </div>
          </div>
        </section>

        {REGIONS.map((region) => {
          const list = PROVINCES.filter((p) => p.region === region);
          return (
            <section className="wrap region" key={region}>
              <div className="region-head">
                <h2>{region}</h2>
                <span className="count">{list.length} 省区</span>
              </div>
              <div className="pgrid">
                {list.map((p) => (
                  <Link href={`/provinces/${p.slug}`} className="pcard" key={p.slug}>
                    <div className="row">
                      <span className="seal">{p.short}</span>
                      <h3>{p.name}</h3>
                    </div>
                    <p className="tagline">{p.tagline}</p>
                    <div className="foot">
                      <span>
                        {p.figures.length} 位 · <em>查看</em>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <footer>
        <div className="wrap row">
          <span>中国伟人图鉴 · Greats of China</span>
          <Link href="https://psyverse.fun">Psyverse Portfolio</Link>
          <span>By Gewenbo</span>
        </div>
      </footer>
    </>
  );
}
