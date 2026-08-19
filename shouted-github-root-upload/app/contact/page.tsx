import type { Metadata } from "next";
import { PageHero, TransportFooter, TransportHeader } from "../site-components";

const title="お問い合わせ｜福島商店"; const description="福島商店への運送に関するご相談・お問い合わせはこちら。";
export const metadata:Metadata={title,description,openGraph:{title,description,images:[]},twitter:{title,description,images:[]}};
export default function ContactPage(){return <main className="transport-home subpage"><TransportHeader/><PageHero eyebrow="CONTACT" title="貨物輸送の条件を、お聞かせください。" lead="運行のご相談やお見積もりについて、お電話で承ります。"/><section className="contact-page"><div className="contact-lead"><p>TRANSPORT INQUIRY</p><h2>輸送・運行に関するお問い合わせ</h2><p>積荷の種類・発着地・運行日などがお決まりでしたら、お電話の際にお聞かせください。条件を確認しながらご相談いただけます。</p></div><div className="phone-cards"><a href="tel:0859543496"><small>TELEPHONE</small><strong>0859-54-3496</strong><span>輸送相談はこちら →</span></a><a href="tel:09026104884"><small>MOBILE</small><strong>090-2610-4884</strong><span>輸送相談はこちら →</span></a></div><div className="contact-check"><h3>お伝えいただくとスムーズな輸送条件</h3><ul><li>会社名・ご担当者名</li><li>積荷の種類・重量・荷姿</li><li>発地と着地</li><li>ご希望の運行日</li><li>積込・荷卸しの条件</li></ul><p>受付時間については、お電話の際にご確認ください。</p></div></section><TransportFooter/></main>}
