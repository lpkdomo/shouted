import { TransportContactBand, TransportFooter, TransportHeader } from "./site-components";

export default function Home() {
  return (
    <main className="transport-home">
      <TransportHeader />
      <section className="hero">
        <div className="transport-giant" aria-hidden="true">FUKUSHIMA TRANSPORT</div>
        <div className="hero-copy">
          <p className="eyebrow">FUKUSHIMA SHOTEN — TRANSPORT &amp; LOGISTICS</p>
          <h1>運ぶ、その先の<br /><span>信頼まで。</span></h1>
          <p className="lead">企業・事業者の貨物輸送に、安全と確実を。責任ある運行でビジネスの流れを支えます。</p>
          <div className="hero-actions"><a className="primary-button" href="#contact">輸送のご相談</a><a className="text-link" href="#service">私たちの強み <span>→</span></a></div>
        </div>
        <div className="hero-photo-wrap">
          <img src="/transport-hero.png" alt="青空のもとを走る青い輸送トラック" className="hero-photo" />
          <div className="photo-index">FUKUSHIMA SHOTEN<br />TRANSPORT DIVISION</div>
          <div className="route-card"><strong>安全・迅速・確実</strong><small>積荷と運行に、最後まで責任を</small></div>
        </div>
        <a className="transport-side-contact" href="/contact"><small>TRANSPORT CONSULTATION</small><strong>輸送のご相談</strong><span>→</span></a>
      </section>
      <div className="transport-marquee" aria-hidden="true"><div>BUSINESS FREIGHT&nbsp; — &nbsp;RESPONSIBLE OPERATION&nbsp; — &nbsp;TRUSTED PARTNER&nbsp; — &nbsp;BUSINESS FREIGHT&nbsp; — &nbsp;RESPONSIBLE OPERATION&nbsp; — &nbsp;TRUSTED PARTNER&nbsp; — &nbsp;</div></div>
      <section className="trust-strip" aria-label="福島商店の方針">
        <p><strong>01</strong><span>安全を最優先に</span></p><p><strong>02</strong><span>迅速で柔軟な対応</span></p><p><strong>03</strong><span>丁寧で確実な輸送</span></p>
      </section>
      <section className="transport-illustration-story">
        <div className="illustration-copy"><p className="eyebrow">CONNECTING BUSINESS</p><h2>企業と企業を、<br />確かな運行でつなぐ。</h2><p>工場から倉庫へ、拠点から次の拠点へ。福島商店は、事業の流れを支える貨物輸送に責任を持って向き合います。</p><a href="/service">事業案内を見る <span>→</span></a></div>
        <div className="illustration-stage"><img src="/fukushima-route-illustration.png" alt="工場と倉庫をトラックでつなぐ企業向け貨物輸送のイラスト" /></div>
      </section>
      <section className="needs-section">
        <div className="needs-intro"><p className="eyebrow">HOW CAN WE HELP?</p><h2>貨物輸送の相談を、<br />確かな運行へ。</h2><p>積荷、発着地、運行日、必要な条件を伺い、事業に合った輸送の進め方を一緒に整理します。</p></div>
        <div className="needs-list"><article><span>01</span><h3>まとまった貨物を<br />輸送したい</h3><p>積荷や運行条件を確認し、安全を最優先に対応します。</p></article><article><span>02</span><h3>定期的な運行を<br />相談したい</h3><p>事業計画やスケジュールを伺い、継続を見据えてご相談に応じます。</p></article><article><span>03</span><h3>発着地や条件から<br />相談したい</h3><p>積込・荷卸し条件を含め、必要事項を分かりやすく整理します。</p></article><article className="needs-accent"><span>04</span><h3>信頼できる運送事業者を<br />探している</h3><p>一つひとつの運行に誠実に向き合い、信頼を積み重ねます。</p></article></div>
      </section>
      <section className="section transport-section" id="service">
        <div className="section-heading"><p className="eyebrow">OUR SERVICE</p><h2>物流を、もっと<br />まっすぐに。</h2></div>
        <div className="service-grid">
          <article><span>01</span><h3>条件に合わせた貨物輸送</h3><p>積荷・発着地・運行日などの条件を丁寧に伺い、輸送の進め方をご案内します。</p></article>
          <article><span>02</span><h3>責任ある運行対応</h3><p>ご相談から運行完了まで、安全確認と迅速な連絡を大切にします。</p></article>
          <article><span>03</span><h3>企業間の信頼を支える</h3><p>事業を支える貨物を扱う責任を胸に、誠実で丁寧な対応を徹底します。</p></article>
        </div>
      </section>
      <section className="section company-section" id="company">
        <div><p className="eyebrow light">COMPANY</p><h2>一つひとつの運行に、<br />責任と誠実さを。</h2><p className="company-message">福島商店は、貨物輸送を通じて企業と事業をつなぎます。変わり続ける時代の中でも、安全と信頼を変わらない基準に。頼れる輸送パートナーを目指します。</p></div>
        <dl><div><dt>屋号</dt><dd>福島商店</dd></div><div><dt>代表</dt><dd>福嶌 健一</dd></div><div><dt>事業内容</dt><dd>運送業</dd></div><div><dt>IT部門</dt><dd><a href="/nabex">NABEX ↗</a></dd></div></dl>
      </section>
      <section className="message-section">
        <div className="message-visual">
          <img src="/transport-hero.png" alt="輸送を担う福島商店のトラック" />
          <div className="message-monogram" aria-hidden="true">F</div>
        </div>
        <div className="message-copy">
          <p className="eyebrow">MESSAGE</p><span className="message-label">代表挨拶</span>
          <h2>信頼を積み、<br />未来へ運ぶ。</h2>
          <p>福島商店の仕事は、貨物を目的地まで運ぶだけではありません。一つひとつの運行が、お客様の事業や次の工程を支えていると考えています。</p>
          <p>だからこそ、安全・確実を何よりも大切にし、誠実な対応を積み重ねてまいります。運送の力と、新たに取り組むITの力で、皆様の事業により深く貢献できる存在を目指してまいります。</p>
          <div className="signature"><small>福島商店　代表</small><strong>福嶌 健一</strong><i>Kenichi Fukushima</i></div>
        </div>
      </section>
      <TransportContactBand />
      <TransportFooter />
    </main>
  );
}
