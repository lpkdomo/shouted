import type { Metadata } from "next";
import { PageHero, TransportContactBand, TransportFooter, TransportHeader } from "../site-components";

const title = "事業案内｜福島商店";
const description = "福島商店の貨物輸送とご相談から運行完了までの流れをご案内します。";
export const metadata: Metadata = { title, description, openGraph:{title,description,images:[]}, twitter:{title,description,images:[]} };

export default function ServicePage(){return <main className="transport-home subpage">
  <TransportHeader/>
  <PageHero eyebrow="SERVICES" title="運ぶことに、誠実である。" lead="事業を支える貨物に向き合い、安全で確実な運行を積み重ねます。"/>
  <section className="service-illustration-panel"><div><p>FREIGHT NETWORK</p><h2>拠点と拠点を、<br/>責任を持ってつなぐ。</h2></div><img src="/fukushima-route-illustration.png" alt="企業間の貨物輸送を表したトラックと物流拠点のイラスト"/></section>
  <section className="detail-intro"><p>OUR APPROACH</p><h2>輸送条件に合わせて、<br/>運行を組み立てます。</h2><p>積荷の種類や荷姿、発着地、運行日、積込・荷卸し条件。必要事項を丁寧に伺い、輸送の進め方をご案内します。</p></section>
  <section className="detail-cards"><article><b>01</b><h3>安全を最優先に</h3><p>事業を支える貨物を扱う責任を持ち、運行前の確認と丁寧な取り扱いを徹底します。</p></article><article><b>02</b><h3>迅速で柔軟に</h3><p>運行日や発着条件などを確認し、ご相談内容にできる限り柔軟に対応します。</p></article><article><b>03</b><h3>分かりやすく誠実に</h3><p>ご相談から運行完了まで、安心してお任せいただける連絡と対応を大切にします。</p></article></section>
  <section className="flow-section"><p>TRANSPORT FLOW</p><h2>ご相談から運行完了まで。</h2><ol><li><b>01</b><div><h3>輸送相談</h3><p>積荷、発着地、運行日、必要な条件をお聞かせください。</p></div></li><li><b>02</b><div><h3>条件確認</h3><p>積込・荷卸し条件などを確認し、運行についてご案内します。</p></div></li><li><b>03</b><div><h3>運行</h3><p>安全と確実を最優先に、責任を持って貨物を輸送します。</p></div></li><li><b>04</b><div><h3>運行完了</h3><p>最後まで責任を持って対応し、次のご相談にもつなげます。</p></div></li></ol></section>
  <TransportContactBand/><TransportFooter/>
</main>}
