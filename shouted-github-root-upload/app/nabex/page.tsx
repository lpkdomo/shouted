import type { Metadata } from "next";
import { headers } from "next/headers";
import { NabexContactBand, NabexFooter, NabexHeader } from "../site-components";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  const protocol = headerList.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/nabex-logo.png`;
  const title = "NABEX｜福島商店 IT部門";
  const description = "NABEXは、現場に寄り添うデジタルの力で、ビジネスの次の一歩をつくる福島商店のIT部門です。";
  return { title, description, openGraph: { title, description, images: [image] }, twitter: { card: "summary_large_image", title, description, images: [image] } };
}

export default function NabexPage() {
  return (
    <main className="nabex-home">
      <NabexHeader />
      <section className="nabex-hero">
        <div className="nabex-grid" aria-hidden="true" />
        <div className="nabex-giant" aria-hidden="true">BUILD WHAT&apos;S NEXT.</div>
        <div className="nabex-hero-copy"><p className="nabex-kicker">TECHNOLOGY FOR THE NEXT MOVE.</p><h1>現場を知る。<br /><em>未来を実装する。</em></h1><p>NABEXは、テクノロジーを難しくしない。<br />本当に使えるデジタルで、事業の前進を支えます。</p><div className="nabex-actions"><a href="#solutions">できることを見る</a><span>SCROLL TO EXPLORE ↓</span></div></div>
        <img className="nabex-hero-art" src="/nabex-hero-art.png" alt="スマートフォンとWeb画面でアプリ開発・サイト制作を表現したイラスト" />
        <aside className="tech-panel product-launcher" aria-label="NABEXの主要サービス"><p>SELECT A SERVICE</p><a href="/nabex/apps"><small>01 / APP</small><strong>アプリ開発</strong><span>企画から改善まで ↗</span></a><a href="/nabex/web"><small>02 / WEB</small><strong>Webサイト制作</strong><span>伝わる設計と表現 ↗</span></a><div><i/> NABEX SYSTEM ONLINE</div></aside>
      </section>
      <section className="nabex-lab"><div className="lab-title"><p>NABEX CREATIVE LAB</p><h2>つくる前に考える。<br/><span>つくった後も育てる。</span></h2></div><div className="lab-orbit" aria-hidden="true"><div className="orbit orbit-one"><b>APP</b></div><div className="orbit orbit-two"><b>WEB</b></div><div className="orbit-core">N</div><span className="signal s1"/><span className="signal s2"/><span className="signal s3"/></div><div className="lab-copy"><p>アプリもWebサイトも、目的は「つくること」ではありません。使う人に届き、事業を前に進めること。</p><div><a href="/nabex/apps">APP DEVELOPMENT <span>→</span></a><a href="/nabex/web">WEB CREATION <span>→</span></a></div></div></section>
      <section className="nabex-manifesto" id="vision"><p>THE VISION</p><h2>ITを、<br /><span>事業の推進力へ。</span></h2><div><p>新しい技術を導入すること自体が、ゴールではありません。</p><p>現場の声を起点に、分かりやすく、使いやすく、成果につながる仕組みをつくる。それがNABEXの考えるITです。</p></div></section>
      <section className="solutions" id="solutions"><div className="nabex-section-title"><p>WHAT WE DO</p><h2>アイデアを、<br />動くプロダクトへ。</h2></div><div className="solution-list"><a href="/nabex/apps"><article><b>01</b><div><small>APP DEVELOPMENT</small><h3>アプリ開発</h3><p>業務アプリから新規サービスまで、使う人を起点に企画・設計・開発します。</p></div><span>↗</span></article></a><a href="/nabex/web"><article><b>02</b><div><small>WEB CREATION</small><h3>Webサイト制作</h3><p>会社やサービスの価値がきちんと伝わる、成果につながるWebサイトを設計します。</p></div><span>↗</span></article></a></div></section>
      <section className="nabex-showcase" aria-label="NABEXのデジタル支援イメージ">
        <div className="showcase-copy"><p>DESIGN × TECHNOLOGY</p><h2>見える。<br />つながる。<br /><span>前に進める。</span></h2><p>情報を整理し、誰にでも分かりやすい形へ。現場と経営をつなぐデジタル体験をデザインします。</p></div>
        <div className="showcase-ui" aria-hidden="true"><div className="ui-top"><i /><i /><i /><b>NABEX / OPERATIONS</b></div><div className="ui-stats"><span><small>PROGRESS</small><strong>84%</strong></span><span><small>EFFICIENCY</small><strong>+32</strong></span></div><div className="ui-chart"><em style={{height:"40%"}}/><em style={{height:"56%"}}/><em style={{height:"48%"}}/><em style={{height:"72%"}}/><em style={{height:"84%"}}/><em style={{height:"94%"}}/></div><div className="ui-status"><i/> SYSTEMS RUNNING <b>ALL GREEN</b></div></div>
      </section>
      <div className="nabex-marquee" aria-hidden="true"><div>THINK&nbsp; / &nbsp;DESIGN&nbsp; / &nbsp;BUILD&nbsp; / &nbsp;GROW&nbsp; / &nbsp;THINK&nbsp; / &nbsp;DESIGN&nbsp; / &nbsp;BUILD&nbsp; / &nbsp;GROW&nbsp; / &nbsp;</div></div>
      <section className="nabex-process"><div><p>HOW WE WORK</p><h2>相談から改善まで、<br /><span>迷わせない。</span></h2></div><ol><li><b>01</b><h3>話す</h3><p>課題がまとまっていなくても大丈夫。いま困っていることから伺います。</p></li><li><b>02</b><h3>整える</h3><p>必要なものと、今は必要ないものを整理し、分かりやすくご提案します。</p></li><li><b>03</b><h3>つくる</h3><p>現場で本当に使えることを大切に、小さく確実に形にします。</p></li><li><b>04</b><h3>育てる</h3><p>導入後も状況を確認しながら、より良い仕組みへ改善を続けます。</p></li></ol></section>
      <section className="nabex-about" id="about"><div><p>ABOUT NABEX</p><h2>現場発想の<br />ITパートナー。</h2></div><dl><div><dt>名称</dt><dd>NABEX（ナベックス）</dd></div><div><dt>運営</dt><dd>福島商店 IT部門</dd></div><div><dt>代表</dt><dd>福嶌 健一</dd></div><div><dt>領域</dt><dd>IT・デジタル支援</dd></div></dl></section>
      <section className="nabex-faq"><div><p>FAQ</p><h2>よくあるご相談。</h2></div><div className="faq-list"><details><summary>何を頼めばよいか決まっていなくても相談できますか？<span>＋</span></summary><p>はい。現在のお困りごとを伺い、必要な方法から一緒に整理します。</p></details><details><summary>小さな業務改善でも相談できますか？<span>＋</span></summary><p>もちろんです。無理のない範囲から始め、効果を見ながら次の改善を考えます。</p></details><details><summary>Webサイト制作後の相談もできますか？<span>＋</span></summary><p>公開後の更新や改善も含め、継続して相談できるパートナーを目指しています。</p></details></div></section>
      <NabexContactBand />
      <NabexFooter />
    </main>
  );
}
