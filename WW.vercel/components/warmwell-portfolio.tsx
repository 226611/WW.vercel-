'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useMemo, useState } from 'react'

type Category = 'Všetky' | 'Kachľové pece' | 'Rekonštrukcia a čistenie' | 'Prenosné' | 'Sporáky a krby' | 'Komíny'

type Project = { image: string; title: string; category: Exclude<Category, 'Všetky'>; alt: string; description?: string; moreHref?: string }

const filters: Category[] = ['Všetky', 'Kachľové pece', 'Rekonštrukcia a čistenie', 'Prenosné', 'Sporáky a krby', 'Komíny']

const projects: Project[] = [
  { image: '/warmwell-realization.jpg', title: 'Kláštor Jasov — obnova historických pecí', category: 'Rekonštrukcia a čistenie', alt: 'Historická kachľová pec v Kláštore premonštrátskeho konventu v Jasove', description: 'Oprava a čistenie historických kachľových pecí v Kláštore premonštrátskeho konventu v Jasove.', moreHref: '#projekt-jasov' },
  { image: '/warmwell-stove-fireplace.png', title: 'Sporák s krbom', category: 'Sporáky a krby', alt: 'Sporák s krbom a tehlovými detailmi' },
  { image: '/warmwell-chimney.png', title: 'Nerezový komín', category: 'Komíny', alt: 'Nerezový komín na streche domu' },
  { image: '/warmwell-3d-design.jpg', title: 'Kachľová pec v 3D návrhu', category: 'Kachľové pece', alt: '3D vizualizácia kachľovej pece so sporákom' },
  { image: '/warmwell-stove-fireplace.png', title: 'Obnova sporáka', category: 'Rekonštrukcia a čistenie', alt: 'Obnovený sporák s čiernymi dvierkami' },
  { image: '/portable-stove-white.png', title: 'Biele prenosné kachle', category: 'Prenosné', alt: 'Biele prenosné kachle na nožičkách s dekoratívnymi kachlicami' },
  { image: '/portable-stove-orange.png', title: 'Oranžové prenosné kachle', category: 'Prenosné', alt: 'Oranžové prenosné kachle s čiernymi dvierkami' },
  { image: '/portable-stove-burgundy.png', title: 'Bordové prenosné kachle', category: 'Prenosné', alt: 'Bordové prenosné kachle s oblúkovým ohniskom' },
]

export function WarmwellPortfolio() {
  const [active, setActive] = useState<Category>('Všetky')
  const visibleProjects = useMemo(() => active === 'Všetky' ? projects : projects.filter((project) => project.category === active), [active])

  return <><section className="section portfolio-section" id="realizacie">
    <div className="container">
      <div className="section-heading portfolio-heading">
        <div><p className="eyebrow"><span className="eyebrow-line" /> Vybrané realizácie</p><h2>Práca, ktorá<br /><em>hovorí sama.</em></h2></div>
        <p>Prezrite si ukážky remesla podľa typu realizácie.</p>
      </div>
      <div className="portfolio-filters" role="tablist" aria-label="Filtrovať realizácie">
        {filters.map((filter) => <button key={filter} type="button" role="tab" aria-selected={active === filter} className={active === filter ? 'is-active' : ''} onClick={() => setActive(filter)}>{filter}</button>)}
      </div>
      <div className="portfolio-grid" aria-live="polite">
        {visibleProjects.map((project, index) => <article className="portfolio-card" key={`${project.title}-${index}`}>
          <div className="portfolio-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>{project.category}</span></div>
          <div className="portfolio-card-body"><h3>{project.title}</h3>{project.description && <p className="portfolio-description">{project.description}</p>}{project.moreHref && <a className="portfolio-more-link" href={project.moreHref}>Viac o projekte <ArrowUpRight /></a>}<span className="portfolio-number">0{index + 1}</span></div>
        </article>)}
      </div>
    </div>
  </section>
  <section className="project-detail-section" id="projekt-jasov" aria-labelledby="projekt-jasov-title">
    <div className="container project-detail">
      <div className="project-detail-layout">
        <figure className="project-detail-image"><img src="/klastor-jasov.png" alt="Letecký pohľad na Kláštor premonštrátskeho konventu v Jasove" /><figcaption>Kláštor premonštrátskeho konventu · Jasov</figcaption></figure>
        <div className="project-detail-content">
      <p className="eyebrow"><span className="eyebrow-line" /> Detail realizácie</p>
      <h2 id="projekt-jasov-title">Kláštor premonštrátskeho konventu v Jasove</h2>
      <p className="project-detail-lead">Kachliarska firma Warmwell so sídlom v obci Granč-Petrovce v roku 2026 realizovala opravu a čistenie historických kachľových pecí v budove Kláštora premonštrátskeho konventu v Jasove.</p>
      <div className="project-detail-grid">
        <div>
          <p>Firma Warmwell Kachliarstvo pod vedením majstra Mariána Pitoňáka realizovala v priestoroch historického komplexu Rádu Premonštrátov – Opátstva Jasov špecializované remeselné práce.</p>
          <p>Išlo o precíznu prácu zameranú na záchranu a funkčnosť funkčných umelecko-remeselných prvkov, ktoré dotvárajú autentickú atmosféru a historický interiér jasovského opátstva.</p>
        </div>
        <div className="project-detail-points">
          <h3>Odborné činnosti</h3>
          <article><strong>Oprava a rekonštrukcia kachľových pecí</strong><p>Historické kachľové pece prešli odborným zásahom vrátane opravy poškodených konštrukčných prvkov. Pri obnove sa dbalo na zachovanie pôvodných kachlíc a ich šetrné pretesnenie či znovupostavenie tradičnými metódami.</p></article>
          <article><strong>Dôkladné čistenie a údržba</strong><p>Súčasťou prác bolo komplexné vyčistenie vnútorných ťahových systémov pecí od nánosov sadzí a dechtu. Stav vnútorných rozvodov a bezpečnosť telesa sa kontrolovali modernou inšpekčnou technikou vrátane špeciálnych komínových kamier.</p></article>
        </div>
      </div>
      <p className="project-detail-footer">Odborný realizátor – majster remesla, ktorý podľa pokynov pamiatkového úradu vracia historickým peciam ich funkčnosť a pôvodný vzhľad.</p>
        </div>
      </div>
    </div>
  </section></>
}

export default WarmwellPortfolio
