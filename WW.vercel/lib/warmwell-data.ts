export const business = {
  name: 'Warmwell Kachliarstvo',
  owner: 'Marián Pitoňák',
  phone: '+421 918 091 181',
  whatsapp: '421918091181',
  email: 'm.pitonak18@gmail.com',
  address: 'Kostolná 165/10, 053 05 Granč-Petrovce',
  google: 'https://maps.app.goo.gl/vXs2PpHM4h22qqmv6',
  facebook: 'https://www.facebook.com/profile.php?id=61557011225169',
  instagram: 'https://www.instagram.com/warmwellkachliarstvo/',
}

export const services = [
  { title: 'Stavba kachľových pecí', text: 'Individuálny návrh, certifikované materiály a poctivá realizácia od prvého náčrtu po odovzdanie.', image: '/warmwell-realization.jpg', number: '01', price: 'Orientačne od 3 500 €' },
  { title: 'Krby a vykurovanie', text: 'Krby, sporáky, prenosné aj záhradné riešenia prispôsobené dispozícii a spôsobu bývania.', image: '/warmwell-stove-fireplace.png', number: '02', price: 'Orientačne od 2 200 €' },
  { title: 'Komíny a vložkovanie', text: 'Frézovanie, vložkovanie, nerezové komíny a kominárske služby s dôrazom na bezpečnosť.', image: '/warmwell-chimney.png', number: '03', price: 'Orientačne od 1 200 €' },
  { title: '3D návrhy a vizualizácie', text: 'Uvidíte svoje budúce teplo ešte pred začiatkom stavby. Pri realizácii návrh zdarma.', image: '/warmwell-3d-design.jpg', number: '04', price: 'Pri realizácii ZDARMA' },
]

export const reviews = [
  { name: 'Jana Tomková', text: 'Absolútna spokojnosť. Dva dni poctivej práce. Je asi jednoduchšie stavať nové ako opraviť staré. Ale chceli sme dať starým kachliam a sporáku šancu, aby sme sa z nich mohli tešiť. A stálo to za to. Kachliar odviedol úžasnú prácu.', location: 'Google · pred rokom' },
  { name: 'Silvia Kráľová', text: 'Maximálna spokojnosť. Bol to druhý kachliar v našom dome a sme nadmieru spokojní. Odporúčame!', location: 'Google · pred rokom' },
  { name: 'Ružena Hroncová', text: 'Ďakujeme za skvelú prácu a krásne kachle. S výsledkom sme veľmi spokojní.', location: 'Google · pred rokom' },
]

export const areas = ['Spiš', 'Gelnica', 'Levoča', 'Poprad', 'Smižany', 'Jasov', 'Spišské Podhradie', 'Prešovský a Košický kraj']

export const navItems = [
  ['O mne', 'o-nas'], ['Služby', 'sluzby'], ['Realizácie', 'realizacie'], ['Časté otázky', 'otazky'], ['Kontakt', 'kontakt'],
]

export const placeholder = '/placeholder.jpg'

export function whatsappUrl(fields: { name: string; phone: string; service: string; location: string; description: string }) {
  const message = `Dobrý deň, mám záujem o konzultáciu.%0A%0AMeno: ${fields.name}%0ATelefón: ${fields.phone}%0ASlužba: ${fields.service}%0ALokalita: ${fields.location}%0APopis: ${fields.description}`
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
}

export const whatsappNumber = `https://wa.me/${business.whatsapp}`
export const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=Kostolná+165%2F10%2C+Granč-Petrovce'
