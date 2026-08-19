import type { Metadata } from "next";
import { PageHero, TransportContactBand, TransportFooter, TransportHeader } from "../site-components";

const title="安全への姿勢｜福島商店"; const description="福島商店が貨物輸送で大切にしている安全確認と責任ある運行への姿勢をご紹介します。";
export const metadata:Metadata={title,description,openGraph:{title,description,images:[]},twitter:{title,description,images:[]}};

export default function SafetyPage(){return <main className="transport-home subpage">
  <TransportHeader/>
  <PageHero eyebrow="SAFETY POLICY" title="安全は、すべての運行の起点。" lead="確認を重ね、無理のない運行を考え、責任を持って完了まで向き合います。"/>
  <section className="safety-illustration-panel"><img src="/fukushima-safety-illustration.png" alt="担当者とドライバーが運行内容を確認する安全輸送のイラスト"/><div><p>CHECK &amp; COMMUNICATE</p><h2>確認と連携を、<br/>一つひとつ丁寧に。</h2><span>運行前の情報整理から完了まで、責任ある行動を積み重ねます。</span></div></section>
  <section className="safety-statement"><p>OUR STANDARD</p><h2>当たり前を、<br/>確実に積み重ねる。</h2><p>貨物輸送において、安全は特別な取り組みではなく、すべての判断の基準です。積荷や運行条件を確認し、責任ある行動を一つひとつ積み重ねます。</p></section>
  <section className="safety-points"><article><span>CHECK 01</span><h3>運行前の確認</h3><p>積荷、発着地、日時、積込・荷卸し条件を確認し、運行に必要な情報を整理します。</p></article><article><span>CHECK 02</span><h3>無理のない運行</h3><p>安全を最優先に考え、状況に応じた判断と丁寧な連絡を大切にします。</p></article><article><span>CHECK 03</span><h3>完了までの責任</h3><p>運行の始まりから完了まで、一貫して責任ある対応を心がけます。</p></article></section>
  <section className="safety-quote"><p>SAFE TRANSPORT, STEADY TRUST.</p><h2>一度の運行を、<br/>次の信頼につなげる。</h2></section>
  <TransportContactBand/><TransportFooter/>
</main>}
