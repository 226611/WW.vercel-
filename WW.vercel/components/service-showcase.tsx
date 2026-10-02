import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export type ShowcaseProduct = { title: string; description: string; images: string[] }
export type ServiceShowcase = { id: string; title: string; intro: string; products: ShowcaseProduct[] }

export function ServiceShowcaseSections({ categories }: { categories: ServiceShowcase[] }) {
  return <div className="service-showcase-sections" aria-label="Prehľad služieb a ukážok realizácií">
    {categories.map((category, categoryIndex) => <section className="service-showcase" id={`sluzba-${category.id}`} key={category.id}>
      <div className="container">
        <details className="service-showcase-details">
          <summary className="service-showcase-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> 0{categoryIndex + 1} / Služba</p><h2>{category.title}</h2></div>
            <span className="service-showcase-summary"><span>{category.products.length} ukážok realizácií</span><span className="service-showcase-toggle" aria-hidden="true">+</span></span>
          </summary>
          <p className="service-showcase-intro">{category.intro}</p>
          <div className="service-product-grid">
          {category.products.map((product, index) => <article className="service-product-card" key={product.title}>
            <div className="service-product-media"><Image src={product.images[0]} alt={`${product.title} — ${category.title}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" /><span>0{index + 1}</span><div className="service-product-thumbs">{product.images.slice(1).map((image) => <Image key={image} src={image} alt="" width={48} height={48} />)}</div></div>
            <div className="service-product-copy"><h3>{product.title}</h3><p>{product.description}</p><a href="#kontakt" aria-label={`Dopyt k produktu ${product.title}`}>Dopyt k riešeniu <ArrowUpRight /></a></div>
          </article>)}
          </div>
        </details>
      </div>
    </section>)}
  </div>
}
