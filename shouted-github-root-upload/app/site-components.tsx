export function TransportHeader() {
  return <header className="topbar floating-header transport-header"><a className="transport-brand" href="/"><img src="/fukushima-logo-transparent.png" alt="福島商店" className="brand-logo" /></a><nav aria-label="福島商店 ナビゲーション"><a href="/"><small>HOME</small><span>トップ</span></a><a href="/service"><small>WORKS</small><span>事業案内</span></a><a href="/safety"><small>SAFETY</small><span>安全への姿勢</span></a><a href="/company"><small>COMPANY</small><span>会社案内</span></a><a href="/contact"><small>CONTACT</small><span>輸送のご相談</span></a><a className="nav-pill" href="/nabex"><small>IT DIVISION</small><span>NABEX ↗</span></a></nav></header>;
}

export function TransportFooter() {
  return <footer className="mega-footer"><div className="footer-brand"><img src="/fukushima-logo-transparent.png" alt="福島商店" /><p>運ぶ、その先の信頼まで。</p><small>代表　福嶌 健一</small></div><div><b>SITE MAP</b><a href="/">トップ</a><a href="/service">事業案内</a><a href="/safety">安全への姿勢</a><a href="/company">会社案内</a><a href="/contact">お問い合わせ</a></div><div><b>CONTACT</b><a href="tel:0859543496">TEL 0859-54-3496</a><a href="tel:09026104884">MOBILE 090-2610-4884</a></div><div><b>IT DIVISION</b><a href="/nabex">NABEX</a><a href="/nabex/apps">アプリ開発</a><a href="/nabex/web">Webサイト制作</a></div><p className="footer-copy">© FUKUSHIMA SHOTEN</p></footer>;
}

export function NabexHeader() {
  return <header className="nabex-header floating-header"><a className="back-to-transport" href="/">← 福島商店へ戻る</a><a href="/nabex"><img src="/nabex-logo.png" alt="NABEX" /></a><nav aria-label="NABEX ナビゲーション"><a href="/nabex"><small>TOP</small><span>トップ</span></a><a href="/nabex/apps"><small>APP</small><span>アプリ開発</span></a><a href="/nabex/web"><small>WEB</small><span>サイト制作</span></a><a href="/nabex/process"><small>PROCESS</small><span>制作の流れ</span></a><a href="/nabex/about"><small>ABOUT</small><span>NABEXについて</span></a><a className="nabex-contact-link" href="/nabex/contact"><small>CONTACT</small><span>お問い合わせ ↗</span></a></nav></header>;
}

export function NabexFooter() {
  return <footer className="nabex-mega-footer"><div><img src="/nabex-logo.png" alt="NABEX" /><p>Technology for the next move.</p></div><div><b>SERVICES</b><a href="/nabex/apps">アプリ開発</a><a href="/nabex/web">Webサイト制作</a><a href="/nabex/process">制作の流れ</a></div><div><b>CONTACT</b><a href="tel:07085060410">070-8506-0410</a><a href="mailto:nabex202608@nabex.biz">nabex202608@nabex.biz</a></div><div><b>ABOUT</b><a href="/nabex/about">NABEXについて</a><a href="/">福島商店</a></div><small>© NABEX / FUKUSHIMA SHOTEN</small></footer>;
}

export function PageHero({ eyebrow, title, lead, theme = "transport" }: { eyebrow: string; title: string; lead: string; theme?: "transport" | "nabex" }) {
  return <section className={`page-hero ${theme}`}><div className="page-hero-grid"/><div><p>{eyebrow}</p><h1>{title}</h1><span>{lead}</span></div></section>;
}

export function TransportContactBand() {
  return <section className="universal-contact transport-universal"><p>CONTACT</p><h2>貨物輸送・運行のこと、<br />まずはご相談ください。</h2><div><a href="tel:0859543496"><small>TEL</small><strong>0859-54-3496</strong></a><a href="tel:09026104884"><small>MOBILE</small><strong>090-2610-4884</strong></a><a className="contact-arrow" href="/contact">輸送相談の詳細 →</a></div></section>;
}

export function NabexContactBand() {
  return <section className="universal-contact nabex-universal"><p>LET&apos;S TALK</p><h2>つくりたいものを、<br />一緒に形に。</h2><div><a href="tel:07085060410"><small>PHONE</small><strong>070-8506-0410</strong></a><a href="mailto:nabex202608@nabex.biz"><small>MAIL</small><strong>nabex202608@nabex.biz</strong></a><a className="contact-arrow" href="/nabex/contact">お問い合わせフォーム →</a></div></section>;
}
