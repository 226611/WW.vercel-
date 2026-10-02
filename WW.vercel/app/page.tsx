import { WarmwellHeader } from '@/components/warmwell-header'
import { WarmwellHero } from '@/components/warmwell-hero'
import { AboutSection, ReviewsSection } from '@/components/warmwell-trust'
import { AreaSection, CredibilitySection, GallerySection, IntroSection, ProcessSection, ServicesSection, ServiceShowcasesSection } from '@/components/warmwell-sections'
import { ContactSection, FinalCta } from '@/components/warmwell-contact'
import { FAQSection, WarmwellFooter } from '@/components/warmwell-footer'
import { Warmwell3DPreview } from '@/components/warmwell-3d-preview'
import { WarmwellPortfolio } from '@/components/warmwell-portfolio'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { PageLoader } from '@/components/page-loader'

export default function Page() { return <><PageLoader /><a className="skip-link" href="#obsah">Preskočiť na obsah</a><WarmwellHeader /><main id="obsah"><WarmwellHero /><AboutSection /><IntroSection /><ServicesSection /><ServiceShowcasesSection /><Warmwell3DPreview /><CredibilitySection /><WarmwellPortfolio /><ProcessSection /><ReviewsSection /><AreaSection /><FAQSection /><ContactSection /><FinalCta /></main><WarmwellFooter /><MobileActionBar /></> }
