'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { business, whatsappNumber } from '@/lib/warmwell-data'

export function MobileActionBar() {
  return <div className="mobile-action-bar" aria-label="Rýchly kontakt">
    <a href={`tel:${business.phone.replaceAll(' ', '')}`}><Phone aria-hidden="true" /><span>Zavolať<small>{business.phone}</small></span></a>
    <a href={whatsappNumber} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span>WhatsApp<small>Napísať správu</small></span></a>
  </div>
}
