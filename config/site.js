// Toda la información específica del negocio vive aquí. Cambiar de cliente = cambiar este archivo y las fotos.
// Valores con {{...}} o TODO son placeholders: no son datos reales.

// Fotos de ejemplo de Unsplash (licencia Unsplash). TODO: reemplazar por fotos reales del cliente.
const U = (id) => `https://images.unsplash.com/${id}`

export default {
  // true = propuesta para prospecto (noindex, marca DEMO, formulario simulado). false = sitio real.
  demoMode: true,

  demo: {
    clientName: 'Fundación Reciclar Colombia',
    devName: 'el equipo de diseño',  // TODO: quién creó la propuesta
    devWhatsapp: '573227454759',   // número del desarrollador (dígitos, con 57, sin +)
  },

  business: {
    name: 'Fundación Reciclar Colombia',
    city: '',                         // TODO: ciudad real (vacío = no se muestra en el sitio)
    areaServed: '',                   // TODO: confirmar zona de cobertura
    // OJO: mientras sea demo, WhatsApp y teléfono son los del desarrollador, NO los del negocio.
    whatsapp: '573227454759',        // número de contacto (dígitos, con 57, sin +)
    phoneDisplay: '+57 322 745 4759',
    email: 'hola@tunegocio.example',  // TODO: correo real
    address: 'Visitas técnicas a domicilio', // TODO: confirmar dirección, showroom o zona reales
    hours: 'Lunes a viernes, 8:00 a. m. a 5:00 p. m.', // TODO: horario real
    hasRealData: false,               // true cuando los datos de arriba sean reales (activa JSON-LD)
  },

  // Banda promocional: solo con una oferta real.
  promo: { enabled: false, text: 'Visita técnica sin costo', linkText: 'Cotiza ahora', href: '#cotizador' }, // TODO: solo si el negocio la ofrece

  social: { instagram: '', facebook: '', tiktok: '' }, // TODO: URLs reales
  instagramHandle: 'tunegocio.demo', // TODO: usuario real

  seo: {
    description: 'Cocinas integrales, mesones y topes, muebles y closets a medida. Diseñamos, fabricamos e instalamos tu cocina. Cotiza tu proyecto por WhatsApp.',
    siteUrl: '', // TODO: URL final, para sitemap
  },

  hero: {
    eyebrow: 'COCINAS INTEGRALES A MEDIDA',
    title: 'Cocinas integrales a tu medida.',
    subtitle: 'Diseñamos, fabricamos e instalamos tu cocina. Cotiza tu proyecto por WhatsApp.',
    alt: 'Cocina integral con gabinetes oscuros, mesón claro y salpicadero en mosaico', // TODO: ajustar a la foto real
    photo: 'hero',
  },

  // Cifras reales. Vacío = se omite la banda y la barra de confianza del hero.
  metrics: [], // ej. [{ value: '{{N}}', label: 'años de experiencia' }]

  services: [
    { id: 'cocinas', name: 'Cocinas integrales', desc: 'Diseño, fabricación e instalación de tu cocina completa.', photo: 'kitchen' },
    { id: 'mesones', name: 'Mesones y topes', desc: 'Superficies de trabajo a la medida de tu cocina.', photo: 'counter' },
    { id: 'muebles', name: 'Muebles y closets a medida', desc: 'Closets, muebles de baño y almacenamiento para tu hogar.', photo: 'cabinet' },
  ],

  // TODO: el cliente define qué materiales y acabados ofrece. No inventar. (Borrador: madera, melamina, laca.)
  finishes: [
    { id: 'a1', name: 'Madera', photo: 'kitchenWood' },    // TODO: confirmar con el cliente
    { id: 'a2', name: 'Melamina', photo: 'kitchen' },      // TODO: confirmar con el cliente
    { id: 'a3', name: 'Laca', photo: 'hero' },             // TODO: confirmar con el cliente
  ],
  finishesNote: 'Te llevamos muestras a tu visita técnica', // TODO: dejar solo si es cierto; si no, ''

  extras: ['Mesón', 'Iluminación', 'Desmonte de cocina anterior', 'Instalación', 'Otros'], // TODO: confirmar con el cliente

  projectTypes: [
    { id: 'cocina', label: 'Cocina integral', unit: 'm lineales' },
    { id: 'meson', label: 'Mesón o tope', unit: 'm lineales' },
    { id: 'muebles', label: 'Muebles o closets', unit: 'm lineales' },
    { id: 'otro', label: 'Otro', unit: 'm lineales' },
  ],

  // Precio de referencia por unidad en COP, por tipo de proyecto. null = "Cotización personalizada".
  // TODO: solo con datos del cliente. ej. { cocina: 0, meson: 0 } (se muestra rango ±15%).
  pricePerUnit: null,

  starProject: {
    title: 'Proyecto estrella',
    text: 'Una cocina renovada, antes y después con el mismo encuadre.', // TODO: texto real
    place: '{{Barrio}}, {{Año}}',            // TODO: barrio y año reales
    before: 'kitchenOld', after: 'kitchen', // TODO: fotos reales "antes" y "después" con el mismo encuadre (Unsplash de ejemplo, encuadres distintos)
    advantages: ['Diseño a medida', 'Instalación incluida', 'Garantía escrita'], // TODO: solo lo que el negocio ofrezca
  },

  gallery: [
    { photo: 'kitchen', cat: 'Cocinas', alt: 'Cocina integral blanca con isla y lámparas colgantes' },
    { photo: 'counter', cat: 'Mesones', alt: 'Mesón con acabado tipo mármol en cascada' },
    { photo: 'cabinet', cat: 'Muebles y closets', alt: 'Mueble alto de madera con repisas' },
    { photo: 'kitchenIsland', cat: 'Cocinas', alt: 'Cocina con isla central y gabinetes claros' },
    { photo: 'counter2', cat: 'Mesones', alt: 'Barra con mesón blanco y bancos de madera' },
    { photo: 'kitchenDark', cat: 'Cocinas', alt: 'Cocina en L con gabinetes gris oscuro' },
  ],
  galleryCaption: '{{Barrio}}, {{Año}}', // TODO: barrio y año reales de cada proyecto

  // TODO: solo lo que el negocio realmente ofrezca
  benefits: [
    { title: 'Fabricación propia', text: 'Cada mueble se fabrica a la medida de tu espacio.' },
    { title: 'Medidas exactas', text: 'Tomamos medidas en sitio antes de diseñar tu cocina.' },
    { title: 'Instalación incluida', text: 'Nuestro equipo instala y entrega la cocina lista para usar.' },
    { title: 'Garantía escrita', text: 'Cada proyecto se entrega con su garantía por escrito.' },
  ],
  benefitsPhoto: 'detail',

  process: [
    { title: 'Visita técnica', text: 'Vamos a tu espacio, tomamos medidas y escuchamos cómo usas tu cocina.' },
    { title: 'Diseño y propuesta', text: 'Te entregamos una propuesta clara con diseño, distribución y alcance.' },
    { title: 'Fabricación', text: 'Fabricamos los módulos y mesones a la medida de tu proyecto.' },
    { title: 'Instalación y entrega', text: 'Instalamos y te entregamos la cocina lista para usar.' },
  ],

  // Reseñas de ejemplo: reemplazar por reseñas reales y verificables.
  reviews: [
    { sample: true, stars: 5, quote: 'Reseña de ejemplo: aquí irá el testimonio real de un cliente.', name: 'Nombre del cliente', project: 'Proyecto de ejemplo' },
    { sample: true, stars: 5, quote: 'Reseña de ejemplo: aquí irá el testimonio real de un cliente.', name: 'Nombre del cliente', project: 'Proyecto de ejemplo' },
    { sample: true, stars: 5, quote: 'Reseña de ejemplo: aquí irá el testimonio real de un cliente.', name: 'Nombre del cliente', project: 'Proyecto de ejemplo' },
  ],

  privacyUrl: '#privacidad', // TODO: política de tratamiento de datos (Ley 1581)
  legal: '© 2026 Fundación Reciclar Colombia. Todos los derechos reservados.', // TODO: razón social y año reales
  formEndpoint: import.meta.env?.VITE_FORM_ENDPOINT || '', // endpoint por variable de entorno

  // Logo: ruta a una imagen en /public (ej. '/logo.png'). Vacío = se muestra el nombre como wordmark.
  logo: '', // TODO: no hay public/logo.png todavía

  // IDs de foto de Unsplash. TODO: reemplazar por fotos del cliente (cada una: srcset + alt).
  photos: {
    hero: U('photo-1564540586988-aa4e53c3d799'),         // Unsplash: cocina de gabinetes oscuros, zona inferior oscura. TODO: foto real
    kitchenOld: U('photo-1556185781-a47769abb7ee'),      // Unsplash: cocina pequeña sencilla ("antes"). TODO: foto real del cliente
    kitchen: U('photo-1484154218962-a197022b5858'),      // Unsplash: cocina blanca con isla. TODO: foto real
    kitchenIsland: U('photo-1588854337221-4cf9fa96059c'), // Unsplash: cocina con isla central. TODO: foto real
    kitchenDark: U('photo-1600489000022-c2086d79f9d4'),  // Unsplash: cocina en L gris oscuro. TODO: foto real
    kitchenWood: U('photo-1600585152220-90363fe7e115'),  // Unsplash: cocina con módulos en madera. TODO: foto real
    counter: U('photo-1556912173-3bb406ef7e77'),         // Unsplash: mesón tipo mármol en cascada. TODO: foto real
    counter2: U('photo-1565538810643-b5bdb714032a'),     // Unsplash: barra con mesón blanco. TODO: foto real
    cabinet: U('photo-1595428774223-ef52624120d2'),      // Unsplash: mueble alto de madera. TODO: foto real
    detail: U('photo-1556909211-36987daf7b4d'),          // Unsplash: detalle de mesón y gabinetes. TODO: foto real
  },
}
