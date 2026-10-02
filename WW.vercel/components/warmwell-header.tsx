'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { business, navItems, whatsappNumber } from '@/lib/warmwell-data'
import { MotionToggle } from '@/components/motion-toggle'

export function WarmwellHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="#top" className="brand" aria-label="Warmwell Kachliarstvo domov"><Image src="/warmwell-logo.svg" alt="Warmwell Kachliarstvo" width={108} height={72} priority /></Link>
      <nav className="desktop-nav" aria-label="Hlavná navigácia">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <div className="header-actions"><MotionToggle /><a className="header-phone" href={`tel:${business.phone.replaceAll(' ', '')}`}><Phone aria-hidden="true" /> <span>{business.phone}</span></a><a className="button button-small button-copper" href={whatsappNumber} target="_blank" rel="noreferrer">Konzultácia</a></div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Zavrieť menu' : 'Otvoriť menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobilná navigácia"><MotionToggle />{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a href={whatsappNumber} target="_blank" rel="noreferrer" className="button button-copper">Napísať cez WhatsApp</a></nav>}
  </header>
}
