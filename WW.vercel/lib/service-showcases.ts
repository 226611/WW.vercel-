import type { ServiceShowcase } from '@/components/service-showcase'

export const serviceShowcases: ServiceShowcase[] = [
  {
    id: 'kachlove-pece', title: 'Stavba kachľových pecí', intro: 'Päť spôsobov, ako môže tradičná akumulačná pec prirodzene zapadnúť do moderného aj historického interiéru.',
    products: [
      { title: 'Rodinné teplo', description: 'Akumulačná pec s čistou siluetou pre každodenné vykurovanie obývacej časti.', images: ['/warmwell-realization.jpg', '/portable-stove-white.png'] },
      { title: 'Kachľová pec Classic', description: 'Tradičné proporcie a ručne kladené kachlice pre interiér s nadčasovým charakterom.', images: ['/warmwell-realization.jpg', '/portable-stove-burgundy.png'] },
      { title: 'Rohová pec', description: 'Priestorovo úsporné riešenie, ktoré využíva roh miestnosti ako prirodzené centrum domova.', images: ['/warmwell-stove-fireplace.png', '/warmwell-realization.jpg'] },
      { title: 'Pec s lavicou', description: 'Akumulované teplo doplnené o pohodlné miesto na oddych a pomalé večery.', images: ['/warmwell-realization.jpg', '/portable-stove-orange.png'] },
      { title: 'Obnova historickej pece', description: 'Citlivá rekonštrukcia s rešpektom k pôvodným kachliam, remeslu a príbehu stavby.', images: ['/klastor-jasov.png', '/warmwell-realization.jpg'] },
    ],
  },
  {
    id: 'krby-vykurovanie', title: 'Krby a vykurovanie', intro: 'Oheň ako architektonický prvok aj spoľahlivý zdroj tepla. Návrhy pre dom, chalupu aj záhradu.',
    products: [
      { title: 'Moderný krb', description: 'Minimalistické ohnisko s veľkým presklením, ktoré necháva vyniknúť pohyb plameňov.', images: ['/warmwell-stove-fireplace.png', '/portable-stove-white.png'] },
      { title: 'Krbová vložka', description: 'Efektívne vykurovanie s čistým napojením na interiér a premysleným rozvodom tepla.', images: ['/warmwell-stove-fireplace.png', '/warmwell-realization.jpg'] },
      { title: 'Krbová pec', description: 'Kompaktné riešenie spájajúce rýchle teplo, akumuláciu a výrazný materiálový detail.', images: ['/portable-stove-burgundy.png', '/portable-stove-orange.png'] },
      { title: 'Záhradný krb', description: 'Odolné ohnisko pre letné varenie, stretnutia a večery pod otvorenou oblohou.', images: ['/warmwell-stove-fireplace.png', '/portable-stove-orange.png'] },
      { title: 'Sporák na drevo', description: 'Funkčné srdce kuchyne pre varenie, pečenie a príjemné sálavé teplo.', images: ['/portable-stove-white.png', '/warmwell-realization.jpg'] },
    ],
  },
  {
    id: 'kominy-vlozkovanie', title: 'Komíny a vložkovanie', intro: 'Bezpečné odvádzanie spalín začína správnym posúdením. Od kontroly po nové komínové riešenie.',
    products: [
      { title: 'Komínová kontrola', description: 'Vizuálne a technické posúdenie existujúceho komína pred pripojením spotrebiča.', images: ['/warmwell-chimney.png', '/warmwell-realization.jpg'] },
      { title: 'Nerezové vložkovanie', description: 'Odolné vložkovanie pre bezpečnú a dlhodobú prevádzku komínového telesa.', images: ['/warmwell-chimney.png', '/warmwell-stove-fireplace.png'] },
      { title: 'Frézovanie komína', description: 'Úprava priemeru komína pre nové napojenie bez zbytočných zásahov do stavby.', images: ['/warmwell-chimney.png', '/klastor-jasov.png'] },
      { title: 'Nový komín', description: 'Kompletné riešenie komína podľa typu spotrebiča, dispozície a požiadaviek objektu.', images: ['/warmwell-chimney.png', '/portable-stove-white.png'] },
      { title: 'Napojenie spotrebiča', description: 'Precízne napojenie kachlí, krbu alebo pece s dôrazom na ťah a bezpečnosť.', images: ['/warmwell-chimney.png', '/warmwell-stove-fireplace.png'] },
    ],
  },
  {
    id: '3d-navrhy', title: '3D návrhy a vizualizácie', intro: 'Pred realizáciou vidíte proporcie, materiály aj atmosféru. Návrh pomáha robiť rozhodnutia s istotou.',
    products: [
      { title: 'Prvý koncept', description: 'Rýchly priestorový návrh, ktorý ukáže smer, proporcie a základný charakter riešenia.', images: ['/warmwell-3d-design.jpg', '/warmwell-realization.jpg'] },
      { title: 'Materiálová štúdia', description: 'Kombinácia kachlíc, omietok, kovu a dreva v konkrétnom interiéri.', images: ['/warmwell-3d-design.jpg', '/portable-stove-burgundy.png'] },
      { title: 'Návrh na mieru', description: 'Detailná vizualizácia vytvorená podľa pôdorysu, štýlu bývania a technických potrieb.', images: ['/warmwell-3d-design.jpg', '/warmwell-stove-fireplace.png'] },
      { title: 'Pred a po', description: 'Porovnanie súčasného priestoru s budúcou podobou pece, krbu alebo sporáka.', images: ['/warmwell-3d-design.jpg', '/klastor-jasov.png'] },
      { title: 'Realizačné podklady', description: 'Jasné podklady pre remeselnú realizáciu, aby každý detail sedel ešte pred začiatkom práce.', images: ['/warmwell-3d-design.jpg', '/warmwell-realization.jpg'] },
    ],
  },
]

export const serviceShowcaseImages = serviceShowcases.flatMap((category) => category.products.flatMap((product) => product.images))

export function getServiceShowcase(id: string) { return serviceShowcases.find((category) => category.id === id) }
