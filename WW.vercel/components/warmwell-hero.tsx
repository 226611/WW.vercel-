import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { business, whatsappNumber } from '@/lib/warmwell-data'

export function WarmwellHero() {
  return <section className="hero" id="top">
    <div className="hero-glow" />
    <div className="container hero-grid">
      <div className="hero-copy reveal">
        <Image className="hero-logo" src="/warmwell-original-logo.png" alt="Warmwell Kachliarstvo — Marián Pitoňák" width={360} height={360} priority />
        <p className="eyebrow"><span className="eyebrow-line" /> Remeslo, ktoré hreje po generácie</p>
        <h1>Kachle s dušou.<br /><em>Teplo s príbehom.</em></h1>
        <p className="hero-lead">Tvoríme kachľové pece na mieru, ktoré spájajú krásu tradičného remesla s pohodlím dnešného domova.</p>
        <div className="hero-actions"><a className="button button-copper" href="#kontakt">Nezáväzná konzultácia <ArrowUpRight aria-hidden="true" /></a><a className="text-link" href={whatsappNumber} target="_blank" rel="noreferrer">Napísať cez WhatsApp <span>↗</span></a></div>
        <ul className="hero-proof"><li>⭐ 5.0 na Google <small>(Overené recenzie)</small></li><li>📜 Certifikovaný majster kachliar</li><li>🛡️ Záruka až do 5 rokov na dielo</li><li>🔥 100+ úspešných realizácií</li></ul>
      </div>
      <div className="hero-visual reveal reveal-delay"><div className="hero-loop-frame"><div className="hero-loop-layer hero-loop-layer-a" /><div className="hero-loop-layer hero-loop-layer-b" /><div className="hero-loop-overlay" /><span className="hero-loop-label">Hlavný obraz realizácie</span></div><div className="hero-badge"><strong>12+</strong><span>rokov<br />remesla</span></div></div>
    </div>
    <a href="#uvod" className="scroll-cue" aria-label="Prejsť na úvod"><span>Objavte Warmwell</span><ArrowDown /></a>
  </section>
}
