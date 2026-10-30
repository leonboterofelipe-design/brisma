// Todo el texto del sitio vive aquí. Reemplazar los valores marcados con TODO por datos reales.
// Los campos vacíos ('') se omiten del sitio y de los datos estructurados.

export const site = {
  name: 'Grupo Brisma',
  logoAlt: 'Brisma Abogados, asesoría legal integral',
  url: 'https://brisma.co', // TODO: confirmar dominio definitivo
  whatsapp: '573232963802',
  phone: '+57 323 296 3802',
  email: 'contacto@brisma.co', // TODO
  address: { street: '', city: '', region: '' }, // TODO: dirección real de la oficina
  hours: 'Lunes a viernes, 8:00 a.m. a 6:00 p.m.',
  openingHours: 'Mo-Fr 08:00-18:00',
  instagram: 'https://www.instagram.com/insolvencia.abogados/',
};

// Texto oficial de la Ley 2445 de 2025
export const lawUrl = 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=173897';

// Todos los CTA abren WhatsApp con un mensaje listo para enviar.
export const whatsappUrl = (text = 'Hola, quiero saber si mi caso aplica para un proceso de insolvencia.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: 'Ley 2445', href: lawUrl },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Cómo trabajamos', href: '/#proceso' },
  { label: 'Equipo', href: '/#equipo' },
  { label: 'Preguntas', href: '/#preguntas' },
];

export const home = {
  metaTitle: 'Abogados de insolvencia para personas en Colombia | Grupo Brisma',
  metaDescription: '¿Las deudas no lo dejan dormir? Le ayudamos a organizarlas en un solo acuerdo de pago que sí puede cumplir. Primera consulta confidencial.',
};

export const hero = {
  eyebrow: 'Abogados de insolvencia para personas naturales y pequeños comerciantes',
  title: 'Sus deudas tienen una salida legal. La construimos con usted.',
  text: 'Existe una ley que le permite reunir todas sus deudas en un solo acuerdo de pago, con cuotas que sí puede cumplir, y frenar los cobros mientras tanto. Somos abogados especialistas y le acompañamos en cada paso.',
  note: 'Hablamos de su situación con absoluta reserva. Le decimos con honestidad si su caso aplica.',
  firstVisit: [
    { title: 'Conocemos su situación', text: 'Revisamos juntos todas sus deudas y su capacidad real de pago.' },
    { title: 'Le orientamos con claridad', text: 'Le explicamos si aplica la insolvencia y qué camino le conviene más.' },
    { title: 'Usted decide con información', text: 'Le entregamos por escrito un plan con tiempos y costos.' },
  ],
};

export const summary = {
  title: 'En pocas palabras',
  items: [
    'Si ya no puede pagar sus deudas, la ley le permite negociarlas todas a la vez.',
    'Mientras dura el proceso, los cobros judiciales en su contra se suspenden.',
    'Usted paga según lo que realmente gana, no según lo que le exigen.',
    'Aplica para empleados, independientes, pensionados y pequeños comerciantes.',
  ],
};

export const trustSignals = [
  { title: '+300 procesos', text: 'Personas como usted que ya organizaron sus deudas con nosotros.' },
  { title: 'Diagnóstico honesto', text: 'Le explicamos si su caso aplica y qué opciones tiene.' },
  { title: 'Costos claros', text: 'Conozca las etapas y los honorarios antes de decidir.' },
  { title: 'Atención en todo el país', text: 'Audiencias virtuales, desde la ciudad en la que viva.' },
];

export const situations = {
  title: '¿Alguna de estas situaciones le suena familiar?',
  text: 'Endeudarse no es un fracaso. Dejar que la deuda decida por usted sí es un riesgo.',
  items: [
    'Paga una deuda con otra y cada mes debe más.',
    'Recibe llamadas, cartas o demandas de cobro jurídico.',
    'Le embargaron el salario, una cuenta o un bien.',
    'Sus cuotas ya superan lo que gana al mes.',
    'Tiene un pequeño negocio y no alcanza a cubrir sus obligaciones.',
    'No sabe por dónde empezar y le da temor preguntar.',
  ],
  closing: 'Si reconoce una o más, la ley tiene herramientas pensadas para usted.',
};

export const law = { // TODO: validar con los abogados
  title: '¿Qué es la Ley 2445? Se lo explicamos sin enredos.',
  text: 'Es la ley de 2025 que le permite a las personas ponerse de acuerdo con todos sus acreedores al mismo tiempo, con la ayuda de un conciliador, y pagar con cuotas acordes a sus ingresos. En otras palabras: una forma legal de salir de las deudas sin que sigan creciendo.',
  link: { label: 'Consulte el texto oficial de la Ley 2445', href: lawUrl },
  items: [
    { title: 'Más personas pueden usarla', text: 'Además de empleados e independientes, ahora también los pequeños comerciantes.' },
    { title: 'Los cobros se detienen', text: 'Al iniciar el trámite se suspenden los procesos de cobro, y quien siga cobrando puede ser sancionado.' },
    { title: 'Todo puede ser virtual', text: 'Las audiencias pueden hacerse en línea, sin importar la ciudad en la que viva.' },
  ],
  comparison: {
    caption: 'Así cambia su situación con un proceso de insolvencia',
    head: ['', 'Sin proceso', 'Con proceso de insolvencia'],
    rows: [
      ['Acreedores', 'Cada uno le cobra por su lado', 'Una sola negociación con todos'],
      ['Cobros y embargos', 'Siguen avanzando', 'Los procesos de cobro se suspenden'],
      ['Cuotas', 'Las que le imponen', 'Un plan según lo que usted gana'],
      ['Acompañamiento', 'Lo enfrenta solo', 'Un abogado a su lado en cada etapa del proceso'],
    ],
  },
};

export const services = {
  title: 'Un solo enfoque: sacarlo de la crisis de deudas de forma ordenada.',
  text: 'Nos dedicamos únicamente a la insolvencia de personas naturales y se nota en la estrategia.',
  items: [
    { title: 'Negociación de deudas', text: 'Para empleados, independientes, pensionados y pequeños comerciantes con sobreendeudamiento.', href: '/negociacion-deudas', points: ['Una sola negociación con todos sus acreedores', 'Suspensión de procesos de cobro y embargos al admitirse el trámite', 'Plan de pagos acorde con sus ingresos y gastos esenciales', 'Representación en cada audiencia ante el conciliador'] },
    { title: 'Liquidación patrimonial', text: 'Cuando no es posible un acuerdo, un cierre ordenado y transparente de sus deudas.', href: '/liquidacion-patrimonial' },
    { title: 'Pequeños comerciantes', text: 'Si tiene un negocio pequeño, ahora también puede acceder al proceso.' },
    { title: 'Insolvencia en familia', text: 'Si varios miembros de su familia tienen deudas, pueden hacer el trámite de forma coordinada y ahorrar costos.' },
    { title: 'Protección frente a cobros', text: 'Actuamos frente a los acreedores que sigan cobrando después de notificados del trámite.' },
  ],
};

export const process = {
  title: 'Tres pasos, con acompañamiento completo.',
  text: 'Usted sabe en qué etapa se encuentra y cuál es el siguiente paso.',
  steps: [
    { title: 'Consulta y diagnóstico', text: 'Analizamos sus deudas y determinamos si su caso es viable para un proceso de insolvencia.' },
    { title: 'Estrategia y documentación', text: 'Preparamos la solicitud y un plan de pagos acorde con su capacidad real.' },
    { title: 'Negociación', text: 'Lo representamos en las audiencias y en todo el proceso hasta el final.' },
  ],
};

export const about = {
  title: 'Por qué Grupo Brisma',
  quote: 'Sabemos lo que pesa una deuda. Por eso caminamos a su lado hasta encontrar la salida.',
  text: 'Detrás de cada caso hay una persona que quiere volver a dormir tranquila. Le hablamos claro, le escuchamos sin juzgar y buscamos con usted un acuerdo que de verdad pueda cumplir.',
  values: [
    ['Honestidad ante todo', 'Le decimos la verdad sobre su caso desde el primer día, aunque no sea lo que espera oír.'],
    ['+300 procesos', 'Hemos acompañado a cientos de personas como usted a salir de sus deudas.'],
    ['Soluciones reales', 'Nada de promesas imposibles: acuerdos que se ajustan a su vida y que se pueden cumplir.'],
    ['Pagos a su medida', 'Negociamos plazos y cuotas de acuerdo con lo que usted realmente puede pagar.'],
  ],
};

export const team = { // TODO: fotos reales en /public/team (nombre-apellido.jpg) y luego agregar `photo` a cada socio
  title: 'Los abogados que llevarán su caso.',
  text: 'Abogados especialistas en derecho comercial e insolvencia.',
  members: [
    { name: 'María Isabel Muñoz Tobón', photo: '/team/maria-isabel-munoz-tobon-abogada-insolvencia.png', role: 'Abogada fundadora · Especialista en derecho comercial e insolvencia', text: 'Cuenta con amplia experiencia en procesos de insolvencia y guía a sus clientes con claridad en cada etapa.' },
    { name: 'Mateo Londoño Jurado', photo: '/team/mateo-londono-jurado-abogado-insolvencia.png', role: 'Abogado fundador · Especialista en derecho comercial e insolvencia', text: 'Brinda acompañamiento completo en procesos de insolvencia, desde el diagnóstico hasta el cierre del acuerdo.' },
    { name: 'Brandon Alexis Osorio Trujillo', photo: '/team/brandon-alexis-osorio-trujillo-abogado-insolvencia.png', role: 'Abogado fundador · Especialista en derecho comercial e insolvencia', text: 'Asesora a sus clientes en procesos de insolvencia con una estrategia clara y orientada a soluciones viables.' },
    { name: 'Emiliana Cadavid Zuleta', photo: '/team/emiliana-cadavid-zuleta-abogada-insolvencia.jpg', role: 'Abogada especialista en derecho comercial e insolvencia', text: 'Representa a personas en procesos de insolvencia, con enfoque en la negociación con acreedores.' },
  ],
};

export const faq = [ // TODO: validar cada respuesta con los abogados
  { q: '¿Qué es la insolvencia de persona natural?', a: 'Es un trámite legal que le permite negociar todas sus deudas a la vez, con la ayuda de un conciliador, y pagar con cuotas acordes a sus ingresos. La Ley 2445 de 2025 lo hizo más ágil y accesible.' },
  { q: '¿Quién puede acceder?', a: 'Personas naturales: empleados, independientes, pensionados y, con la nueva ley, pequeños comerciantes con activos inferiores a 1.000 salarios mínimos. No atendemos empresas.' },
  { q: '¿Se detienen los embargos y los cobros?', a: 'Sí. Cuando se admite el trámite se suspenden los procesos de cobro en curso, y la ley sanciona a los acreedores que sigan cobrando después de ser notificados.' },
  { q: '¿Tengo que asistir en persona?', a: 'No necesariamente. Las audiencias y la convalidación de acuerdos pueden hacerse de forma virtual, desde cualquier lugar del país.' },
  { q: '¿Qué pasa con mis bienes?', a: 'Todos sus bienes, incluso los que tenga en el exterior, deben declararse. Ser transparente es clave: ocultar algo puede invalidar el acuerdo. En la consulta revisamos cómo proteger su patrimonio dentro de la ley.' },
  { q: 'Mi familia también tiene deudas, ¿podemos hacerlo juntos?', a: 'Sí. La ley permite coordinar los trámites de miembros del mismo núcleo familiar. Cada solicitud se evalúa por separado, pero las audiencias y los pagos pueden coordinarse.' },
  { q: '¿Cuánto cuesta?', a: 'Le entregamos una propuesta con honorarios y etapas antes de que decida, sin cobros ocultos. Además, la ley permite reconocer los honorarios del abogado como gastos del proceso.' },
  { q: '¿Mi información es confidencial?', a: 'Sí. Toda su información se maneja bajo reserva profesional.' },
];

export const contact = {
  title: 'Agende su consulta. Le respondemos con claridad y rapidez.',
  text: 'Cuéntenos su situación. Sin compromiso y sin tecnicismos innecesarios.',
  interests: ['Soy empleado o independiente con deudas', 'Soy pequeño comerciante', 'Me embargaron o me demandaron', 'Otra consulta'],
};
