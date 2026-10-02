'use client'

export function Warmwell3DPreview() {
  return (
    <section className="section preview-3d-section" id="navrh" aria-labelledby="preview-3d-title">
      <div className="container preview-3d-container">
        <div className="preview-3d-heading reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> Interaktívny návrh</p>
        </div>

        <div className="preview-3d-stage" aria-label="Porovnanie 3D návrhu a hotovej realizácie">
          <figure className="preview-3d-card preview-3d-card-before">
            <div className="preview-3d-image-wrap">
              <img src="/warmwell-3d-design.jpg" alt="3D návrh kachľovej pece so sporákom a krbom" />
              <span className="preview-3d-label">01 · 3D návrh</span>
            </div>
            <figcaption>Koncept pred realizáciou</figcaption>
          </figure>
          <div className="preview-3d-divider" aria-hidden="true"><span /></div>
          <figure className="preview-3d-card preview-3d-card-after">
            <div className="preview-3d-image-wrap">
              <img src="/warmwell-realization.jpg" alt="Hotová realizácia krémovej kachľovej pece" />
              <span className="preview-3d-label">02 · Hotová realizácia</span>
            </div>
            <figcaption>Výsledok v skutočnom priestore</figcaption>
          </figure>
        </div>

        <p className="preview-3d-note">Konceptový 3D náhľad · finálny model podľa vášho priestoru</p>
      </div>
    </section>
  )
}
